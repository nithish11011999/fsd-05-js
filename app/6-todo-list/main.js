// on submit the whole form
let formElement = document.getElementById('todo-form'),
    taskContainer = document.getElementById('task-container');
  // console.log(formElement);

function addTask(e){
    e.preventDefault();
    // get input value
let todoTaskEle = document.getElementById('todo-task');
    todoTaskValue = todoTaskEle.value,
    
    //create new li element  <li></li>
    liEle = document.createElement('li');

    //create new span element  <span></span>
    spanEle = document.createElement('span');

    //create new 'a' element for 'done'
    doneEle = document.createElement('a');
    //create new 'a' element for 'edit'
    editEle = document.createElement('a');
    //create new 'a' element for 'delete'
    deleteEle = document.createElement('a');

    //add input value inside the span(innerHTML)
    spanEle.innerHTML = todoTaskValue;

    //add class name for each 'a' tag
    doneEle.classList.add('done-btn');
    editEle.classList.add('edit-btn');
    deleteEle.classList.add('delete-btn');

    // add text for each 'a' tag
    doneEle.innerHTML = 'Done';
    editEle.innerHTML = 'Edit';
    deleteEle.innerHTML = 'Delete';

    // add href for each 'a' tag
    doneEle.setAttribute('href', 'a');
    editEle.setAttribute('href', 'a');
    deleteEle.setAttribute('href', 'a');

    // insert span tag inside 'li'
    liEle.appendChild(spanEle);
    // insert a.done tag inside 'li'
    liEle.appendChild(doneEle);
    // insert a.edit tag inside 'li'
    liEle.appendChild(editEle);
    // insert a.delete tag inside 'li'
    liEle.appendChild(deleteEle);

    //insert li tag inside ol
    taskContainer.appendChild(liEle);

}

formElement.addEventListener('submit',addTask);