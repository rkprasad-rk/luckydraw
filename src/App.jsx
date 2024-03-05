/* eslint-disable no-param-reassign */
import React, { Suspense, lazy } from 'react';

const PlayApp = lazy(() => import('./pages/PlayApp'));
function App() {
  return (
    <Suspense fallback={<h1>Loading...!</h1>}>
      <PlayApp />
    </Suspense>
  );
}

export default App;
