import React from 'react';
import {BaseCase, Alias, HigherOrder, HigherOrderWithCompose, NoTranslation, HasArgument, MissingFallback} from './components';

export function App() {
  return (
    <div>
      <BaseCase />
      <Alias />
      <HigherOrder />
      <HigherOrderWithCompose />
      <NoTranslation />
      <HasArgument />
      {/* Delete MissingFallback/en.json to test below error */}
      <MissingFallback /> 
    </div>
  );
}
console.log(App);