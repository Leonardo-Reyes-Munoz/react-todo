import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';
import EditModal from '../Modals/EditModal';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { updateTodoItem } from '../../utils/fetchUtil';

const TodoListItem = ({ todo, handleRemoveTodo, loadTodoList }) => {
  const {
    id: todoId,
    title: todoTitle,
    isCompleted: todoIsCompleted,
    dueDate: todoDueDate,
  } = todo;
  const [showModal, setShowModal] = useState(false);

  if (showModal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  async function handleCheck(currentTodoIsCompleted) {
    const updatedCompleted = !currentTodoIsCompleted;
    await updateTodoItem(todoId, todoTitle, updatedCompleted, todoDueDate);

    loadTodoList();
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
            id={todoId}
            type="checkbox"
            // isCompleted initial value of null with ternary operator
            // allows for updating todo-list in browser without doing a GET request after PATCH request.
            checked={todoIsCompleted}
            onChange={() => handleCheck(todoIsCompleted)}
          />
          <label htmlFor={todo.id}>{todo.title}</label>
          {todo.dueDate && <p className={styles.date}>Due: {formattedDate}</p>}
        </div>
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
