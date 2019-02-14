import React, { Component } from 'react';
import "antd/dist/antd.css";
import "./SingleTodo.css";
import { List, Icon, Row, Col } from "antd";

class SingleTodo extends Component {
  remove = () => {
    // Remove this TodoItem
    this.props.removeTodo(this.props.todo.id);
  };

  showDate(dates) {
    if (dates[0] != dates[1]) {
      return `${dates[0]} - ${dates[1]}`;
    }
    return dates[0];
  }

  render() {
    return (
      <List.Item
        actions={[
          <Icon
            type="close-circle" theme="filled"
            onClick={this.remove}/>
          ]}>
        <Row>
          <Col className="single-todo__text-column">{this.props.todo.text}</Col>
          <Col>
            {this.showDate(this.props.todo.dates)}
          </Col>
        </Row>
      </List.Item>
    );
  }
}

export default SingleTodo;