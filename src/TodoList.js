import React from "react";

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

function TodoList() {
  return (
    <ul>
      {todoList.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}

export default TodoList;
