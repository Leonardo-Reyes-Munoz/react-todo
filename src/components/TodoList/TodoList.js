import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import PropTypes from 'prop-types';

function TodoList({ todoList, handleRemoveTodo, loadTodoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          handleRemoveTodo={handleRemoveTodo}
          index={todoList.indexOf(todo)}
          loadTodoList={loadTodoList}
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
