// Please  Enter your Name 
window.onload = function () { 
    var message = ("Good Day !");
    var name = prompt("What is Your Full Name?");
    if (name == null) {
        alert("Please enter your Full Name");
    }   
    document.getElementById ('userName').innerHTML = (message + " " + name);
};