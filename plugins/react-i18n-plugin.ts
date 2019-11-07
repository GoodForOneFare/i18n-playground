import path from 'path';

import webpack from 'webpack';
import stringHash from 'string-hash';
import {camelCase} from 'change-case';
import VirtualModulesPlugin from 'webpack-virtual-modules';
import ParserHelpers from 'webpack/lib/ParserHelpers';
import {CallExpression, Expression, SpreadElement} from 'estree';

const PLUGIN_NAME = 'ReactI18nPlugin';
const TRANSLATION_DIRECTORY_NAME = 'translations';

interface Options {
  fallbackLocale: string;
}

export class ReactI18nPlugin implements webpack.Plugin {
  private options: Options;

  private defaultOptions: Options = {
    fallbackLocale: 'en',
  };

  constructor(options: Partial<Options> = {}) {
    this.options = {
      ...options,
      ...this.defaultOptions,
    };
  }

  apply(compiler: webpack.Compiler) {
    const virtualModules = new VirtualModulesPlugin();
    virtualModules.apply(compiler);

    compiler.hooks.compilation.tap(
      PLUGIN_NAME,
      (
        compilation: webpack.compilation.Compilation,
        {
          normalModuleFactory,
        }: {normalModuleFactory: webpack.compilation.NormalModuleFactory},
      ) => {
        const handler = (parser: any) => {
          // find all the identifierName for useI18n & withI18n import
          parser.hooks.importSpecifier.tap(
            PLUGIN_NAME,
            (
              _statement: string,
              source: string,
              exportName: string,
              identifierName: string,
            ) => {
              if (
                source !== '@shopify/react-i18n' &&
                exportName !== 'useI18n' &&
                exportName !== 'withI18n'
              ) {
                return;
              }

              const componentPath = parser.state.module.resource;
              if (!parser.state.i18nImports)
                parser.state.i18nImports = new Map<string, string>();
              parser.state.i18nImports.set(componentPath, identifierName);
            },
          );

          // replace useI18n & withI18n call arguments
          parser.hooks.evaluate
            .for('CallExpression')
            .tap(PLUGIN_NAME, (originalExpression: CallExpression) => {
              if (
                parser.state.module.resource.indexOf('node_modules') !== -1 &&
                !parser.state.module.resource.endsWith('tsx') &&
                !parser.state.i18nImports
              ) {
                return;
              }

              const componentPath = parser.state.module.resource;
              const componentDir = parser.state.module.context;
              const identifierName = parser.state.i18nImports.get(
                componentPath,
              );

              if (
                !identifierName ||
                originalExpression.callee.type !== 'Identifier'
              ) {
                return;
              }

              let expression: CallExpression | null = null;
              if (originalExpression.callee.name === 'compose') {
                const foundExpressions: Array<
                  Expression | SpreadElement
                > = originalExpression.arguments.filter(
                  node =>
                    node.type === 'CallExpression' &&
                    node.callee.type === 'Identifier' &&
                    node.callee.name === identifierName,
                );

                if (foundExpressions.length > 0) {
                  expression = foundExpressions[0] as CallExpression;
                }
              } else if (originalExpression.callee.name === identifierName) {
                expression = originalExpression;
              }

              // skip calls where consumer manually added arguments
              if (!expression || expression.arguments.length > 0) {
                return;
              }

              const translationFiles = getTranslationFiles(parser);
              if (translationFiles.length === 0) {
                return;
              }

              // check if fall back exist
              const fallBackExist = translationFiles.find(
                translationFile =>
                  translationFile === `${this.options.fallbackLocale}.json`,
              );

              const fallBackFileRelativePath = path.join(
                './',
                TRANSLATION_DIRECTORY_NAME,
                `${this.options.fallbackLocale}.json`,
              );

              if (!fallBackExist) {
                compilation.errors.push(
                  `${componentPath}\n` +
                    `${identifierName} 's arguments was not automatically filled in because` +
                    `fallback translation file was not found at ${fallBackFileRelativePath} \n`,
                );
                return;
              }

              // Add a top-level fallbackLocale import
              const fallbackLocaleID = camelCase(this.options.fallbackLocale);

              const fallbackFileExpression = ParserHelpers.requireFileAsExpression(
                componentDir,
                path.join(componentDir, fallBackFileRelativePath),
              );
              ParserHelpers.addParsedVariableToModule(
                parser,
                fallbackLocaleID,
                fallbackFileExpression,
              );

              // Replace i18n call arguments
              const componentFileName = componentPath
                .split('/')
                .pop()!
                .split('.')[0];
              const id = generateID(componentFileName);
              const chunkName = getChunkName(id);
              const translationFactoryName = 'translationFactory';

              ParserHelpers.toConstantDependency(
                parser,
                i18nCallArguments({
                  id,
                  translationFactoryName,
                  fallbackLocale: this.options.fallbackLocale,
                  fallbackLocaleID,
                  translationFiles,
                }),
              )(expression);

              // add translation function import
              const factoryPath = path.join(
                componentDir,
                TRANSLATION_DIRECTORY_NAME,
                'translationFactory.js',
              );
              const factorySource = buildFactorySource(chunkName);
              virtualModules.writeModule(factoryPath, factorySource);

              const asyncTranslationFactoryExpression = ParserHelpers.requireFileAsExpression(
                parser.state.module.context,
                factoryPath,
              );
              ParserHelpers.addParsedVariableToModule(
                parser,
                translationFactoryName,
                asyncTranslationFactoryExpression,
              );
            });
        };

        normalModuleFactory.hooks.parser
          .for('javascript/auto')
          .tap('HarmonyModulesPlugin', handler);

        normalModuleFactory.hooks.parser
          .for('javascript/esm')
          .tap('HarmonyModulesPlugin', handler);

        normalModuleFactory.hooks.parser
          .for('javascript/dynamic')
          .tap('HarmonyModulesPlugin', handler);
      },
    );
  }
}

