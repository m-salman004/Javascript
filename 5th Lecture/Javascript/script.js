// Please Enter Your Name to visit our Website
// window.onload = function () {
//     var message = ("Good Day !");
//     var name = prompt ("Please Enter Your Name to visit our Website.");
//     if (name == null) {
//         alert ("Please Enter Your Name.");
//     }
//     document.getElementById ('userName').innerHTML = (message + " " + name);
// }
// Array 
// let city0 = "FSD";
// let city1 = "LHR";
// let city3 = "ISB";

let cities = ["FSB", "LHR", "ISB", "Karachi", "Multan"];
// Slice Method Copy Paste
let newCitites = cities.slice ()
// Push Method Array Last Value Add
// cities.push ("Karachi", "Multan")
// Pop Method Array Last Value Remove
// cities.pop ( )
// Shift Method Array Start Value Remove
// cities.shift ( )
// UnShift Method Array Start Value Add
// cities.unshift ("Faisalabad")
// Splice Array Mid Remove and Add
cities.splice(1, 0, "Shahkot", "Gojra")
alert (cities);