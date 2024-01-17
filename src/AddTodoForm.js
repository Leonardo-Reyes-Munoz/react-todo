import React from 'react';
import InputWithLabel from './InputWithLabel';
import styles from './AddTodoForm.module.css';

export default function AddTodoForm({ addTodo }) {
  const [todoTitle, setTodoTitle] = React.useState('');

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    addTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle('');
  }

  return (
    <form onSubmit={handleAddTodo} className={styles.AddTodoForm}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        Title
      </InputWithLabel>
      <button type="submit" className={styles.add}>
        <span className="material-symbols-outlined">add</span>
      </button>
    </form>
  );
}
