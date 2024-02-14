import React from 'react';
import TodoContainer from './components/TodoContainer/TodoContainer';
import Navbar from './components/NavBar/Navbar';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = React.useState([]);

  function handleLogout() {
    localStorage.clear();
    handleSetTodoList([]);
    navigate('/');
  }

  function handleSetTodoList(updatedList) {
    setTodoList(updatedList);
  }

  return (
    <>
      <Navbar handleLogout={handleLogout} />
      <TodoContainer
        tableName="Today"
        handleSetTodoList={handleSetTodoList}
        todoList={todoList}
      />
    </>
  );
}

export default App;
