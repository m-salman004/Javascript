// Please Enter your Name 
window.onload = function () {
    let message = ("Good Day !");
    let name = prompt ("Please Enter your Name.");
    if (name == null) { 
        alert ("PLease Enter Your Name");
    }
    document.getElementById ("userName").innerHTML = (message + " " + name);
 };