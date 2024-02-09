import React from 'react';
import TodoContainer from './components/TodoContainer/TodoContainer';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <TodoContainer tableName="Today" />
    </>
  );
}

export default App;
