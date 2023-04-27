"use strict";

window.onload = init;

function init(){
    const greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = onGreetUserBtnClicked;
    const nameField = document.getElementById("nameField");
    let name = nameField.value;
}

function onGreetUserBtnClicked(){
   let message = alert('Hello ' + nameField.value)
}