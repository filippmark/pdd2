import React, { useState } from "react";
import { Input, FormGroup, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../../actions/signUp";
import "./SignUp.css";
import { useHistory } from 'react-router-dom';
import { ApplicationState } from "../../../reducers";


function SignUp() {
  const [formState, setForm] = useState({
    phone: "",
    email: "",
    username: "",
    password: "",
    password2: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setForm({
      ...formState,
      [name]: value,
    });
  }

  const error = useSelector(
    (state: ApplicationState) => state.signUp.error
  )

  const navigateCallback = () => {
    history.push('/sign-in')
  };

  async function registerNewUser(event: React.MouseEvent<any, MouseEvent>) {
    await dispatch(
      actionCreators.signUp({
        phone: formState.phone,
        email: formState.email,
        username: formState.username,
        password: formState.password,
      }, navigateCallback)
    );
  }

  return (
    <React.Fragment>
      <FormGroup className="sign-up">
        <Input
          type="text"
          name="phone"
          placeholder="Телефон"
          onChange={handleInput}
          invalid={!!formState.phone}
          value={formState.phone}
        ></Input>
      </FormGroup>
      <FormGroup className="sign-up">
        <Input
          type="text"
          name="email"
          placeholder="Электронная почта"
          onChange={handleInput}
          invalid={!!formState.email}
          value={formState.email}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="username"
          placeholder="Ваше имя"
          onChange={handleInput}
          invalid={!!formState.username && formState.username.length < 5}
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
      <FormGroup>
        <Input
          type="password"
          name="password2"
          placeholder="Повторите пароль"
          onChange={handleInput}
          value={formState.password2}
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
      <div className="text-danger"> {error} </div>
    </React.Fragment>
  );
}

export default SignUp;
