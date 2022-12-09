let originalText = "I love my Country Pakistan. <br/> I love my Faisalabad. <br/> I love my Homeland. "
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
// function askName () {
//     var message = "Good Day !";
//     var fName   = prompt ("Please enter your Name to visit our Website.");

//     if (fName == null) {
//         alert ("Please Enter Your Name.");
//     }
  
//     document.getElementById ('userName').innerHTML = (message + " " + fName );
// };

//     askName();

document.getElementById('originalTextBox').innerHTML = originalText;
// Convert to Lowercase
document.getElementById ('convertToLowercase').onclick = function () {
    
 };
// Convert to Uppercase
document.getElementById ('convertToUppercase').onclick = function () {

 };
// Clear Output
function clearOutput () {
    document.getElementById ('output').innerHTML = "";
 }
//  Clear Input
function clearInput () {
    document.getElementById ('inputText').innerHTML = "";
 }