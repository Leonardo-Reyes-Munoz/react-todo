import React from 'react';
import TodoList from '../TodoList/TodoList';
import styles from './TodoContainer.module.css';

function TodoContainer({
  displayTodoList,
  removeTodo,
  isLoading,
  todoList,
  tableName,
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

      // const titleAsc =
      //   '?sort%5B0%5D%5Bfield%5D=title&sort%5B0%5D%5Bdirection%5D=asc';

      const view = '?view=Grid%20view';
      const response = await fetch(`${url}${view}`, options);

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

  const [sort, setSort] = React.useState(false);

  function sortByTitle() {
    if (!sort) {
      // Ascending order by title
      todoList.sort((objectA, objectB) => {
        const titleA = objectA.title.toUpperCase();
        const titleB = objectB.title.toUpperCase();

        if (titleA < titleB) {
          return -1;
        } else if (titleA > titleB) {
          return 1;
        } else {
          return 0;
        }
      });
      setSort(!sort);
      displayTodoList(todoList);
    } else {
      // Descending order by title
      todoList.sort((objectA, objectB) => {
        const titleA = objectA.title.toUpperCase();
        const titleB = objectB.title.toUpperCase();

        if (titleA < titleB) {
          return 1;
        } else if (titleA > titleB) {
          return -1;
        } else {
          return 0;
        }
      });
      setSort(!sort);
      displayTodoList(todoList);
    }
  }

  return (
    <React.Fragment>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.TodoContainer}>
          <h1 className={styles.title}>
            {tableName}
            <button className={styles.sort} onClick={() => sortByTitle()}>
              <span className="material-symbols-outlined">swap_vert</span>
            </button>
          </h1>
          <TodoList todoList={todoList} removeTodo={removeTodo} />
        </div>
      )}
    </React.Fragment>
  );
}

export default TodoContainer;
