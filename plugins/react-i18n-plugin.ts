/*
So we webpack plugin would:
- Insert a dynamic import statement
- Wrap the import in a conditional statement based on the translation list
*/
import webpack from 'webpack';
import path from 'path';
import stringHash from 'string-hash';
import HarmonyImportSideEffectDependency from 'webpack/lib/dependencies/HarmonyImportSideEffectDependency';

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
    compiler.hooks.normalModuleFactory.tap('ReactI18nPlugin', (
      normalModuleFactory: webpack.compilation.NormalModuleFactory
    ) => {

      const handler = (parser: any) => {

        // find all the components that has useI18n import
        parser.hooks.importSpecifier.tap(
          'ReactI18nPlugin',
          (_statement: any, _source: any, exportName: string, identifierName: string) => {
            
            if (exportName !== 'useI18n') {
              return;
            }

            const componentPath = parser.state.module.resource;
            if (!parser.state.i18nImports) parser.state.i18nImports = new Map<string, string>();
              parser.state.i18nImports.set(componentPath, identifierName);
          },
        );

        parser.hooks.evaluate.for('CallExpression').tap('ReactI18nPlugin', (expression: any) => {
          const componentPath = parser.state.module.resource;
          const identifierName = parser.state.i18nImports && parser.state.i18nImports.get(componentPath);
          
          // find when useI18n are use with no argument
          if (identifierName !== expression.callee.name || expression.arguments.length > 0) {
            return;
          }
          
          const translationFiles = getTranslationFiles(parser);
          if (translationFiles.length === 0) {
            return;
          }

          // Add a top-level fallbackLocale import
          const fallBackExist = translationFiles
            .find((translationFile) => translationFile === `${this.options.fallbackLocale}.json`);

          if (!fallBackExist) {
            return;
          }

          console.log('needTransform', expression.callee.name);

          const fallBackId = this.options.fallbackLocale;

          const fallbackLocaleDep = new HarmonyImportSideEffectDependency(
            `./${TRANSLATION_DIRECTORY_NAME}/${this.options.fallbackLocale}.json`,
          );
          parser.state.current.addDependency(fallbackLocaleDep);

          debugger;

          // const componentFileName = componentPath.split('/').pop().split('.')[0];
          // const id = generateID(componentFileName);
          // expression.arguments.push({id});
        });
      };

      normalModuleFactory.hooks.parser
          .for('javascript/auto')
          .tap('HarmonyModulesPlugin', handler);
    });
  }
}

// Return a list of translationFiles name
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
