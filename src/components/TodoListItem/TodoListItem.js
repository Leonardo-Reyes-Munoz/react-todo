import React from 'react';
import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, handleRemoveTodo }) => {
  const [isChecked, setIsChecked] = React.useState(null);

  function handleChecked(isChecked) {
    setIsChecked(!isChecked);
  }

  return (
    <>
      <div className={styles.TodoItem}>
        <div>
          <input
            id={todo.id}
            type="checkbox"
            // isChecked initial value of null with ternary operator
            // allows for updating todo-list in browser without doing a GET request after PATCH request.
            checked={isChecked ? isChecked : todo.checked}
            onChange={() => handleChecked(isChecked)}
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
            onClick={() => handleRemoveTodo(todo.id)}
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
  handleRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
