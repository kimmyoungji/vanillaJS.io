// get login-form, input, button
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLogInSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //greeting.innerText = "Hello "+username;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `Hello!  ${username}`  //allow us to put yar in string
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null ){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLogInSubmit);
} else {
    paintGreeting(savedUsername);
}

//attatch click event to login button
//
// can substitute in to browser's funtion(protection)
// add property of <input>
// but then <input> mest be in side <form></form>
// function loginClickEventHandler(event){
//     event.preventDefault();
//     console.log("Hello "+loginInput.value);
//     //hide elements when loginButton is clicked
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     loginInput.classList.add(HIDDEN_CLASSNAME);
//     loginButton.classList.add(HIDDEN_CLASSNAME);
// }
//
// problem: the page is refreshing, the form keep being submmited
// to fix it: 
// attach listener

// validate the input
// if input.value == null --> alert
// else if input.value.length > 15--> alert
//
// function loginClickEventHandler(){
//     console.dir(loginInput);
//     console.log(loginInput.value);
//     let yourName = loginInput.value;
//     if(yourName == ""){
//         console.log("please write down your name!");
//     }else if( yourName.length > 15  ){
//         console.log("please write your short name!");
//     }
// }

//loginButton.addEventListener("click",loginClickEventHandler);
//loginForm.addEventListener("submit",onLogInSubmit);





//console.dir : show the property of an object
