import React from 'react';
import styles from './TodoListItem.module.css';

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li className={styles.ListItem}>
      {todo.title}
      <button
        type="button"
        className={styles.remove}
        onClick={() => onRemoveTodo(todo.id)}
      >
        <span className="material-symbols-outlined">add</span>
      </button>
    </li>
  );
};

export default TodoListItem;
