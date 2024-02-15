function sortByIsCompleted(todoList) {
  let sortedTodoList = todoList.sort((objectA, objectB) => {
    return objectA.isCompleted === objectB.isCompleted
      ? 0
      : objectA.isCompleted
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

function sortByDueDate(todoList, sort) {
  if (!sort) {
    // sortByAscendingDate
    todoList.sort((objectA, objectB) => {
      const dueDateA = objectA.dueDate ? objectA.dueDate : '2099-12-31';
      const dueDateB = objectB.dueDate ? objectB.dueDate : '2099-12-31';

      if (dueDateA < dueDateB) {
        return -1;
      } else if (dueDateA > dueDateB) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    // sort by descending date
    todoList.sort((objectA, objectB) => {
      const dueDateA = objectA.dueDate ? objectA.dueDate : '2000-12-31';
      const dueDateB = objectB.dueDate ? objectB.dueDate : '2000-12-31';
      if (dueDateB < dueDateA) {
        return -1;
      } else if (dueDateB > dueDateA) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  return todoList;
}

export { sortByTitle, sortByIsCompleted, sortByDueDate };
