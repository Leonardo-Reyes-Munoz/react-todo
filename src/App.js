import React from "react";

let todoList = [
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

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
