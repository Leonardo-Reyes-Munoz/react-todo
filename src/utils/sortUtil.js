function sortByIsChecked(todoList) {
  let sortedTodoList = todoList.sort((objectA, objectB) => {
    return objectA.isChecked === objectB.isChecked
      ? 0
      : objectA.isChecked
      ? 1
      : -1;
  });
  return sortedTodoList;
}

function sortByTitle(todoList, sort) {
  if (!sort) {
    // sort by ascending title name
    todoList.sort((objectA, objectB) => {
      const titleA = objectA.title.toUpperCase();
      const titleB = objectB.title.toUpperCase();

      if (titleA < titleB) {
        return -1;
      } else if (titleA > titleB) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    // sort by descending title name
    todoList.sort((objectA, objectB) => {
      const titleA = objectA.title.toUpperCase();
      const titleB = objectB.title.toUpperCase();

      if (titleA < titleB) {
        return 1;
      } else if (titleA > titleB) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  return todoList;
}

export { sortByTitle, sortByIsChecked };
