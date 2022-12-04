// Please  Enter your Name 
// window.onload = function () { 
//     var message = ("Good Day !");
//     var name = prompt("What is Your Full Name?");
//     if (name == null) {
//         alert("Please enter your Full Name");
//     }   
//     document.getElementById ('userName').innerHTML = (message + " " + name);
// };
// Alternative Method
function askName () {
        var message = "Good Day !";
        var fName   = prompt ("Please enter your Name to visit our Website.");

        if (fName == null) {
                
            }
        document.getElementById ('userName').innerHTML = (message + " " + fName );
};
    askName ();