// Return a list of translationFiles name	function i18nCallExpression(
function getTranslationFiles(parser: any): string[] {
  const componentDirectory = parser.state.module.context;
  const translationsDirectoryPath = `${componentDirectory}/${TRANSLATION_DIRECTORY_NAME}`;

  let translationFiles: string[] = [];
  try {
    translationFiles = parser.state.compilation.compiler.inputFileSystem.readdirSync(
      translationsDirectoryPath,
    );
  } catch (error) {
    // do nothing if the directory does not exist
  }

  return translationFiles;
}

function getChunkName(id: string) {
  return `${id}-i18n`;
}

function i18nCallArguments({
  id,
  translationFactoryName,
  fallbackLocale,
  fallbackLocaleID,
  translationFiles,
}: {
  id: string;
  translationFactoryName: string;
  fallbackLocale: string;
  fallbackLocaleID: string;
  translationFiles: string[];
}): string {
  const translations = translationFiles
    .filter(
      translationFile => !translationFile.endsWith(`${fallbackLocale}.json`),
    )
    .map(translationFile =>
      JSON.stringify(
        path.basename(translationFile, path.extname(translationFile)),
      ),
    )
    .sort()
    .join(', ');

  return `({
    id: '${id}',
    fallback: ${fallbackLocaleID},
    translations(locale) {
      const translations = [${translations}];

      if (translations.indexOf(locale) < 0) {
        return;
      }

      return ${translationFactoryName}(locale);
    },
  })`;
}

function buildFactorySource(chunkName: string) {
  return `
    function translationFactory(locale) {
      return async () => {
        const dictionary = await import(
          /* webpackChunkName: "${chunkName}", webpackMode: "lazy-once" */
          \`./$\{locale}.json\`
        );
        return dictionary && dictionary.default;
      }
    }`;
}

// based on postcss-modules implementation
// see https://github.com/css-modules/postcss-modules/blob/60920a97b165885683c41655e4ca594d15ec2aa0/src/generateScopedName.js
function generateID(filename: string) {
  const hash = stringHash(filename)
    .toString(36)
    .substr(0, 5);
  const extension = path.extname(filename);
  const legible = path.basename(filename, extension);
  return `${legible}_${hash}`;
}
