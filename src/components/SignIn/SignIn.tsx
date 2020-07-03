import React, { useState } from "react";
import { Input, FormGroup, Button } from "reactstrap";
import "./SignIn.css";

function SignIn() {
  const [formState, setForm] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });
  //const dispatch = useDispatch();

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setForm({
      ...formState,
      [name]: value,
    });
  }

  function signIn(event: React.MouseEvent<any, MouseEvent>) {}

  return (
    <React.Fragment>
      <FormGroup className="sign-up">
        <Input
          type="text"
          name="username"
          placeholder="Электронная почта"
          onChange={handleInput}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password"
          placeholder="Ваше имя"
          onChange={handleInput}
        ></Input>
      </FormGroup>
      <Button className="sign-up__btn" color="success" onClick={signIn}>
        {" "}
        Войти{" "}
      </Button>
    </React.Fragment>
  );
}

export default SignIn;
