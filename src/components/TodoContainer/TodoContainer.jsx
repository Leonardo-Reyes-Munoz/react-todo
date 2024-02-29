import React from 'react';
import TodoList from '../TodoList/TodoList';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import toast, { Toaster } from 'react-hot-toast';
import AddTodoListModal from '../Modals/AddTodoListModal';
import { deleteTodoItem, getAllListData } from '../../utils/fetchUtil';

import './TodoContainer.css';

function TodoContainer({ handleSetTodoListData, todoListData }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showModal, setShowModal] = useState(false);

  if (showModal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  // Will need to be changed to load listData variable which will be an array of objects.
  async function loadTodoListData() {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      setIsLoading(true);
      const todoData = await getAllListData();

      if (todoData === []) {
        console.log(`No items.`);
        setIsLoading(!isLoading);
        return;
      }
      handleSetTodoListData(todoData);
      setIsLoading(false);
    }
  }

  async function handleRemoveTodo(listId, taskId) {
    console.log('testing', listId, taskId);
    const response = await deleteTodoItem(listId, taskId);
    toast.success(response);
    loadTodoListData();
  }

  React.useEffect(() => {
    loadTodoListData();
  }, []);

  return (
    <>
      <Toaster />
      <h1 className="page-title">Tasks</h1>
      <button onClick={() => setShowModal(true)} className="add-list">
        Create New List <span className="material-symbols-outlined">add</span>
      </button>
      {showModal &&
        createPortal(
          <AddTodoListModal
            onClose={() => setShowModal(false)}
            onSubmit={() => loadTodoListData()}
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
              listId={list._id}
              tableName={list.title}
              todoList={list.tasks}
              onHandleRemoveTodo={(listId, taskId) =>
                handleRemoveTodo(listId, taskId)
              }
              loadTodoListData={loadTodoListData}
              handleSetTodoListData={handleSetTodoListData}
              color={list.color}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default TodoContainer;
