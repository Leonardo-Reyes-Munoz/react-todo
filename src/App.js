import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const [todoList, setTodoList] = React.useState([]);

  function addTodo(newTodo) {
    setTodoList((prevTodos) => [...prevTodos, newTodo]);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
