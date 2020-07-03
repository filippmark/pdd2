import React from "react";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import { NavLink } from "react-router-dom";
import "./Auth.css";

export default function Auth(props: { logIn: boolean }) {
  return (
    <div className="auth-wrapper">
      <div className="auth">
        <div className="auth__links">
          <NavLink to="sign-up" className="auth__link" activeClassName="auth__link-active"> Регистрация </NavLink>
          <NavLink to="sign-in" className="auth__link" activeClassName="auth__link-active"> Войти </NavLink>
        </div>
        {props.logIn ? <SignIn></SignIn> : <SignUp></SignUp>}
      </div>
    </div>
  );
}
