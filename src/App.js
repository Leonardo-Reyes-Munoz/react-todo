import React from 'react';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TodoContainer from './components/TodoContainer/TodoContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  function addTodo(newTodo) {
    setTodoList((prevTodos) => [...prevTodos, newTodo]);
  }

  function removeTodo(id) {
    const filteredTodoList = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(filteredTodoList);
  }

  function displayTodoList(todos) {
    setTodoList(todos);
    setIsLoading(false);
  }

  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <h1 className="page-title">Weekly Tasks</h1>

              <AddTodoForm addTodo={addTodo} />

              <TodoContainer
                todoList={todoList}
                isLoading={isLoading}
                displayTodoList={displayTodoList}
                removeTodo={removeTodo}
                tableName="Monday"
              />
            </>
          }
        />
        <Route path="/newTodoList" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
