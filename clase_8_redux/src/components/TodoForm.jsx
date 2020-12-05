import React, { useState } from 'react';
import { addTodo } from '../actions/todoActions';
import { useDispatch } from 'react-redux';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
  };

  return (
    <form className="todos-form" name="todos" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Que vas hacer KING????"
        name="todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <small>Escribi algo KING!!!!</small>
    </form>
  );
};

export default TodoForm;
