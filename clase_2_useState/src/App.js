import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';

const App = () => {
  return <Counter />;
};

render(React.createElement(App), document.getElementById('root'));
