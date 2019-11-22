import React from 'react';
import {BaseCase, Alias, HigherOrder, HigherOrderWithCompose, MultiUse, SameFileNameOne, SameFileNameTwo, SharedTranslation, NoTranslation, HasArgument} from './components';

export function App() {
  return (
    <div>
      <Alias />
      <BaseCase />
      <HasArgument />
      <HigherOrderWithCompose />
      <HigherOrder />
      <SameFileNameOne />
      <SameFileNameTwo />
      <SharedTranslation />
      <NoTranslation />
    </div>
  );
}
console.log(App);