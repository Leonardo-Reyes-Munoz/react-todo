import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import styles from './TodoList.module.css';

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <div className={styles.TodoList}>
      <h3 className={styles.title}>Monday</h3>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem
            key={todo.id} //are both "key" and "id" needed to preserve "id" prop?
            todo={todo}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
