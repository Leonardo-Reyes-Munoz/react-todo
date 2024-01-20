import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import styles from './TodoList.module.css';
import PropTypes from 'prop-types';

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <div className={styles.TodoList}>
      <h3 className={styles.title}>Monday</h3>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem
            key={todo.id} //are both "key" and "id" needed to preserve "id" prop?
            todo={todo}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;
