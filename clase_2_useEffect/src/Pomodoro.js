import React, { useState, useEffect } from 'react';
import './style.css';

const padTime = (time) => {
  return time.toString().padStart(2, '0');
};

const Pomodoro = () => {
  const [title, setTitle] = useState('Arrancando Sesión....');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(Math.floor(timeLeft - minutes * 60));

  const startTimer = () => {
    setIsRunning(true);
    setTitle('Tiempo de enfocarse!!!!!!');
  };
  const stopTimer = () => {
    setIsRunning(false);
    setTitle('OK te espero');
  };
  const resetTimer = () => {
    setTitle('Otra vez?');
    setTimeLeft(25 * 60);
    setIsRunning(false);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((timePrev) => timePrev - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <div className="app">
      <h2>{title}</h2>
      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="buttons">
        {!isRunning && <button onClick={startTimer}> Start</button>}
        {isRunning && <button onClick={stopTimer}> Stop</button>}
        <button onClick={resetTimer}> Reset</button>
      </div>
    </div>
  );
};

export default Pomodoro;
