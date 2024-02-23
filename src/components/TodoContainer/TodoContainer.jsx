import React from 'react';
import TodoList from '../TodoList/TodoList';
import styles from './TodoContainer.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import AddTodoModal from '../Modals/AddTodoModal';
import toast, { Toaster } from 'react-hot-toast';
import AddTodoListModal from '../Modals/AddTodoListModal';

import { getAllTodoItems, deleteTodoItem } from '../../utils/fetchUtil';
import { sortByIsCompleted, sortByDueDate } from '../../utils/sortUtil';

function TodoContainer({ tableName, handleSetTodoList, todoList }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [sort, setSort] = React.useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showListModal, setShowListModal] = useState(false);

  if (showModal || showListModal) {
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
    const response = await deleteTodoItem(id);
    const filteredTodoList = todoList.filter((item) => {
      return item.id !== id;
    });
    toast.success(response);
    handleSetTodoList(filteredTodoList);
  }

  function handleSort() {
    let sortedList = sortByDueDate(todoList, sort);
    sortedList = sortByIsCompleted(sortedList);
    setSort(!sort);
    handleSetTodoList(sortedList);
  }

  React.useEffect(() => {
    loadTodoList();
  }, []);

  return (
    <>
      <Toaster />
      <h1 className="page-title">Tasks</h1>
      <button onClick={() => setShowListModal(true)}>
        Create New List <span className="material-symbols-outlined">add</span>
      </button>
      {showListModal &&
        createPortal(
          <AddTodoListModal onClose={() => setShowListModal(false)} />,
          document.body
        )}

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
