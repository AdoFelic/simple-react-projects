import React, { Component } from 'react';
import "./TodoApp.css";
import "antd/dist/antd.css";

import { Row, Col, Input, List, DatePicker } from "antd";

import SingleTodo from '../../components/SingleTodo';


class TodoApp extends Component {
  constructor() {
    super();

    this.state = {
      todoList: [],
      todoDates: [],
      toggleInput: false
    };
  }

  handleAddTodoOnEnter = e => {
    const newTodo = {
      id: this.state.todoList.length,
      text: e.target.value,
      dates: this.state.todoDates
    };

    this.setState({
      todoList: this.state.todoList.concat(newTodo),
      toggleInput: false,
      todoDates: []
    });

    e.target.value = "";
  }

  removeFromList = (index) => {
    let updatedList = this.state.todoList;
    updatedList.splice(index, 1);
    for (let i = index; i < updatedList.length; i++) {
      updatedList[i].id -= 1;
    }
    this.setState({
      todoList: updatedList
    });
  }

  handleDateChange = (date) => {
    const dates = date.map(d => {
      return d.format('DD MMM YYYY').toString();
    });
    
    this.setState({
      toggleInput: true,
      todoDates: dates
    })
  }

  render() {
    return (
      <div className="todoApp__container">
        <Row gutter={24}>
          <Col span={12}>
            <h1>TODOs</h1>
            {!this.state.toggleInput &&
            <DatePicker.RangePicker format="YYYY-MM" showPanels={['day', 'day']} 
              onChange={this.handleDateChange}/>}
            {this.state.toggleInput && 
              <Input
              placeholder="Add a TODO..."
              onPressEnter={this.handleAddTodoOnEnter}/>
            }
          </Col>
          <Col span={12}>
          <List
              dataSource={this.state.todoList}
              locale={{ emptyText: "Empty list" }}
              renderItem={item => (
                <SingleTodo
                    todo={item}
                    removeTodo={this.removeFromList}
                  />
              )}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default TodoApp;