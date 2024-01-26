import React from 'react';
import TodoList from '../TodoList/TodoList';
import styles from './TodoContainer.module.css';
import PropTypes from 'prop-types';
import AddTodoForm from '../AddTodoForm/AddTodoForm';
import { getAllTodoItems } from '../../utils/fetchUtil';
import { sortByTitle } from '../../utils/sortUtil';

function TodoContainer({ tableName }) {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sort, setSort] = React.useState(false);

  async function displayTodoList() {
    const todos = await getAllTodoItems();
    console.log('todo list response:', todos);
    setTodoList(todos);
    setIsLoading(false);
  }

  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  React.useEffect(() => {
    displayTodoList();
  }, []);

  function addTodo(newTodo) {
    setTodoList((prevTodos) => [...prevTodos, newTodo]);
  }

  function handleRemoveTodo(id) {
    const filteredTodoList = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(filteredTodoList);
  }

  function handleSort() {
    const sortedList = sortByTitle(todoList, sort);
    setSort(!sort);
    setTodoList(sortedList);
  }

  return (
    <>
      <h1 className="page-title">Weekly Tasks</h1>

      <AddTodoForm addTodo={addTodo} />

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
            displayTodoList={displayTodoList}
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
