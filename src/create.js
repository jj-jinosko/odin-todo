// does it make any difference to use the named function vs the variable assigned to an anonymous function?

export const createProject = (title, description, todoList) => {
  return {
    title: title,
    description: description,
    todoList: todoList,
  };
};

export function createTodo(project, title, description, dueDate, important) {
  return {
    project: project,
    title: title,
    description: description,
    dueDate: dueDate,
    important: important,
  };
}

// can filter for project property in todoList
// this way I can filter by any todo property: project, important, date
export function createProjectList(todoList, property, value) {
  const filteredList = [];
  for (let todo of todoList) {
    // console.log('todo', todo);
    if (todo[property] == value) {
      filteredList.push(todo);
    }
  }
  return filteredList;
}

// export default {createProject, createTodo, createProjectList}
