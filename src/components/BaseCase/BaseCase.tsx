import React from 'react';
import {useI18n} from '@shopify/react-i18n';

import {Alias} from './Alias';
import {NoTranslation} from './NoTranslation';

export function BaseCase() {
  const [i18n] = useI18n();

  return (
    <div>
      Hello world: ${i18n.translate('lol')}
      <Alias />
      <NoTranslation />
    </div>
  );
}
