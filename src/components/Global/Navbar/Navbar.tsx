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

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
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
          </ul>
        </Container>
      </Navbar>
    </header>
  );
}

export default Nav;
