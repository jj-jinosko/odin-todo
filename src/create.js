

const createProject = (title, description, todoList) => {
    return {
    title: title, 
    description: description,
    todoList: todoList,
    }
}

const createTodo = (project, title, description, dueDate, important) => {
    return {
        project: project,
        title: title,
        description: description,
        dueDate: dueDate,
        important: important,
    }
}

// can filter for project property in todoList
// this way I can filter by any todo property: project, important, date
const createProjectList = (todoList, property, value) => {
    const filteredList = [];
    for (let todo of todoList){
        // console.log('todo', todo);
        if (todo[property] == value){
            filteredList.push(todo);
        }
    }
    return filteredList
}


export default {createProject, createTodo, createProjectList}