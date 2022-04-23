import React, { useMemo } from 'react';

import './App.css';

// number
// string
// boolean
// Array<> || string[]
// any
// unknown

// type A = string | boolean | number | string[];

// type CustomString = 'name' | 'last name' | 'mail';

// let customStr: CustomString = 'name'

// <Type> is the syntax for Generic type

// function addValue<GenericType>(value: GenericType): string {
//   return value + 'custom test';
// }

// function checkForAnErrors<T>(value: T): T {
//   if (typeof value === 'string') {
//     return '';
//   }

//   if (typeof value === 'number') {
//     return 23;
//   }

//   return value;
// }

// checkForAnErrors(232);

function App() {
  const routes = useMemo<string[]>(() => ['Home', 'About'], []);

  return (
    // TODO: add here a routes (map throught routes variable and generate hete <Route /> componets for each route in array)
  <>
  </>
  );
}

export default App;
