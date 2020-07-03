import React, { useState } from "react";
import { Input, FormGroup, Button } from "reactstrap";
import { actionCreators } from "../../../actions/signIn";
import "./SignIn.css";
import { useDispatch } from "react-redux";

function SignIn() {
  const [formState, setForm] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setForm({
      ...formState,
      [name]: value,
    });
  }

  function signIn(event: React.MouseEvent<any, MouseEvent>) {
    dispatch(actionCreators.signIn(formState));
  }

  return (
    <React.Fragment>
      <FormGroup className="sign-up">
        <Input
          type="text"
          name="username"
          placeholder="Ваше имя"
          onChange={handleInput}
          value={formState.username}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={handleInput}
          value={formState.password}
        ></Input>
      </FormGroup>
      <Button className="sign-up__btn" color="success" onClick={signIn}>
        Войти
      </Button>
    </React.Fragment>
  );
}

export default SignIn;
