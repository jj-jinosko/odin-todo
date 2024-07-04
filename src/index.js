import './style.css';
import {createProject, createTodo, createProjectList} from './create.js';

// create objects from stored data module (input:stored data, output:)
// interact w DOM module, inputs from DOM => create/update object => 
// store/get objects module

// input: stored data => output: DOM elements w eventlisteners
// convert user input => objects => stored data

const projectImportant = createProject("important", "blah", []);
const project1 = createProject("project1", "blahblahblah", []);

const todo1 = createTodo("project1", "todo1", "blah", "date", true);
const todo2 = createTodo("project1", "2", "blahhhh", "due", false)

// store new items to todoList
const mytodoList = [];
mytodoList.push(todo1, todo2);

// create/update project todoList
project1.todoList = createProjectList(mytodoList, "project", "project1");
projectImportant.todoList = createProjectList(mytodoList, "important", true);

// list to be used as the initial default list
const myprojectList = [
    projectImportant,
    project1,
]

console.log("Project List", myprojectList);


function pageLoad(){
    const content = document.getElementById("content");

    const projectList = document.getElementById("project-list");

    const project = document.createElement("div");
    project.setAttribute("class", "project");
    project.textContent = "new project";
    
    const projectTitle = document.createElement("div");
    projectTitle.setAttribute("class", "project-title");

    projectList.appendChild(project);

    // displayProjectList
    // console.log(myprojectList)
    function displayProjectList(myProjectList){
        for (let item of myProjectList){
            // console.log("display project", item);
            const project = document.createElement("div");
            project.setAttribute("class", "project");
            project.setAttribute("id", `${item.title}`);
            // project.textContent = item.description;
            
            const projectTitle = document.createElement("div");
            projectTitle.setAttribute("class", "project-title");
            projectTitle.textContent = item.title;

            // projectTodoList.textContent = item.todoList;
        
            project.appendChild(projectTitle);
            projectList.appendChild(project);
        }
    }

    // display/hide project details
    // if project selected = true, display
    function displayProjectDetails(myProject){
        // get the correct project DOM element frmo the project OBJECT, myProject
        const project = document.getElementById(`${myProject.title}`); // careful bc resusing the term project here
        const projectDescription = document.createElement("div");
        projectDescription.setAttribute("class", "project-description");
        projectDescription.textContent = myProject.description;

        const projectTodoList = document.createElement("ul");
        projectTodoList.setAttribute("class", "project-todoList");

        for (let todo of myProject.todoList){
            const projectTodo = document.createElement("li");
            
            const projectTodoTitle = document.createElement("div");
            projectTodoTitle.textContent = todo.title;
            
            projectTodo.appendChild(projectTodoTitle);
            projectTodoList.appendChild(projectTodo);
            }
        
        project.appendChild(projectDescription);
        project.appendChild(projectTodoList);
    }


    displayProjectList(myprojectList);
    displayProjectDetails(project1); //input the project OBJECT

    
    // add project form w event listeners
    const projectForm = document.createElement("form");
    const projectFormLabel = document.createElement("label");
    projectFormLabel.setAttribute("for", "project-name");

    const projectFormInput = document.createElement("input");
    projectFormInput.setAttribute("type", "text");
    projectFormInput.setAttribute("id", "project-name");
    projectFormInput.setAttribute("name", "project-name");
    projectFormInput.setAttribute("placeholder", "Enter Project Name");

    projectForm.appendChild(projectFormLabel);
    projectForm.appendChild(projectFormInput);
    project.appendChild(projectForm);

    const addProjectBtn = document.createElement("button");
    addProjectBtn.innerText = "Add";
    addProjectBtn.addEventListener("click", () => {
        console.log(projectFormInput.value);
        const newProject = createProject(projectFormInput.value, "description");
        myprojectList.push(newProject)
        console.log(myprojectList);
    })

    
    project.appendChild(addProjectBtn);


    
}

pageLoad();