import React, { useState } from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';
import AddTodoModal from '../Modals/AddTodoModal';
import { sortByIsCompleted, sortByDueDate } from '../../utils/sortUtil';
import { createPortal } from 'react-dom';

function TodoList({
  tableName,
  todoList,
  onHandleRemoveTodo,
  loadTodoListData,
  handleSetTodoListData,
}) {
  const [sort, setSort] = React.useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleSort() {
    let sortedList = sortByDueDate(todoList, sort);
    sortedList = sortByIsCompleted(sortedList);
    setSort(!sort);
    handleSetTodoListData(sortedList);
  }

  const [todoLists, setTodoLists] = useState([]);

  if (showModal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <React.Fragment>
      <div className={styles.TodoContainer}>
        <div className={styles.containerHeader}>
          <h1 className={styles.title}>{tableName} </h1>
          <div className={styles.btnContainer}>
            <button className={styles.sort} onClick={() => setShowModal(true)}>
              <span className="material-symbols-outlined">add</span>
            </button>
            {showModal &&
              createPortal(
                <AddTodoModal
                  onClose={() => setShowModal(false)}
                  loadTodoListData={loadTodoListData}
                />,
                document.body
              )}
            <button className={styles.sort} onClick={() => handleSort()}>
              <span className="material-symbols-outlined">swap_vert</span>
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
