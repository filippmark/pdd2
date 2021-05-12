import React, { useState } from "react";
import {
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../../reducers";
import { actionCreators } from "../../../actions/signIn";
import { Axios } from "../../../axios";


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const isUserLoggedIn = useSelector((state: ApplicationState) => state.signIn.isUserLoggedIn, shallowEqual);
  const dispatch = useDispatch();

  function toggle() {
    setIsOpen(!isOpen);
  }

  const handleLogOut = async () => {
    await dispatch(actionCreators.signOut());
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('USERNAME');
    delete Axios.defaults.headers.common['Authorization'];
  }

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/tests">
            KOLESA
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className="mr-2" />
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/tests">
                {" "}
                Выбрать тест{" "}
              </NavLink>
            </NavItem>
            {isUserLoggedIn ?
              (
                <>
                  <NavItem onClick={handleLogOut}>
                    <NavLink tag={Link} className="text-dark">
                      Выйти
                    </NavLink>
                  </NavItem>
                </>
              ) :
              (
                <>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/sign-up">
                      {" "}
                Зарегистрироваться
              </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/sign-in">
                      {" "}
                Войти{" "}
                    </NavLink>
                  </NavItem>
                </>
              )}
          </ul>
        </Container>
      </Navbar>
    </header>
  );
}

export default Nav;
