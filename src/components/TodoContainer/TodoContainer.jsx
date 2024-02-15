import React from 'react';
import TodoList from '../TodoList/TodoList';
import styles from './TodoContainer.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { createPortal } from 'react-dom';
// import AddTodoForm from '../AddTodoForm/AddTodoForm';
import AddTodoModal from '../Modals/AddTodoModal';

import { getAllTodoItems, deleteTodoItem } from '../../utils/fetchUtil';
import {
  sortByTitle,
  sortByIsCompleted,
  sortByDueDate,
} from '../../utils/sortUtil';

function TodoContainer({ tableName, handleSetTodoList, todoList }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [sort, setSort] = React.useState(false);

  const [showModal, setShowModal] = useState(false);
  if (showModal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  async function loadTodoList() {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      setIsLoading(true);
      const todos = await getAllTodoItems();

      if (todos === []) {
        console.log(`No items.`);
        setIsLoading(!isLoading);
        return;
      }
      const sortedList = sortByIsCompleted(todos);

      handleSetTodoList(sortedList);
      setIsLoading(false);
    }
  }

  async function handleRemoveTodo(id) {
    await deleteTodoItem(id);
    const filteredTodoList = todoList.filter((item) => {
      return item.id !== id;
    });
    handleSetTodoList(filteredTodoList);
  }

  function handleSort() {
    // let sortedList = sortByIsCompleted(todoList);
    // sortedList = sortByTitle(todoList, sort);
    let sortedList = sortByDueDate(todoList, sort);
    setSort(!sort);
    handleSetTodoList(sortedList);
  }

  React.useEffect(() => {
    loadTodoList();
  }, []);

  return (
    <>
      <h1 className="page-title">Tasks</h1>

      {/* <AddTodoForm loadTodoList={loadTodoList} />  */}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.TodoContainer}>
          <div className={styles.containerHeader}>
            <h1 className={styles.title}>{tableName} </h1>
            <div className={styles.btnContainer}>
              <button
                className={styles.sort}
                onClick={() => setShowModal(true)}
              >
                <span className="material-symbols-outlined">add</span>
              </button>
              {showModal &&
                createPortal(
                  <AddTodoModal
                    onClose={() => setShowModal(false)}
                    loadTodoList={loadTodoList}
                  />,
                  document.body
                )}
              <button className={styles.sort} onClick={() => handleSort()}>
                <span className="material-symbols-outlined">swap_vert</span>
              </button>
            </div>
          </div>
          <TodoList
            todoList={todoList}
            handleRemoveTodo={handleRemoveTodo}
            loadTodoList={loadTodoList}
          />
        </div>
      )}
    </>
  );
}

TodoContainer.propTypes = {
  tableName: PropTypes.string,
};

export default TodoContainer;
