import React from 'react';
import {useI18n} from '@shopify/react-i18n';

export function HasArgument() {
  const [i18n] = useI18n({id: 'HasArgument'});

  return (
    <div>
      Hello world: ${i18n.translate('lol')}
    </div>
  );
}
