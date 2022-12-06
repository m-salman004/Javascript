// Global Array
let cities = ["FSB", "LHR", "ISB", "PSR", "Lahore"];
// Please Enter Your Name to visit our Website
// window.onload = function () {
//     var message = ("Good Day !");
//     var name = prompt ("Please Enter Your Name to visit our Website.");
//     if (name == null) {
//         alert ("Please Enter Your Name.");
//     }
//     document.getElementById ('userName').innerHTML = (message + " " + name);
// }
// Alternative Method
var message = "Good Day !";
var fName   =  ("Please enter your Name to visit our Website.");


// Array 
// let city0 = "FSD";
// let city1 = "LHR";
// let city3 = "ISB";

// let cities = ["FSB", "LHR", "ISB", "Karachi", "Multan"];
// For Loop
// for (let i = 0; i < cities.length; i++) {
//     alert (cities [i]);
// }
// Slice Method Copy Paste
// let newCities = cities.slice ()
// console.log ("Cities=>", cities)
// console.log ("New Cities=>",  newCities)
// Push Method Array Last Value Add
// cities.push ("Karachi", "Multan")
// Pop Method Array Last Value Remove
// cities.pop ( )
// Shift Method Array Start Value Remove
// cities.shift ( )
// UnShift Method Array Start Value Add
// cities.unshift ("Faisalabad")
// Splice Array Mid Remove and Add
// cities.splice(1, 0, "Shahkot", "Gojra")
// alert (cities);

// Simple Alert
document.getElementById ('simpleAlert').onclick = function () {
    alert ("I'm Muhammad Salman");
}

// Print My Name
document.getElementById ('printMyName').onclick = function () {
    
}

// Print All Cities
document.getElementById ('printAllCities').onclick = function () {
    document.getElementById ('outPut').innerHTML = "";

    for (i= 0 ; i < cities.length ; i++) {

        let num = i + 1;
      document.getElementById ('outPut').innerHTML += num + ') ' +  cities[i] + '<br />';        
    }
}

// Add Your City in List
document.getElementById ('addYourCityInList').onclick = function () {

}

// Generate Table
document.getElementById ('generateTable').onclick = function () {

}
// Clear
document.getElementById ('clearBtn').onclick = function () {
    document.getElementById ('clearButton').innerHTML = " ";
}
// Clear Output
document.getElementById ('clearOutput').onclick = function () {
    document.getElementById ('outPut').innerHTML = " ";
}