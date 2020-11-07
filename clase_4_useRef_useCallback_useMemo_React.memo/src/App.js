import React, { useState, useRef, useEffect, useCallback } from 'react';
import { render } from 'react-dom';
import './style.css';

import FactoriaDe from './FactorialDe';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [factorialNum, setFactorialNum] = useState(1);
  const [factorialNum2, setFactorialNum2] = useState(1);

  let id = useRef(); //{current: <algun valor>}
  const miInput = useRef();
  const stopCounter = () => {
    return clearInterval(id.current);
  };

  const memoIncrementFactorial = useCallback(() => {
    setFactorialNum((prevFactorial) => prevFactorial + 1);
  }, []);

  //   const incrementFactorial = () => {
  //     setFactorialNum((prevFactorial) => prevFactorial + 1);
  //   };

  const memoIncrementFactorial2 = useCallback(() => {
    setFactorialNum2((prevFactorial) => prevFactorial + 1);
  }, []);

  //   const incrementFactorial2 = () => {
  //     setFactorialNum2((prevFactorial) => prevFactorial + 1);
  //   };

  useEffect(() => {
    id.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      stopCounter();
    };
  }, []);
  //console.log(id.current);
  return (
    <div>
      <div>
        <h3>{counter}</h3>
        <button onClick={stopCounter}>Stop</button>
      </div>
      <br />
      <div>
        <input ref={miInput} />
        <button onClick={() => miInput.current.focus()}>Focus</button>
      </div>

      <br />
      <hr />
      <div>
        <FactoriaDe num={factorialNum} increment={memoIncrementFactorial} />
      </div>

      <br />
      <hr />
      <div>
        <FactoriaDe num={factorialNum2} increment={memoIncrementFactorial2} />
      </div>
    </div>
  );
};
render(React.createElement(App), document.getElementById('root'));
