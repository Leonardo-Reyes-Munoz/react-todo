import React from 'react';
import TodoList from '../TodoList/TodoList';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import toast, { Toaster } from 'react-hot-toast';
import AddTodoListModal from '../Modals/AddTodoListModal';
import { getAllTodoItems, deleteTodoItem } from '../../utils/fetchUtil';
import { sortByIsCompleted } from '../../utils/sortUtil';
import MockData from './MockData';
import './TodoContainer.css';

function TodoContainer({ tableName, handleSetTodoList, todoList }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showListModal, setShowListModal] = useState(false);
  const [listData, setListData] = useState(MockData);

  if (showListModal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  // Will need to be changed to load listData variable which will be an array of objects.
  // async function loadTodoList() {
  //   const jwtToken = localStorage.getItem('jwtToken');
  //   if (jwtToken) {
  //     setIsLoading(true);
  //     const todos = await getAllTodoItems();

  //     if (todos === []) {
  //       console.log(`No items.`);
  //       setIsLoading(!isLoading);
  //       return;
  //     }
  //     const sortedList = sortByIsCompleted(todos);

  //     handleSetTodoList(sortedList);
  //     setIsLoading(false);
  //   }
  // }

  // async function handleRemoveTodo(id) {
  //   const response = await deleteTodoItem(id);
  //   const filteredTodoList = todoList.filter((item) => {
  //     return item.id !== id;
  //   });
  //   toast.success(response);
  //   handleSetTodoList(filteredTodoList);
  // }

  async function handleAddTodoList() {
    console.log('Hello');
  }

  // React.useEffect(() => {
  //   loadTodoList();
  // }, []);

  return (
    <>
      <Toaster />
      <h1 className="page-title">Tasks</h1>
      <button onClick={() => setShowListModal(true)}>
        Create New List <span className="material-symbols-outlined">add</span>
      </button>
      {showListModal &&
        createPortal(
          <AddTodoListModal
            onClose={() => setShowListModal(false)}
            onSubmit={() => handleAddTodoList()}
          />,
          document.body
        )}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="todo-container">
          {listData.map((list) => (
            <TodoList
              tableName={list.title}
              todoList={list.tasks}
              // handleRemoveTodo={handleRemoveTodo}
              // loadTodoList={loadTodoList}
              // handleSetTodoList={handleSetTodoList}
            />
          ))}
        </div>
      )}
    </>
  );
}

TodoContainer.propTypes = {
  tableName: PropTypes.string,
};

export default TodoContainer;
