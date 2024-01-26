import React from 'react';
import TodoContainer from './components/TodoContainer/TodoContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <TodoContainer tableName="Today" />
            </>
          }
        />
        <Route path="/sharedTodoList" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
