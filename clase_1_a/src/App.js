import React from 'react';
import { render } from 'react-dom';

const Cars = ({ marca, modelo, tipo }) => {
  return (
    <div>
      <h2>{marca}</h2>
      <h3>{modelo}</h3>
      <h4>{tipo}</h4>
    </div>
  );
};

const Title = ({ title }) => {
  return <h1 id="miId">{title}</h1>;
};

const App = () => {
  return (
    <div>
      <Title title="React baby" />
      <Cars marca="FIAT" modelo="Punto" tipo="sedan" />
      <Cars marca="FORD" modelo="FIESTA" tipo="sedan" />
      <Cars marca="FERRARI" modelo="F50" tipo="coupé" />
    </div>
  );
};

render(React.createElement(App), document.getElementById('root'));
