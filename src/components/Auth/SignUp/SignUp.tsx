import React, { useState } from "react";
import { Input, FormGroup, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../actions/signUp";
import "./SignUp.css";

function SignUp() {
  const [formState, setForm] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });
  const dispatch = useDispatch();

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setForm({
      ...formState,
      [name]: value,
    });
  }

  function registerNewUser(event: React.MouseEvent<any, MouseEvent>) {
    dispatch(
      actionCreators.signUp({
        email: formState.email,
        username: formState.username,
        password: formState.password,
      })
    );
  }

  return (
    <React.Fragment>
      <FormGroup className="sign-up">
        <Input
          type="text"
          name="email"
          placeholder="Электронная почта"
          onChange={handleInput}
          invalid={!!formState.email}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="username"
          placeholder="Ваше имя"
          onChange={handleInput}
          invalid={!!formState.username && formState.username.length < 5}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={handleInput}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password2"
          placeholder="Повторите пароль"
          onChange={handleInput}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Button
          className="sign-up__btn"
          color="success"
          onClick={registerNewUser}
        >
          {" "}
          Зарегистрироваться{" "}
        </Button>
      </FormGroup>
    </React.Fragment>
  );
}

export default SignUp;
