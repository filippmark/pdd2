import React from "react";
import "./Tests.css";
import { ListGroup, ListGroupItem, NavLink, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

export default function Tests() {
  return (
    <div className="tests">
      <div className="tests__list">
        <ListGroup>
          <ListGroupItem className="tests__item" tag="button" action>
            <NavItem className="test__navitem">
              <NavLink tag={Link} className="text-dark" to="/personalised-questions/">
                Персональная тренировка
              </NavLink>
            </NavItem>
          </ListGroupItem>
          <ListGroupItem className="tests__item" tag="button" action>
            <NavItem className="test__navitem">
              <NavLink tag={Link} className="text-dark" to="/tests-chapters">
                Тренировка по главам ПДД
              </NavLink>
            </NavItem>
          </ListGroupItem>
          <ListGroupItem className="tests__item" tag="button" action>
            <NavItem className="test__navitem">
              <NavLink tag={Link} className="text-dark" to="/tests-topics">
                Тренировка по тематическим билетам
              </NavLink>
            </NavItem>
          </ListGroupItem>
          <ListGroupItem className="tests__item" tag="button" action>
            <NavItem className="test__navitem">
              <NavLink tag={Link} className="text-dark" to="/random-questions/">
                Тренировка по случайному билету
              </NavLink>
            </NavItem>
          </ListGroupItem>
          <ListGroupItem className="tests__item" tag="button" action>
            <NavItem className="test__navitem">
              <NavLink tag={Link} className="text-dark" to="/control-topics">
                Контроль по главам ПДД
              </NavLink>
            </NavItem>
          </ListGroupItem>
          <ListGroupItem className="tests__item" tag="button" action>
            <NavItem className="test__navitem">
              <NavLink tag={Link} className="text-dark" to="/random-questions-control/">
                Контроль по случайному билету Х10
              </NavLink>
            </NavItem>
          </ListGroupItem>
          <ListGroupItem className="tests__item" tag="button" action>
            <NavItem className="test__navitem">
              <NavLink tag={Link} className="text-dark" to="/random-questions-control/">
                Контроль по случайному билету
              </NavLink>
            </NavItem>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
}
