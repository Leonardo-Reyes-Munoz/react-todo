import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import PropTypes from 'prop-types';

function TodoList({ todoList, handleRemoveTodo, loadTodoList }) {
  return (
<<<<<<< HEAD
    <ul>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          handleRemoveTodo={handleRemoveTodo}
          index={todoList.indexOf(todo)}
          loadTodoList={loadTodoList}
        />
      ))}
    </ul>
=======
    <div className={styles.TodoList}>
      <h3 className={styles.title}>Monday</h3>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </div>
>>>>>>> main
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  handleRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;
