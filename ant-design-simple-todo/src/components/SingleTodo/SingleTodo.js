import React from 'react';
import { List, Icon, Row, Col } from "antd";
import "./SingleTodo.css";

const SingleTodo = ({ removeTodo, completeTodo, todo }) => {
  const remove = () => {
    removeTodo(todo.id);
  };

  const complete = () => {
    completeTodo(todo.id);
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
          type={todo.completed ? "play-circle" : "check-circle"} 
          theme="filled"
          onClick={complete}
        />,
        <Icon
          type="close-circle" theme="filled"
          onClick={remove}/>
        ]}
      >
      <Row>
        <Col 
          className={`single-todo__text-column`} 
          style={{textDecoration: todo.completed ? 'line-through' : ''}}
        >
          {todo.text}
        </Col>
        <Col style={{textDecoration: todo.completed ? 'line-through' : ''}}>
          {showDate(todo.dates)}
        </Col>
      </Row>
    </List.Item>
  );
}

export default SingleTodo;