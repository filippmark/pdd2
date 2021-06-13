import React from "react";
import { Topic } from "../../types/topic";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, NavLink, NavItem } from "reactstrap";

export default function List(props: { topics: Topic[]; link: string }) {
  return (
    <div className="topics">
      <ListGroup className="topics__list">
        {props.topics.map((topic: Topic) => (
          <ListGroupItem tag="button" action key={topic.id}>
            <NavItem className="topics__navitem text-center">
              <NavLink
                tag={Link}
                className="text-dark"
                to={props.link + topic.id}
              >
                {topic.name}
              </NavLink>
            </NavItem>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
