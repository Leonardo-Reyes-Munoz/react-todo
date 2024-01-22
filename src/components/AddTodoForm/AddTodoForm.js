import React from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
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
    <div className={styles.AddTodoForm}>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
          <span>New Task</span>
        </InputWithLabel>
        <button type="submit" className={`${styles.btn} ${styles.add}`}>
          <span className="material-symbols-outlined">add</span>
        </button>
      </form>
    </div>
  );
}
