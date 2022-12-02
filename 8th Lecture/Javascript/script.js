// Please  Enter your Name and Email 
window.onload = function () { 
    var message = ("Good Day !");
    var name = prompt("What is Your Full Name?");
    if (name == null) {
        alert("Please enter your full name");
    }
    document.getElementById ('userName').innerHTML = (message + " " + name);
};