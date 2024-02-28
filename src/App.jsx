import React from 'react';
import TodoContainer from './components/TodoContainer/TodoContainer';
import Navbar from './components/NavBar/Navbar';
import { useNavigate } from 'react-router-dom';
import MockData from './components/TodoContainer/MockData';

function App() {
  const navigate = useNavigate();
  const [todoListData, setTodoListData] = React.useState(MockData);

  function handleLogout() {
    localStorage.clear();
    handleSetTodoListData([]);
    navigate('/');
  }

  function handleSetTodoListData(updatedList) {
    setTodoListData(updatedList);
  }

  return (
    <>
      <Navbar handleLogout={handleLogout} />
      <TodoContainer
        handleSetTodoListData={handleSetTodoListData}
        todoListData={todoListData}
      />
    </>
  );
}

export default App;
