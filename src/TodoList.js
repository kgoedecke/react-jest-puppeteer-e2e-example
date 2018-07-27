import React, { Component } from 'react';

const TodoList = (props) => {
  const {todos} = props

  return(
    <ul class="todo_list">
      {todos.map(todo => <li id={todo.id}>
        <input type="checkbox" name={'todo_id_' + todo.id} defaultChecked={todo.completed} />
        Task: {todo.name}
        </li>)}
    </ul>
  )
}

export default TodoList;
