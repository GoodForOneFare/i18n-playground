import React from 'react';
import {useI18n as useI18nNew} from '@shopify/react-i18n';

export function Alias() {
  const [i18n] = useI18nNew();

  return (
    <div>
      Hello world: ${i18n.translate('lol')}
    </div>
  );
}
