import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { actionCreators } from "../../actions/topics";
import { ListGroup, ListGroupItem, NavLink, NavItem } from "reactstrap";
import "./Topics.css";
import { ApplicationState } from "../../reducers/index";
import { Topic } from "../../types/topic";
import { Link } from "react-router-dom";

export default function Topics() {
  const topics = useSelector(
    (state: ApplicationState) => state.topics.topics,
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreators.getTopics());
  }, [dispatch]);

  return (
    <div className="topics">
      <ListGroup className="topics__list">
        {topics.map((topic: Topic) => (
          <ListGroupItem tag="button" action key={topic.id}>
            <NavItem className="topics__navitem">
              <NavLink
                tag={Link}
                className="text-dark"
                to={`/tests-topics/${topic.id}`}
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
