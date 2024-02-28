import React from 'react';
import TodoList from '../TodoList/TodoList';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import toast, { Toaster } from 'react-hot-toast';
import AddTodoListModal from '../Modals/AddTodoListModal';
import { getAllTodoItems, deleteTodoItem } from '../../utils/fetchUtil';

import './TodoContainer.css';

function TodoContainer({ handleSetTodoListData, todoListData }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showListModal, setShowListModal] = useState(false);

  if (showListModal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  // Will need to be changed to load listData variable which will be an array of objects.
  async function loadTodoListData() {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      setIsLoading(true);
      const todoData = await getAllTodoItems();

      if (todoData === []) {
        console.log(`No items.`);
        setIsLoading(!isLoading);
        return;
      }
      handleSetTodoListData(todoData);
      setIsLoading(false);
    }
  }

  async function handleRemoveTodo(id) {
    const response = await deleteTodoItem(id);
    const filteredTodoList = todoListData.filter((item) => {
      return item.id !== id;
    });
    toast.success(response);
    handleSetTodoListData(filteredTodoList);
  }

  async function handleAddTodoList() {
    console.log('Hello');
  }

  // React.useEffect(() => {
  //   loadTodoListData();
  // }, []);

  return (
    <>
      <Toaster />
      <h1 className="page-title">Tasks</h1>
      <button onClick={() => setShowListModal(true)} className="add-list">
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
          {todoListData.map((list) => (
            <TodoList
              key={list._id}
              tableName={list.title}
              todoList={list.tasks}
              handleRemoveTodo={handleRemoveTodo}
              loadTodoListData={loadTodoListData}
              handleSetTodoListData={handleSetTodoListData}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default TodoContainer;
