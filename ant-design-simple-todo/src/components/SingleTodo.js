import React from 'react';
import "antd/dist/antd.css";
import "./SingleTodo.css";
import { List, Icon, Row, Col } from "antd";

function SingleTodo(props) {
  const remove = () => {
    props.removeTodo(props.todo.id);
  };

  const complete = () => {
    props.completeTodo(props.todo.id);
  }

  const showDate = (dates) => {
    if (dates[0] !== dates[1]) {
      return `${dates[0]} - ${dates[1]}`;
    }
    return dates[0];
  }

  return (
    <List.Item
      actions={[
        <Icon
          type={props.todo.completed ? "play-circle" : "check-circle"} theme="filled"
          onClick={complete}
        />,
        <Icon
          type="close-circle" theme="filled"
          onClick={remove}/>
        ]}>
      <Row>
        <Col className={`single-todo__text-column`} style={{textDecoration: props.todo.completed ? 'line-through' : ''}}>{props.todo.text}</Col>
        <Col style={{textDecoration: props.todo.completed ? 'line-through' : ''}}>
          {showDate(props.todo.dates)}
        </Col>
      </Row>
    </List.Item>
  );
}

export default SingleTodo;