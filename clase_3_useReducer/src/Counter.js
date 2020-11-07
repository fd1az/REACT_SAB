import React, { useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import './style.css';

//? useState, persiste el estado entre re-renders y lanza un re-render cuando el estado cambia

const reducer = (state, action) => {
  switch (action.type) {
    case 'SUMAR':
      return { ...state, counter: state.counter + 1 };
    case 'RESTAR':
      return {
        ...state,
        counter: state.counter - 1 < 1 ? 0 : state.counter - 1,
        error:
          state.counter < 1 ? 'Error: el contador debe set mayor que 0' : null,
      };
    case 'BORRAR_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

const Counter = () => {
  //Seteamos el estado
  // const [counter, setCounter] = useState(0); //  -> [estado, setEstado]
  // const [error, setError] = useState(null);
  // ('Error');

  const [{ counter, error }, dispatch] = useReducer(reducer, {
    counter: 0,
    error: null,
  });

  //Handlers
  const handlerAdd = () => {
    dispatch({ type: 'SUMAR' });
  };

  const handlerSubtract = () => {
    dispatch({ type: 'RESTAR' });
  };

  const removeError = () => {
    dispatch({ type: 'BORRAR_ERROR' });
  };

  const componente = (
    <div>
      <div className="counter">
        <div>
          <button type="button" className="btn" onClick={handlerSubtract}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <div className="number-counter">{counter}</div>
        <div>
          <button type="button" className="btn" onClick={handlerAdd}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>

      {error && (
        <div style={{ margin: '20px' }}>
          <center>
            <button className="btn" onClick={removeError}>
              Borrar error
            </button>
            <p style={{ color: 'red' }}>{error}</p>
          </center>
        </div>
      )}
    </div>
  );
  console.log(componente);
  return componente;
};

export default Counter;

// val ? true : fals
