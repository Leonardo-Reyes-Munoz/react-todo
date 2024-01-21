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
      // Query Params need to be url encoded according to API Documentation:
      //  https://airtable.com/developers/web/api/list-records
      const view = '?view=Grid%20view';
      const titleAsc =
        '?sort%5B0%5D%5Bfield%5D=title&sort%5B0%5D%5Bdirection%5D=asc';

      const response = await fetch(`${url}`, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      console.log(data.records);

      // data.records.sort((objectA, objectB) => {
      //   console.log(objectA.title);
      //   const titleA = objectA.fields.title.toUpperCase();
      //   const titleB = objectB.fields.title.toUpperCase();

      //   if (titleA < titleB) {
      //     return -1;
      //   } else if (titleA > titleB) {
      //     return 1;
      //   } else {
      //     return 0;
      //   }
      // });

      data.records.sort((objectA, objectB) => {
        console.log(objectA.title);
        const titleA = objectA.fields.title.toUpperCase();
        const titleB = objectB.fields.title.toUpperCase();

        if (titleA < titleB) {
          return 1;
        } else if (titleA > titleB) {
          return -1;
        } else {
          return 0;
        }
      });

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
