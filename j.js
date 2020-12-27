//selectors
const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');


todobutton.addEventListener('click',addtodo);
todolist.addEventListener('click',deletecheck);


function addtodo(event){
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    const newtodo = document.createElement("li");
    newtodo.innerText = todoinput.value;
    newtodo.classList.add("todo-list");
    todoDiv.appendChild(newtodo);

    const completedbutton = document.createElement('button');
    completedbutton.innerHTML = '<i class ="fas fa-check"></i>';
    completedbutton.classList.add("complete-btn");
    todoDiv.appendChild(completedbutton);

    const trashbutton = document.createElement('button');
    trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
    trashbutton.classList.add("trash-btn");
    todoDiv.appendChild(trashbutton);
    todolist.appendChild(todoDiv);
    
    todoinput.value= "";
}

function deletecheck(e){
    const item = e.target;
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }


    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}