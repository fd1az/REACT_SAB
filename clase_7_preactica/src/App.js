import React from 'react';
import { render } from 'react-dom';
//import PriceUseState from './PriceUseState';
import PriceUseReducer from './PriceUseReducer';

const App = () => {
  return <PriceUseReducer />;
};

render(React.createElement(App), document.getElementById('root'));
