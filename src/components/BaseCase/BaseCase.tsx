import React from 'react';
import {useI18n} from '@shopify/react-i18n';
import {useField, useForm} from '@shopify/react-form';

import {Alias} from './Alias';
import {NoTranslation} from './NoTranslation';

export function BaseCase() {
  const [i18n] = useI18n();
  const {submit} = useForm({
    fields: {
      title: useField('some default title'),
    },
  });

  return (
    <form onSubmit={submit}>
      Hello world: ${i18n.translate('lol')}
      <Alias />
      <NoTranslation />
    </form>
  );
}
