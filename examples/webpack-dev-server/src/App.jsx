// @flow

import * as React from 'react';
import ClassDefault from './ClassDefault';
import { ClassNamed } from './ClassNamed';
import FunctionDefault from './FunctionDefault';
import { FunctionNamed } from './FunctionNamed';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

export function useTest<RandomType: {}>() {
  return {};
};

function App() {
  const test = useTest<*>();

  return (
    <div>
      <ClassDefault />
      <ClassNamed />
      <FunctionDefault />
      <FunctionNamed />
      <React.Suspense fallback={<h1>Loading</h1>}>
        <LazyComponent />
      </React.Suspense>
    </div>
  );
}

export default App;
