// Please Enter Your Name to visit our Website
// window.onload = function () {
//     var message = ("Good Day !");
//     var name = prompt ("Please Enter Your Name to visit our Website.");
//     if (name == null) {
//         alert ("Please Enter Your Name.");
//     }
//     document.getElementById ('userName').innerHTML = (message + " " + name);
// };
// Alternative Method
function askName () {
    var message = "Good Day !";
    var fName   = prompt ("Please enter your Name to visit our Website.");

    if (fName == null) {
        alert ("Please Enter Your Name.");
    }
  
    document.getElementById ('userName').innerHTML = (message + " " + fName );
};
