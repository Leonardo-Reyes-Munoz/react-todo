import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import PropTypes from 'prop-types';

function TodoList({ todoList, removeTodo, sortChecked }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  removeTodo: PropTypes.func.isRequired,
  sortChecked: PropTypes.func.isRequired,
};

export default TodoList;
