import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map(({ id, title }) => (
        <TodoListItem
          key={id} //are both "key" and "id" needed to preserve id prop.
          id={id}
          todo={title}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
