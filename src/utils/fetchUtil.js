import axios from 'axios';
// testing baseURL
const baseURL = 'http://localhost:3000/api/v1';

// const baseURL = 'https://tasktacklerapi.onrender.com/api/v1';
const taskRoute = 'tasks';
const registerRoute = 'sessions/register';
const loginRoute = 'sessions/logon';

const getAllTodoItems = async () => {
  const jwtToken = localStorage.getItem('jwtToken');
  const config = {
    method: 'get',
    url: `${baseURL}/${taskRoute}`,
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  try {
    const response = await axios(config);
    // console.log('Initial data:', response.data.tasks);

    if (!response || typeof response !== 'object') {
      return console.log(`Error: Unable to receive a response from server.`);
    }

    const todos = response.data.tasks.map((todo) => {
      const newTodo = {
        id: todo._id,
        title: todo.title,
        isCompleted: todo.isCompleted ?? false,
        dueDate: todo.dueDate ?? null,
      };
      return newTodo;
    });

    return todos;
  } catch (error) {
    return console.log('Failed: Unable to retrieve todo-list:', error.message);
  }
};

const createTodoItem = async (title, dueDate) => {
  const jwtToken = localStorage.getItem('jwtToken');
  const config = {
    method: 'post',
    url: `${baseURL}/${taskRoute}`,
    data: {
      title,
      dueDate,
    },
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  try {
    await axios(config);
  } catch (error) {
    return console.log('Failed: Unable to create new item:', error.message);
  }
  console.log('Success: New todo item created');
};

const updateTodoItem = async (id, title, isCompleted, dueDate) => {
  const jwtToken = localStorage.getItem('jwtToken');
  const config = {
    method: 'patch',
    url: `${baseURL}/${taskRoute}/${id}`,
    data: {
      title,
      isCompleted,
      dueDate,
    },
    headers: {
      Authorization: `Bearer ${jwtToken}`,
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
  const jwtToken = localStorage.getItem('jwtToken');
  const config = {
    method: 'delete',
    url: `${baseURL}/${taskRoute}/${id}`,
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  try {
    await axios(config);
  } catch (error) {
    return console.log('Failed: unable to delete item:', error.message);
  }
  console.log('Success: Todo item has been deleted');
};

// User Registration and Login HTTP Requests

const registerUser = async (user) => {
  const config = {
    method: 'post',
    url: `${baseURL}/${registerRoute}`,
    data: { ...user },
  };

  try {
    const response = await axios(config);
    console.log('You have successfully registered! Please log-in');
    return response;
  } catch (error) {
    return console.log('Failed: ', error.response.data.msg);
  }
};

const loginUser = async (user) => {
  const config = {
    method: 'post',
    url: `${baseURL}/${loginRoute}`,
    data: { ...user },
  };

  try {
    const response = await axios(config);
    console.log('You have successfully logged-in!');
    return response;
  } catch (error) {
    return console.log('Failed: ', error.response.data.msg);
  }
};

export {
  createTodoItem,
  getAllTodoItems,
  updateTodoItem,
  deleteTodoItem,
  registerUser,
  loginUser,
};
