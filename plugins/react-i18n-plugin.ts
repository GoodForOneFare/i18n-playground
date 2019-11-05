/*
TODO:
- type webpack/lib/dependencies
- type Parser  
- get it working with compose + withI18n ( it is nested under expression.arguments[0].callee.name)
- add a top-level fallbackLocale import variable 
*/
import webpack from 'webpack';
import path from 'path';
import stringHash from 'string-hash';
import {camelCase} from 'change-case';

import HarmonyImportSideEffectDependency from 'webpack/lib/dependencies/HarmonyImportSideEffectDependency';
import ParserHelpers from 'webpack/lib/ParserHelpers';

import {CallExpression} from 'estree'

const PLUGIN_NAME = 'ReactI18nPlugin';
const TRANSLATION_DIRECTORY_NAME =  'translations';

interface Options {
  fallbackLocale: string;
}

export class ReactI18nPlugin implements webpack.Plugin {
  private options: Options;

  private defaultOptions: Options = {
    fallbackLocale : 'en', 
  }

  constructor(options: Partial<Options> = {}) {
    this.options = {
      ...options, 
      ...this.defaultOptions,
    };
  }

  apply(compiler: webpack.Compiler) {
    compiler.hooks.compilation.tap(PLUGIN_NAME, (
      compilation: webpack.compilation.Compilation,
      {normalModuleFactory}: {normalModuleFactory: webpack.compilation.NormalModuleFactory}
    ) => {
      const handler = (parser: any) => {

        parser.hooks.importSpecifier.tap(
          PLUGIN_NAME,
          (_statement: string, source: string, exportName: string, identifierName: string) => {
            if (source !== '@shopify/react-i18n' && exportName !== 'useI18n' && exportName !== 'withI18n') {
              return;
            }

            const componentPath = parser.state.module.resource;
            if (!parser.state.i18nImports) parser.state.i18nImports = new Map<string, string>();
            parser.state.i18nImports.set(componentPath, identifierName);
          },
        );

        parser.hooks.evaluate.for('CallExpression').tap(PLUGIN_NAME, (expression: CallExpression) => {
          if (
            parser.state.module.resource.indexOf('node_modules') !== -1 &&
            !parser.state.module.resource.endsWith('tsx') &&
            !parser.state.i18nImports
          ) {
            return;
          }

          const componentPath = parser.state.module.resource;
          const identifierName = parser.state.i18nImports.get(componentPath);

          // skip calls where consumer manually added arguments
          if (!identifierName ||
            expression.callee.type !== 'Identifier' || 
            expression.callee.name !== identifierName ||
            expression.arguments.length > 0
          ) {
            return;
          }

          const translationFiles = getTranslationFiles(parser);
          if (translationFiles.length === 0) {
            return;
          }

          const fallBackExist = translationFiles
            .find((translationFile) => translationFile === `${this.options.fallbackLocale}.json`);

          const fallBackFileRelativePath = `./${TRANSLATION_DIRECTORY_NAME}/${this.options.fallbackLocale}.json`;

          if (!fallBackExist) {
            compilation.errors.push(
              `${componentPath}\n` + 
              `${identifierName} 's arguments was not automatically filled in because` + 
              `fallback translation file was not found at ${fallBackFileRelativePath} \n`
            );
            return;
          }

          // TODO: Add a top-level fallbackLocale import
          const fallbackLocaleID = camelCase(this.options.fallbackLocale);
          //ParserHelpers.toConstantDependency(parser, fallbackLocaleID)(`./${TRANSLATION_DIRECTORY_NAME}/${this.options.fallbackLocale}.json`);
          // const fallbackFileDep = new HarmonyImportSideEffectDependency(
          //   `./${TRANSLATION_DIRECTORY_NAME}/${this.options.fallbackLocale}.json`,
          //   parser.state.lastHarmonyImportOrder + 1,
          //   this.options.fallbackLocale,
          // );
          // parser.state.module.addDependency(fallbackFileDep);
          // const req = `require(${JSON.stringify(workerLoader + '?' + JSON.stringify(loaderOptions) + '!' + dep.string)})`;
          // ParserHelpers.addParsedVariableToModule(parser, fallbackLocaleID, req);
          // const dep = parser.evaluateExpression(expr.arguments[0]);
          // ParserHelpers.toConstantDependency(parser, fallbackLocaleID)(expr.arguments[0]);

          // TODO: Add the fall back import into i18n call
          ParserHelpers.toConstantDependency(
            parser, 
            i18nCallExpression(
              identifierName, 
              componentPath, 
              this.options.fallbackLocale, 
              fallbackLocaleID,
              translationFiles
            ),
          )(expression);
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
    });
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

function i18nCallExpression(
  identifierName: string, 
  componentPath: string,
  fallbackLocale: string,
  fallbackLocaleID: string,
  translationFiles: string[],
): string {
  
  const componentFileName = componentPath.split('/').pop()!.split('.')[0];
  const id = generateID(componentFileName);
  const translations = translationFiles
    .filter(translationFile => !translationFile.endsWith(`${fallbackLocale}.json`))
    .map(translationFile => JSON.stringify(path.basename(translationFile, path.extname(translationFile))))
    .sort()
    .join(', ');

  return `${identifierName}({
    id: '${id}',
    fallback: ${fallbackLocaleID},
    translations(locale) {
      const translations = [${translations}];

      if (translations.indexOf(locale) < 0) {
        return;
      }

      return (async () => {
        const dictionary = await import(/* webpackChunkName: "${id}-i18n", webpackMode: "lazy-once" */ \`./translations/$\{locale}.json\`);
        return dictionary && dictionary.default;
      })();
    },
  })`
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


// function getI18nIdentifierName(ast: Program): string | undefined {
//   let i18nImportSpecifiers = [];

//   try {
//     i18nImportSpecifiers = ast.body
//       .reduce((accumulator, node) => {
//         if (
//           node.type === "ImportDeclaration" && 
//           node.source.value === "@shopify/react-i18n"
//         ) {
//           return accumulator.concat(node.specifiers);
//         }
//         return accumulator
//       }, [] as (ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier)[])
//       .filter((node) => 
//         node.type === "ImportSpecifier" && 
//         (node.imported.name === "useI18n" || node.imported.name === "withI18n")
//       );
//   } catch(error) {
//     return;
//   }
            
//   if (i18nImportSpecifiers.length === 0) {
//     return;
//   }

//   const i18nImportSpecifier = i18nImportSpecifiers[0];
//   const i18nIdentifierName = i18nImportSpecifier.local.name;

//   return i18nIdentifierName;
// }