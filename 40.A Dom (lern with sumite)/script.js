// start-part 1-- getElementByID,ClassNane,TagName দিয়ে ধরা এবং valu chance করার নিওম --

// let headerElement = document.getElementById ("header");

// headerElement.innerText= 'to do Appsss';

// headerElement.style.color = 'red';

// headerElement.style.fontSize = '30px';

// console.log(headerElement)



//  ----part-2 start- querySelector  ---


//  let lastItem = document.querySelector('.item:nth-child(3)')


//  lastItem.style.color ='red'

//  console.log(lastItem)



// --part-3 start-- এখানে আমার প্রথমে তার প্যরেন্ট কে ধরছি ,

// তার পরে সরাসরি তার নাতিকে ধরেছি ----

//const grandparent = document.querySelector('.todo-list');

//const children = grandparent.querySelectorAll('.item');

//console.log(children);



// ------part- 4 start ( এড ইভেন্ট লেখার  ১ম নিওম )(Yahoo baba) ------


// document.getElementById("header").addEventListener("click",abc);


// function abc(){

//      document.getElementById("header").style.color = 'red'
// }

//  console.log(abc)



// ------part- 4 start ( এড ইভেন্ট লেখার  ২য় নিওম)(yahoo baba) ------


// document.getElementById("header").addEventListener("click",function(){

//      document.getElementById("header").style.color = 'red'


// });


// ----------Sumit All  thuri----------

//-------1 part-------

 // ----select elements & assign them to variables

//  let newTask = document.querySelector('#new-task');
//  let form = document.querySelector('form');
//  let todoUl = document.querySelector('#items');
//  let completeUl = document.querySelector('.complete-list ul');


// ------2 part----

//----- functions------

// let createTask = function(task) {
//     let listItem = document.createElement('li');
//     let checkBox = document.createElement('input');
//     let label = document.createElement('label');

//     label.innerText = task;
//     checkBox.type = 'checkbox';

//     listItem.appendChild(checkBox);
//     listItem.appendChild(label);

//     return listItem;
// }


// ---------3 part-----

// let addTask = function(event) {
//     event.preventDefault();
//     let listItem = createTask(newTask.value);
//     todoUl.appendChild(listItem);
//     newTask.value = "";
//     // bind the new list item to the incomplete list
//     bindInCompleteItems(listItem, completeTask);
// }

// ---------4 part-----

// let completeTask = function() {
//     let listItem = this.parentNode;
//     let deleteBtn = document.createElement('button');
//     deleteBtn.innerText = 'Delete';
//     deleteBtn.className = 'delete';
//     listItem.appendChild(deleteBtn);

//     let checkBox = listItem.querySelector('input[type="checkbox"]');
//     checkBox.remove();
//     completeUl.appendChild(listItem);
//     bindCompleteItems(listItem, deleteTask);
// }

// ---------5 part-----

// let deleteTask = function() {
//     let listItem = this.parentNode;
//     let ul = listItem.parentNode;
//     ul.removeChild(listItem);
// }

// // ---------6 part-----

// let bindInCompleteItems = function(taskItem, checkboxClick) {
//     let checkBox = taskItem.querySelector('input[type="checkbox"]');
//     checkBox.onchange = checkboxClick;
// }

// ---------7 part-----

// let bindCompleteItems = function(taskItem, deleteButtonClick) {
//     let deleteButton = taskItem.querySelector('.delete');
//     deleteButton.onclick = deleteButtonClick;
// }

// ---------8 part-----

// for(let i=0; i< todoUl.children.length; i++ ) {
//     bindInCompleteItems(todoUl.children[i], completeTask);
// }

// ---------9 part-----

// for(let i=0; i< completeUl.children.length; i++ ) {
//     bindCompleteItems(completeUl.children[i], deleteTask);
// }

// form.addEventListener('submit', addTask);