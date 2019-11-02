import React from 'react';
import {WithI18nProps, withI18n as withI18nNew} from '@shopify/react-i18n';
import compose from '@shopify/react-compose';

type ComposedProps = WithI18nProps;

function HigherOrderWithCompose({i18n}: ComposedProps) {
  return (
    <div>
      Hello world: ${i18n.translate('lol')}
    </div>
  );
}

export default compose<{}>(
  //@ts-ignore
  withI18nNew(),
)(HigherOrderWithCompose);
