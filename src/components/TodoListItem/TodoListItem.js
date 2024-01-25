import React from 'react';
import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <>
      <div className={styles.TodoItem}>
        <div>
          <input id={todo.id} type="checkbox" />
          <label htmlFor={todo.id}>{todo.title}</label>
        </div>
        <div>
          <button type="button" className={styles.edit}>
            <span className="material-symbols-outlined">edit</span>
          </button>
          <button
            type="button"
            className={styles.remove}
            onClick={() => onRemoveTodo(todo.id)}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
