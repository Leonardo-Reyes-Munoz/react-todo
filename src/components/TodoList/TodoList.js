import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import PropTypes from 'prop-types';

function TodoList({ todoList, handleRemoveTodo }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          handleRemoveTodo={handleRemoveTodo}
          index={todoList.indexOf(todo)}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  handleRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;
