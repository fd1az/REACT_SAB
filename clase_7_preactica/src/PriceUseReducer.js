import React, { useReducer } from 'react';

import './style.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_PRECIO':
      return {
        ...state,
        precio: action.value,
        resultado:
          parseFloat((action.value * state.porcentaje) / 100) +
          parseFloat(action.value),
      };
    case 'CHANGE_PORCENTAJE':
      return {
        ...state,
        porcentaje: action.value,
        resultado:
          parseFloat((state.precio * action.value) / 100) +
          parseFloat(state.precio),
      };
    default:
      return state;
  }
};

const PriceUseState = () => {
  const [state, dispatch] = useReducer(reducer, {
    precio: 0,
    porcentaje: 0,
    resultado: 0,
  });

  const handlerPrecio = (e) => {
    dispatch({
      type: 'CHANGE_PRECIO',
      value: e.target.value,
    });
  };
  const handlerPorcentaje = (e) => {
    dispatch({
      type: 'CHANGE_PORCENTAJE',
      value: e.target.value,
    });
  };

  const componente = (
    <div>
      <div className="counter">
        <div>
          <input type="number" value={state.precio} onChange={handlerPrecio} />
        </div>

        <div>
          <input
            type="number"
            value={state.porcentaje}
            onChange={handlerPorcentaje}
          />
        </div>

        <div className="number-counter">{state.resultado}</div>
      </div>
    </div>
  );
  console.log(componente);
  return componente;
};

export default PriceUseState;

// val ? true : fals
