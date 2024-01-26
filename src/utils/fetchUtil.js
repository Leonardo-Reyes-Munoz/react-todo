import axios from 'axios';
axios.defaults.baseURL = 'https://api.airtable.com/v0/';
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

// Query param to fetch data as displayed on Airtable
const view = '?view=Grid%20view';

const getAllTodoItems = async () => {
  const config = {
    method: 'get',
    url: `${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${view}`,
  };

  try {
    const response = await axios(config);

    if (!response || typeof response !== 'object') {
      return console.log(`Error: Unable to receive a response from server.`);
    }

    const todos = response.data.records.map((todo) => {
      const newTodo = {
        id: todo.id,
        title: todo.fields.title,
        checked: todo.fields.check ?? false,
        dueDate: todo.fields.due_date ?? null,
      };
      return newTodo;
    });

    return todos;
  } catch (error) {
    console.log(error.message);
  }
};

const createTodoItem = async (id, title, dueDate) => {
  const config = {
    method: 'post',
    url: `${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${view}`,
    body: { title, dueDate },
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
    },
  };

  try {
  } catch (error) {
    console.log(error.message);
  }
};

const updateTodoItem = async (id, title, dueDate) => {
  const config = {
    method: 'patch',
    url: `${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${view}`,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
    },
    body: { title, dueDate },
  };
};

const deleteTodoItem = async (id, title, dueDate) => {
  const config = {
    method: 'patch',
    url: `${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${view}`,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
    },
    body: { title, dueDate },
  };
};

export { createTodoItem, getAllTodoItems, updateTodoItem, deleteTodoItem };
