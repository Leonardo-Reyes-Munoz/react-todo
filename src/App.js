import React from "react";

function List(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {props.list.map(function (item) {
          return <Item item={item} />;
        })}
      </ul>
    </div>
  );
}

const Item = (props) => {
  return <li key={props.item.id}>{props.item.title}</li>;
};

function Search(props) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  };

  const handleMouseOver = (event) => {
    console.log(event);
  };

  return (
    <>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        onChange={handleChange}
        onMouseOver={handleChange}
      />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </>
  );
}

function App() {
  let todoList = [
    {
      id: 1234,
      title: "Complete CTD assignment",
    },
    {
      id: 4321,
      title: "Go grocery shopping",
    },
    {
      id: 9876,
      title: "Go the gym",
    },
    {
      id: 4987,
      title: "Do laundry",
    },
  ];

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <h1>Todo List</h1>
      <Search onSearch={handleSearch} />
      <List list={todoList} title="React Ecosystem" />
    </>
  );
}

export default App;
