import React from 'react';
import {useI18n} from '@shopify/react-i18n';

export function BaseCase() {
  const [i18n] = useI18n();

  return (
    <div>
      Hello world: ${i18n.translate('lol')}
    </div>
  );
}
