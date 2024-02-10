import React from 'react';
import TodoList from '../TodoList/TodoList';
import styles from './TodoContainer.module.css';
import PropTypes from 'prop-types';
import AddTodoForm from '../AddTodoForm/AddTodoForm';
import { getAllTodoItems, deleteTodoItem } from '../../utils/fetchUtil';
import { sortByTitle, sortByIsChecked } from '../../utils/sortUtil';

function TodoContainer({ tableName }) {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sort, setSort] = React.useState(false);

  async function loadTodoList() {
    setIsLoading(true);
    const todos = await getAllTodoItems();
    // console.log('todo list response:', todos);
    const sortedList = sortByIsChecked(todos);
    setTodoList(sortedList);
    setIsLoading(false);
  }

  React.useEffect(() => {
    loadTodoList();
  }, [tableName]);

  async function handleRemoveTodo(id) {
    await deleteTodoItem(id);
    const filteredTodoList = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(filteredTodoList);
  }

  function handleSort() {
    let sortedList = sortByTitle(todoList, sort);
    sortedList = sortByIsChecked(sortedList);
    setSort(!sort);
    setTodoList(sortedList);
  }

  return (
    <>
      <h1 className="page-title">Weekly Tasks</h1>

      <AddTodoForm loadTodoList={loadTodoList} />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.TodoContainer}>
          <h1 className={styles.title}>
            {tableName}
            <button className={styles.sort} onClick={() => handleSort()}>
              <span className="material-symbols-outlined">swap_vert</span>
            </button>
          </h1>
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
