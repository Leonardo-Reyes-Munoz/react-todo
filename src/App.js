import React from 'react';

function App() {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = React.useState(
      localStorage.getItem(key) || initialState
    );
    React.useEffect(() => {
      localStorage.setItem(key, value);
    }, [value]);

    return [value, setValue];
  };

  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const searchStories = stories.filter((story) =>
    story.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <>
      <h1>Hacker Stories</h1>
      <Search onSearch={handleSearch} searchTerm={searchTerm} />

      <hr />
      <List list={searchStories} />
    </>
  );
}

function Search({ search, onSearch, searchTerm }) {
  return (
    <>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" value={search} onChange={onSearch} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </>
  );
}

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);
const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);

export default App;
