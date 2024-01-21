import React from 'react';
import TodoList from '../TodoList/TodoList';
import styles from './TodoContainer.module.css';

function TodoContainer({
  displayTodoList,
  addTodo,
  removeTodo,
  isLoading,
  todoList,
}) {
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/`;

  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      const todos = data.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title,
        };
        return newTodo;
      });

      displayTodoList(todos);
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.TodoContainer}>
          <h3 className={styles.title}>Monday</h3>
          <TodoList todoList={todoList} removeTodo={removeTodo} />
        </div>
      )}
    </React.Fragment>
  );
}

export default TodoContainer;
