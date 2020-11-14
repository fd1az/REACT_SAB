import React, { useState } from 'react';

import Card from '../../components/card/Card';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

import useForm from '../../hooks/useForm';

import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../utils/validator';

import './auth.css';

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { formState, inputHandler, setFormData } = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          email: {
            value: formState.inputs.email.value || '',
            isValid: false,
          },
          password: {
            value: formState.inputs.password.value || '',
            isValid: false,
          },
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formState.isValid) {
      console.log('Ahahaha no dijiste la palabra magica!!');
      return;
    }
    console.log('Form Enviado!! :)');
    console.log(formState.inputs);
  };

  console.log(formState);
  return (
    <Card className="authentication">
      <h2>Auth</h2>
      <form onSubmit={submitHandler}>
        {!isLoginMode && (
          <Input
            id="name"
            type="text"
            element="input"
            label="nombre"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            initialValid={false}
            errorMessage="Sin nombre no hay login..."
          />
        )}

        <Input
          id="email"
          type="email"
          element="input"
          label="email"
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
          initialValid={false}
          errorMessage="Eso no es un email"
        />
        <Input
          id="password"
          type="password"
          element="input"
          label="password"
          validators={[VALIDATOR_MINLENGTH(8)]}
          onInput={inputHandler}
          initialValid={false}
          errorMessage="No le hagas la vida facil a los hakers!!"
        />
        <Button type="submit" inverted={true} disabled={!formState.isValid}>
          {isLoginMode ? 'Ingresar' : 'Registro'}
        </Button>
      </form>
      <Button type="submit" onClick={switchModeHandler}>
        Ir a {isLoginMode ? 'Registro' : 'Ingresar'}
      </Button>
    </Card>
  );
};

export default Auth;
