import React, { useReducer, useEffect } from 'react';
import { validate } from '../../utils/validator';

import './input.css';

const CHANGE = 'CHANGE';
const TOUCH = 'TOUCH';

const inputReducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case TOUCH:
      return {
        ...state,
        isTouche: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouche: false,
    isValid: props.initialValid || '',
  });

  const { value, isValid } = inputState;
  const { onInput, id } = props;
  useEffect(() => {
    onInput(id, value, isValid);
  }, [onInput, id, value, isValid]);

  const changeHandler = (ev) => {
    dispatch({
      type: CHANGE,
      val: ev.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = (ev) => {
    dispatch({
      type: TOUCH,
    });
  };
  // console.log(inputState);
  const element =
    props.element === 'input' ? (
      <input
        type={props.type}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea onChange={changeHandler} value={inputState.value} />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouche && 'form-control--invalid'
      }`}
    >
      <label>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouche && (
        <p>{props.errorMessage}</p>
      )}
    </div>
  );
};

export default Input;

//API INPUT
/**
 * <Input
 *  element="input"
 *  type="email"
 *  id="email"
 *  label="Agregar Email"
 *  onInput={fn}
 *  validators={[]}
 *  errorMessage="email invalido">
 *
 *  </Input>
 */

//INPUT STATE
//  {
//    value: "lala@lala.com21123"
//    isValid:true || false,
//    isTouche: true || false,
//  }
