/*
So we webpack plugin would:
- Find any useI18n / withI18n calls
- Add a top-level en.json import
- Figure out the list of translation files
- Insert a dynamic import statement
- Wrap the import in a conditional statement based on the translation list
*/
import * as webpack from 'webpack';

interface Options {
  fallbackLocale: string;
  supportedLocales: string[];
  translationsFolderName: string;
  checkMissingTranslationFiles: boolean;
}

export class ReactI18nPlugin implements webpack.Plugin {
  private options: Options;

  private defaultOptions: Options = {
    fallbackLocale : 'en', 
    supportedLocales :['en'], 
    translationsFolderName: 'translations', 
    checkMissingTranslationFiles: false,
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
        parser.hooks.importSpecifier.tap(
          'importSpecifier',
          (_statement: any, _source: any, identifierName: any) => {
            if (identifierName === 'useI18n') {
              const translationFiles = parser.state.compilation.compiler.inputFileSystem.readdirSync(
                `${parser.state.module.context}/translations`,
              );

              console.log('translationFiles', translationFiles);
              // TODO: Push translation files into parser state (or the module)
              // TODO: in a parser hook, look for `useI18n` calls and rewrite to use the translationFiles list
            }
          },
        );
      };

      normalModuleFactory.hooks.parser
          .for('javascript/auto')
          .tap('HarmonyModulesPlugin', handler);
    });
  }
}