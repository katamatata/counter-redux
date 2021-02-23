import React from 'react';

import Header from './components/Header';
import Buttons from './components/Buttons';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <Header text='Counter with Redux' />
      <Counter />
      <Buttons />
    </div>
  );
};

export default App;
