import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList() {
  const todoList = [
    {
      id: 1234,
      title: 'Complete CTD assignment',
    },
    {
      id: 4321,
      title: 'Go grocery shopping',
    },
    {
      id: 9876,
      title: 'Go the gym',
    },
    {
      id: 4987,
      title: 'Do laundry',
    },
  ];

  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} todo={item.title} />
      ))}
    </ul>
  );
}

export default TodoList;
