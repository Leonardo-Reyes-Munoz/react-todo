import React from 'react';
import styles from './TodoListItem.module.css';

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <React.Fragment>
      <div className={styles.TodoItem}>
        <div>
          <input id={todo.id} type="checkbox" />
          <label htmlFor={todo.id}>{todo.title}</label>
        </div>
        <div>
          <button
            type="button"
            className={` ${styles.remove}`}
            onClick={() => onRemoveTodo(todo.id)}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
          <button type="button" className={` ${styles.edit}`}>
            <span className="material-symbols-outlined">edit</span>
          </button>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default TodoListItem;
