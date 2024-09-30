// const mainHeading= document.getElementById("main-heading")
// // mainHeading.style.color= "red";
// console.log(mainHeading);


// const link= document.querySelector("a");
// console.log(link.getAttribute("href").slice(1));

// const inputElement=document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));


// event listener
// const btn= document.querySelector(".btn-headline");
// btn.addEventListener("click",()=>{
//     console.log("double cliked again!!!!");
// })



// Todo list 

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo  input[type='text']");
const todoList = document.querySelector(".todo-list");

// console.log(todoInput);






todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(todoInput.value);
    const newTodoText = todoInput.value ;
    const newLi = document.createElement("li");
    const newLiInnerHTML = `
    <span class="text">${newTodoText.toUpperCase() }</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`

    newLi.innerHTML = newLiInnerHTML;
    // console.log(newLi);
    todoList.append(newLi);
    todoInput.value  = "";

});
todoList.addEventListener("click", (e) => {

    //check if user clicked on done button
    if (e.target.classList.contains("remove")) {
        const TargetLi = e.target.parentNode.parentNode;
        TargetLi.remove();
        // console.log("you want to remove the me")

    }
    if (e.target.classList.contains("done")) {

        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through"
        // console.log("good!!!!!")
    }
    // console.log(e.target);
});