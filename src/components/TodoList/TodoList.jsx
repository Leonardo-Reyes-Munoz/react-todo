import React, { useState } from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';
import AddTodoModal from '../Modals/AddTodoModal';
import { sortByIsCompleted, sortByDueDate } from '../../utils/sortUtil';
import { createPortal } from 'react-dom';
import toast from 'react-hot-toast';
import { deleteList } from '../../utils/fetchUtil';

function TodoList({
  tableName,
  todoList,
  onHandleRemoveTodo,
  loadTodoListData,
  listId,
  color,
}) {
  const [sort, setSort] = React.useState(true);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  let initialSortedList = sortByDueDate(todoList, sort);
  initialSortedList = sortByIsCompleted(initialSortedList);
  const [listItems, setListItems] = useState(initialSortedList);

  if (showAddTaskModal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  // const [taskList, setTaskList] = useState(todoList);

  const colorMAP = {
    yellow: '#fae360',
    green: '#4e7868',
    purple: '#7d7278',
    pink: '#f06a8a',
  };

  const bannerColor = colorMAP[color] || '#fae360';

  function handleSort() {
    let sortedList = sortByDueDate(listItems, sort);
    sortedList = sortByIsCompleted(sortedList);
    setSort(!sort);
    setListItems(sortedList);
  }

  const handleRemoveList = async (listId, taskId) => {
    const response = await deleteList(listId, taskId);
    toast.success(response);
    loadTodoListData();
  };

  return (
    <React.Fragment>
      <div className={styles.TodoContainer}>
        <div
          className={styles.containerHeader}
          style={{ backgroundColor: bannerColor }}
        >
          <h1 className={styles.title}>{tableName} </h1>
          <div className={styles.btnContainer}>
            <button
              className={styles.ListBtn}
              onClick={() => setShowAddTaskModal(true)}
              style={{ backgroundColor: bannerColor }}
            >
              <span className="material-symbols-outlined">add</span>
            </button>
            {showAddTaskModal &&
              createPortal(
                <AddTodoModal
                  onClose={() => setShowAddTaskModal(false)}
                  loadTodoListData={loadTodoListData}
                  listId={listId}
                />,
                document.body
              )}
            <button
              style={{ backgroundColor: bannerColor }}
              className={styles.ListBtn}
              onClick={() => handleSort()}
            >
              <span className="material-symbols-outlined">swap_vert</span>
            </button>
            <button
              type="button"
              style={{ backgroundColor: bannerColor }}
              className={styles.remove}
              onClick={() => handleRemoveList(listId)}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>
        <ul>
          {todoList.map((todo) => (
            <TodoListItem
              key={todo._id}
              todo={todo}
              onHandleRemoveTodo={onHandleRemoveTodo}
              index={todoList.indexOf(todo)}
              loadTodoListData={loadTodoListData}
              listId={listId}
            />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
};

export default TodoList;
