import React, { useState } from "react";
import { Input, FormGroup, Button } from "reactstrap";
import { actionCreators } from "../../../actions/signIn";
import "./SignIn.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../../reducers";
import { useHistory } from "react-router";

function SignIn() {
  const [formState, setForm] = useState({
    username: "",
    password: "",
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
    (state: ApplicationState) => state.signIn.error,
    shallowEqual
  );

  const navigateCallback = () => {
    history.push('/profile');
  }

  async function signIn(event: React.MouseEvent<any, MouseEvent>) {
    await dispatch(actionCreators.signIn(formState, navigateCallback));
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
      <div className="text-danger">{error}</div>
    </React.Fragment>
  );
}

export default SignIn;
