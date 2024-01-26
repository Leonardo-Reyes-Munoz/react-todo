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
    //sort by isChecked state
    todoList.sort((objectA, objectB) => {
      return objectA.checked === objectB.checked ? 0 : objectA.checked ? 1 : -1;
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
    // sort by isChecked status
    todoList.sort((objectA, objectB) => {
      return objectA.checked === objectB.checked ? 0 : objectA.checked ? 1 : -1;
    });
  }
  return todoList;
}

export { sortByTitle };
