import React from 'react';
import {useI18n, withI18n} from '@shopify/react-i18n';

function MultiUse() {
  const [i18n] = useI18n();

  return (
    <div>
      Hello world: ${i18n.translate('lol')}
    </div>
  );
}

export default withI18n()(MultiUse);