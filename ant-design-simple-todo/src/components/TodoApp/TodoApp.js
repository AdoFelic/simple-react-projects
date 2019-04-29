import React, { useState } from 'react';
import { Row, Col, Input, List, DatePicker } from "antd";

import "antd/dist/antd.css";
import "./TodoApp.css";

import SingleTodo from '../SingleTodo/SingleTodo';

const TodoApp = () => {
  const [todoList, setTodos] = useState([]);
  const [todoDates, setDates] = useState([]);
  const [toggleInput, setToggleInput] = useState(false);

  const handleAddTodoOnEnter = (e) => {
    const newTodo = {
      id: todoList.length,
      text: e.target.value,
      dates: todoDates,
      completed: false
    };
    setTodos(todoList.concat(newTodo));
    setDates([]);
    setToggleInput(false);
    e.target.value = "";
  }

  const removeFromList = (index) => {
    let updatedList = todoList.filter(item => {
      return item.id !== index;
    });
    for (let i = index; i < updatedList.length; i++) {
      updatedList[i].id -= 1;
    } 
    setTodos(updatedList);
    setDates([]);
  }

  const onCompleteTodo = (index) => {
    let result = todoList.map(item => {
      if (item.id === index) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    });
    setTodos(result);
  }

  const handleDateChange = (date) => {
    const dates = date.map(d => {
      return d.format('DD MMM YYYY').toString();
    });
    setToggleInput(true);
    setDates(dates);
  }

  return (
    <div className="todoApp__container">
      <Row gutter={16}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} className="flex-center__container">
          <h1>TODOs</h1>
          {!toggleInput &&
          <DatePicker.RangePicker format="YYYY-MM" showPanels={['day', 'day']} 
            onChange={handleDateChange}/>}
          {
            toggleInput && 
              <Input
                placeholder="Add a TODO..."
                onPressEnter={handleAddTodoOnEnter}/>
          }
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }} className="flex-center__container">
          <List
            dataSource={todoList}
            locale={{ emptyText: "Empty list" }}
            style={{ marginTop: 32 }}
            renderItem={item => (
              <SingleTodo
                  todo={item}
                  removeTodo={removeFromList}
                  completeTodo={onCompleteTodo}
                />
            )}
          />
        </Col>
      </Row>
    </div>
  );
}

export default TodoApp;
