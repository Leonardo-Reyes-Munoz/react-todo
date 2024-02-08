import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';
import EditModal from '../EditModal/EditModal';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { updateTodoItem } from '../../utils/fetchUtil';

const TodoListItem = ({ todo, handleRemoveTodo, loadTodoList }) => {
  const [showModal, setShowModal] = useState(false);
  const [completed, setCompleted] = useState(todo.isChecked);

  if (showModal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  async function handleCheck(id, title, isChecked, dueDate) {
    todo.isChecked = !completed;
    updateTodoItem(id, title, (isChecked = !completed), dueDate);
    setCompleted(!completed);
  }

  //parse date into a more readable date string
  let inputDate = todo.dueDate;
  let parsedDate = new Date(inputDate);
  const timeZoneOffset = parsedDate.getTimezoneOffset();
  const adjustedDate = new Date(
    parsedDate.getTime() + timeZoneOffset * 60 * 1000
  );
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let formattedDate = adjustedDate.toLocaleDateString('en-US', options);

  return (
    <>
      <div className={styles.TodoItem}>
        <div>
          <input
            id={todo.id}
            type="checkbox"
            // isChecked initial value of null with ternary operator
            // allows for updating todo-list in browser without doing a GET request after PATCH request.
            checked={completed}
            onChange={() =>
              handleCheck(todo.id, todo.title, todo.isChecked, todo.dueDate)
            }
          />
          <label htmlFor={todo.id}>{todo.title}</label>
          {todo.dueDate && <p className={styles.date}>Due: {formattedDate}</p>}
        </div>
<<<<<<< HEAD
        <div className={styles.btnContainer}>
          <button
            type="button"
            className={styles.edit}
            onClick={() => setShowModal(true)}
          >
            <span className="material-symbols-outlined">edit</span>
          </button>
          {showModal &&
            createPortal(
              <EditModal
                onClose={() => setShowModal(false)}
                todo={todo}
                loadTodoList={loadTodoList}
              />,
              document.body
            )}

          <button
            type="button"
            className={styles.remove}
            onClick={() => handleRemoveTodo(todo.id)}
=======
        <div>
          <button type="button" className={styles.edit}>
            <span className="material-symbols-outlined">edit</span>
          </button>
          <button
            type="button"
            className={styles.remove}
            onClick={() => onRemoveTodo(todo.id)}
>>>>>>> main
          >
            <span className="material-symbols-outlined">delete</span>
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
  handleRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
