import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
  const todoList = [
    {
      id: 1234,
      title: "Complete CTD assignment",
    },
    {
      id: 4321,
      title: "Go grocery shopping",
    },
    {
      id: 9876,
      title: "Go the gym",
    },
    {
      id: 4987,
      title: "Do laundry",
    },
  ];

  const [newTodo, setNewTodo] = React.useState("");

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList list={todoList} />
    </>
  );
}

export default App;
