// Please Enter Your Name to visit our Website
window.onload = function () {
    var message = ("Good Day !");
    var name = prompt ("Please Enter Your Name to visit our Website.");
   
    document.getElementById ('userName').innerHTML = (message + " " + name);
};