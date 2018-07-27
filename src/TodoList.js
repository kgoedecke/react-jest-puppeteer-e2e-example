import React, { Component } from 'react';

const TodoList = (props) => {
  const {todos} = props

  return(
    <ul>
      {todos.map(todo => <li key={todo.id}>
        <input type="checkbox" defaultChecked={todo.completed} />
        Task: {todo.name}
        </li>)}
    </ul>
  )
}

export default TodoList;
