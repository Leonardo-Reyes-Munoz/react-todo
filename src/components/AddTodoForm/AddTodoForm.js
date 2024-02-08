import React from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import styles from './AddTodoForm.module.css';
import PropTypes from 'prop-types';
import { createTodoItem } from '../../utils/fetchUtil';

export default function AddTodoForm({ loadTodoList }) {
  const [todoTitle, setTodoTitle] = React.useState('');

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  async function handleAddTodo(event) {
    event.preventDefault();
    await createTodoItem(todoTitle);
    setTodoTitle('');
    loadTodoList();
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
        <button type="submit" className={styles.add}>
          <span className="material-symbols-outlined">add</span>
        </button>
      </form>
    </div>
  );
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func,
};
