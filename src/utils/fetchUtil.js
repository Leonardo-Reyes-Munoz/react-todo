import axios from 'axios';

const airtableBaseUrl = 'https://api.airtable.com/v0/';
// Query param to fetch data is displayed on Airtable
const view = '?view=Grid%20view';

// const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/`;

const fetchUtil = async (config) => {
  try {
    const response = await axios(config);

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

const getAllTodoItems = async () => {
  const config = {
    method: 'get',
    url: `${airtableBaseUrl}${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${view}`,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
    },
  };
  return await fetchUtil(config);
};

export { getAllTodoItems };
