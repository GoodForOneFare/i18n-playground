/*
So we webpack plugin would:
- Find any useI18n / withI18n calls
- Add a top-level en.json import
- Figure out the list of translation files
- Insert a dynamic import statement
- Wrap the import in a conditional statement based on the translation list
*/
import * as webpack from 'webpack';

const TRANSLATION_DIRECTORY_NAME =  'translations';

interface Options {
  fallbackLocale: string;
}

export class ReactI18nPlugin implements webpack.Plugin {
  private options: Options;
  // private needTransform: Map<string, string[]> = new Map();

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
    compiler.hooks.compilation.tap('ReactI18nPlugin', (
      _compilation: webpack.compilation.Compilation, 
      {normalModuleFactory}: {normalModuleFactory: webpack.compilation.NormalModuleFactory},
    ) => {

      const handler = (parser: any) => {

        // find all the components that has useI18n import
        parser.hooks.importSpecifier.tap(
          'ReactI18nPlugin',
          (_statement: any, _source: any, exportName: string, identifierName: string) => {
            const componentPath = parser.state.module.resource;
            if (exportName === 'useI18n') {
              if (!parser.state.i18nImports) parser.state.i18nImports = new Map<string, string>();
              parser.state.i18nImports.set(componentPath, identifierName);
            }
          },
        );

        parser.hooks.evaluate.for('CallExpression').tap('ReactI18nPlugin', (expression: any) => {
          const componentPath = parser.state.module.resource;
          const identifierName = parser.state.i18nImports && parser.state.i18nImports.get(componentPath);

          // find when useI18n are use 
          if (identifierName === expression.callee.name) {

            // find all the translationFiles
            const translationFiles = getTranslationFiles(parser, this.options.fallbackLocale);
            if (translationFiles.length > 0) {
              console.log('needTransform', expression.callee.name);
              debugger;
            }
          }
        });
      };

      normalModuleFactory.hooks.parser
          .for('javascript/auto')
          .tap('HarmonyModulesPlugin', handler);
    });
  }
}

// Return a list of translationFiles name only fall back locale exist
function getTranslationFiles(parser: any, fallbackLocale: string): string[] {
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

  const fallBackExist = translationFiles
      .find((translationFile) => translationFile === `${fallbackLocale}.json`);
  
  if (fallBackExist) {
    return translationFiles;
  } else {
    return [];
  }
}