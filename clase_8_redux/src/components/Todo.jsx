import React, { useState, useRef, useEffect } from 'react';
import {
  completeTodo,
  deleteTodo,
  editMode,
  editTodo,
} from '../actions/todoActions';
import { useDispatch } from 'react-redux';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(todo.label);
  const myInput = useRef();

  const handlerCheck = () => dispatch(completeTodo(todo.id));
  const handlerDelete = () => dispatch(deleteTodo(todo.id));
  const handlerEditMode = () => dispatch(editMode(todo.id));

  const handlerEditTodo = (e) => {
    if (e.key === 'Enter') {
      dispatch(editTodo(todo.id, inputValue));
      dispatch(editMode(todo.id));
    }
  };

  const handlerEditTodoBlur = (e) => {
    dispatch(editTodo(todo.id, inputValue));
    dispatch(editMode(todo.id));
  };

  useEffect(() => {
    if (todo.editMode) {
      myInput.current.focus();
    }
  }, [todo.editMode]);

  return (
    <li className={todo.complete ? 'todos-complete' : ''}>
      <input
        type="checkbox"
        checked={todo.complete ? 'checked' : ''}
        onChange={handlerCheck}
      />
      {todo.editMode ? (
        <input
          ref={myInput}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handlerEditTodo}
          onBlur={handlerEditTodoBlur}
        />
      ) : (
        <span onDoubleClick={handlerEditMode}>{todo.label}</span>
      )}

      <button type="button" onClick={handlerDelete}></button>
    </li>
  );
};

export default Todo;
