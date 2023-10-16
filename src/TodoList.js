import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
  return (
    <ul>
      {props.list.map((item) => (
        <TodoListItem key={item.id} todo={item.title} />
      ))}
    </ul>
  );
}

export default TodoList;
