import React from 'react';
import TodoList from '../TodoList/TodoList';
import styles from './TodoContainer.module.css';

function TodoContainer({ todoList, onRemoveTodo }) {
  return (
    <div className={styles.TodoContainer}>
      <h3 className={styles.title}>Monday</h3>
      <TodoList todoList={todoList} onRemoveTodo={onRemoveTodo} />
    </div>
  );
}

export default TodoContainer;
