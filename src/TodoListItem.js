import React from 'react';
import styles from './TodoListItem.module.css';

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li className={styles.ListItem}>
      {todo.title}
      <button
        type="button"
        className={`${styles.remove} ${styles.btn}`}
        onClick={() => onRemoveTodo(todo.id)}
      >
        <span className="material-symbols-outlined">delete</span>
      </button>
    </li>
  );
};

export default TodoListItem;
