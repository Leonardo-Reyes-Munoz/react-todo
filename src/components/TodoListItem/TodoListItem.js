import React from 'react';
import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, removeTodo, index, sortChecked }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  function handleChecked(index, isChecked) {
    sortChecked(index, isChecked);
    setIsChecked(!isChecked);
  }

  return (
    <>
      <div className={styles.TodoItem}>
        <div>
          <input
            id={todo.id}
            type="checkbox"
            checked={isChecked}
            onChange={() => handleChecked(index, isChecked)}
          />
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
          <button type="button" className={styles.edit}>
            <span className="material-symbols-outlined">edit</span>
          </button>
        </div>
      </div>
      q
      <hr />
    </>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object,
  removeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  sortChecked: PropTypes.func.isRequired,
};

export default TodoListItem;
