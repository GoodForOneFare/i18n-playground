import React from 'react';
import {useI18n as useI18nFinal} from '@shopify/react-i18n';

import en from './translations/en.json';

export function HasArgument() {
  const [i18n] = useI18nFinal({
    id: 'HasArgument',
    fallback: en,
    translations(locale) {
      const translations = ["fr"];

      if (translations.indexOf(locale) < 0) {
        return;
      }

      return (async () => {
        const dictionary = await import(/* webpackChunkName: "HasArgument-i18n", webpackMode: "lazy-once" */ `./translations/${locale}.json`);
        return dictionary && dictionary.default;
      })();
    },
  });

  return (
    <div>
      Hello world: ${i18n.translate('lol')}
    </div>
  );
}
