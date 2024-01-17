import React from 'react';
import TodoListItem from './TodoListItem';
import styles from './TodoList.module.css';

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul className={styles.TodoList}>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id} //are both "key" and "id" needed to preserve "id" prop?
          todo={todo}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
