import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import PropTypes from 'prop-types';

function TodoList({ todoList, handleRemoveTodo, sortChecked }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          handleRemoveTodo={handleRemoveTodo}
          sortChecked={sortChecked}
          index={todoList.indexOf(todo)}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  handleRemoveTodo: PropTypes.func.isRequired,
  sortChecked: PropTypes.func.isRequired,
};

export default TodoList;
