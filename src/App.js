import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.js'

const API_TODOS = 'https://jsonplaceholder.typicode.com/todos';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get(API_TODOS)
      .then(json => json.data.map(result => ({
          id: result.id,
          name: result.title,
          completed: result.completed
        })))
      .then(newData => this.setState({todos: newData}))
      .catch(error => alert(error))
  }

  render() {
    const {todos} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todo List</h1>
        </header>
        <TodoList todos={todos}/>
      </div>
    );
  }
}

export default App;
