import './App.css';
import Todos from './myComponents/Todos'
import React, { useState, useEffect } from 'react';
import AddTodo from './myComponents/AddTodo';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const [todos, settodo] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  const onDelete = (todoItem) => {
    console.log("dsfdsf");
    settodo(todos.filter((e) => {
      return e !== todoItem;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (name, number, email) => {
    console.log("adding th new task", name, number, email);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].no + 1;
    }
    const myTodo = {
      no: sno,
      name: name,
      number: number,
      email: email,
    }
    settodo([...todos, myTodo])
    console.log(myTodo);
  }

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} todo={todos} />
                <Todos todos={todos} onDelete={onDelete} />

              </>)
          }}>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;