import './style.css';

// list to be used as the initial default list
const ProjectList = [
    projectImportant,
    dueThisWeek,
    project1,
    project2,
]

const createProject = (title, description, todoList) => {
    return {
    title: title, 
    description: description,
    todoList: todoList,
    }
}
const projectImportant = createProject("important", "blah", []);
const project1 = createProject("project1", "blahblahblah", []);

// console.log(project1);

const CreateTodo = (project, title, description, dueDate, important) => {
    return {
        project: project,
        title: title,
        description: description,
        dueDate: dueDate,
        important: important,
    }
}

const todo1 = CreateTodo("project1", "todo1", "blah", "date", true);
const todo2 = CreateTodo("project1", "2", "blahhhh", "due", false)
// console.log("todo1", todo1);
const todoList = [todo1, todo2];

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

project1.todoList = createProjectList(todoList, "project", "project1");
console.log(project1);

projectImportant.todoList = createProjectList(todoList, "important", true);


// function pageLoad(myProjectList){
//     const content = document.getElementById("content");

//     const projectList = document.getElementById("project-list");

//     const project = document.createElement("div");
//     project.setAttribute("class", "project");
//     project.textContent = "new project";
    
//     const projectTitle = document.createElement("div");
//     projectTitle.setAttribute("class", "project-title");


//     projectList.appendChild(project);
    
// }

// pageLoad();