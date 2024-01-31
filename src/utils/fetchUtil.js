import axios from 'axios';
axios.defaults.baseURL = 'https://api.airtable.com/v0/';
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// Query param to fetch data as displayed on Airtable
const view = '?view=Grid%20view';

const getAllTodoItems = async () => {
  const config = {
    method: 'get',
    url: `${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${view}`,
  };

  try {
    const response = await axios(config);
    console.log('Initial data:', response.data.records);

    if (!response || typeof response !== 'object') {
      return console.log(`Error: Unable to receive a response from server.`);
    }

    const todos = response.data.records.map((todo) => {
      const newTodo = {
        id: todo.id,
        title: todo.fields.title,
        isChecked: todo.fields.isChecked ?? false,
        dueDate: todo.fields.dueDate ?? null,
      };
      return newTodo;
    });

    return todos;
  } catch (error) {
    return console.log('Failed: Unable to retrieve todo-list:', error.message);
  }
};

const createTodoItem = async (title) => {
  const config = {
    method: 'post',
    url: `${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`,
    data: {
      records: [
        {
          fields: {
            title,
          },
        },
      ],
    },
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
    },
  };

  try {
    await axios(config);
  } catch (error) {
    return console.log('Failed: Unable to create new item:', error.message);
  }
  console.log('Success: New todo item created');
};

const updateTodoItem = async (id, title, dueDate = '') => {
  const config = {
    method: 'patch',
    url: `${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${id}`,
    data: {
      fields: {
        title,
        dueDate,
      },
    },
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
    },
  };
  try {
    await axios(config);
  } catch (error) {
    return console.log('Failed: unable to update item:', error.message);
  }
  console.log('Success: Task was successfully updated.');
};

const deleteTodoItem = async (id) => {
  const config = {
    method: 'delete',
    url: `${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${id}`,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
    },
  };

  try {
    await axios(config);
  } catch (error) {
    return console.log('Failed: unable to delete item:', error.message);
  }
  console.log('Success: Todo item has been deleted');
};

export { createTodoItem, getAllTodoItems, updateTodoItem, deleteTodoItem };
