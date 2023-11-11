import React from 'react';

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
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}
