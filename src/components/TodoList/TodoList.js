import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import PropTypes from 'prop-types';

function TodoList({ todoList, removeTodo, sortChecked }) {
  return (
    <div className={styles.TodoList}>
      <h3 className={styles.title}>Monday</h3>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  removeTodo: PropTypes.func.isRequired,
  sortChecked: PropTypes.func.isRequired,
};

export default TodoList;
