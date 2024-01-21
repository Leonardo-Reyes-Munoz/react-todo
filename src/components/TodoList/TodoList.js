import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

import PropTypes from 'prop-types';

function TodoList({ todoList, removeTodo }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemoveTodo={removeTodo} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
