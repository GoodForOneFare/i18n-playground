import React from 'react';
import {WithI18nProps, withI18n} from '@shopify/react-i18n';

type ComposedProps = WithI18nProps;

function HigherOrder({i18n}: ComposedProps) {
  return (
    <div>
      Hello world: ${i18n.translate('lol')}
    </div>
  );
}

export default withI18n()(HigherOrder);
