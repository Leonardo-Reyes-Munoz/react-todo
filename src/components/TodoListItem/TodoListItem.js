import React from 'react';
import styles from './TodoListItem.module.css';

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <React.Fragment>
      <div className={styles.TodoItem}>
        <input id={todo.id} type="checkbox" />
        <label htmlFor={todo.id}>{todo.title}</label>
        <button
          type="button"
          className={` ${styles.remove}`}
          onClick={() => onRemoveTodo(todo.id)}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default TodoListItem;
