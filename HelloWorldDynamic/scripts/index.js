// tells javascript there are tighter set of rules. Throws an error on an undefined var
// if not defined and not in js, javascript will provide a value
"use strict"; 

//define function as init
window.onload = init;

// defining empty fuction init
function init() {
    // const: set name and unchangeable 
    // helloBtn: assigned to this variable
    // document: HTML document
    // getElementById: find element in HTML by ID
    const helloBtn = document.getElementById("helloBtn");
    // helloBtn: assigned value to variable to 'onHelloBtnClicked'
    // onclick: runs code when the user clicks an HTML element EX: button
    //          property of button. noop
    // onHelloBtnClicked: assigned property '.onclicked'  to 'helloBtn.onclick'
    helloBtn.onclick = onHelloBtnClicked;
}

// ( ) : variable that can be passed to function if named variable is present
// onHelloBtnClicked: defined and contains function
function onHelloBtnClicked(){
    // alert: built in function
    // (): content in parenteses will be displayed
    alert('Hi there!')
}

// outcome:  will cause for alert box to appear with the message "Hi there!"