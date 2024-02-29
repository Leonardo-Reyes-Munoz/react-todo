import axios from 'axios';
import toast from 'react-hot-toast';
// testing baseURL
const baseURL = 'http://localhost:3000/api/v1';

// const baseURL = 'https://tasktacklerapi.onrender.com/api/v1';
const taskRoute = 'tasks';
const registerRoute = 'sessions/register';
const loginRoute = 'sessions/logon';
const listsRoute = 'lists';

// * || LIST HTTP Requests *

const getAllListData = async () => {
  const jwtToken = localStorage.getItem('jwtToken');
  const config = {
    method: 'get',
    url: `${baseURL}/${listsRoute}`,
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  try {
    const response = await axios(config);
    // console.log('Initial data:', response.data.listData);

    if (!response || typeof response !== 'object') {
      return console.log(`Error: Unable to receive a response from server.`);
    }

    return response.data.listData;
  } catch (error) {
    return console.log('Failed: Unable to retrieve todo-list:', error.message);
  }
};

const createTodoList = async (title, color) => {
  const jwtToken = localStorage.getItem('jwtToken');
  const config = {
    method: 'post',
    url: `${baseURL}/${listsRoute}`,
    data: {
      title,
      color,
    },
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  try {
    await axios(config);
  } catch (error) {
    return console.log('Failed: Unable to create new list:', error.message);
  }
  return 'New list created';
};

const deleteList = async (id) => {
  const jwtToken = localStorage.getItem('jwtToken');
  const config = {
    method: 'delete',
    url: `${baseURL}/${listsRoute}/${id}`,
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  try {
    await axios(config);
  } catch (error) {
    return console.log('Failed: unable to delete item:', error.message);
  }
  return 'List deleted';
};

// * || TASK HTTP Requests *

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
  return 'New task created';
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
  return 'Task was updated.';
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
  return 'Task deleted';
};

// * || REGISTRATION AND USER LOGIN *

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
    const msg = error.response.data.msg;
    return msg;
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
    const msg = error.response.data.msg;
    toast.error(msg);
    return msg;
  }
};

export {
  createTodoItem,
  updateTodoItem,
  deleteTodoItem,
  registerUser,
  loginUser,
  getAllListData,
  createTodoList,
  deleteList,
};
