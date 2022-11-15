// Prompt 
// var message = "Good Day !";
// var fName   = prompt ("Please enter your Name to visit our Website.");

// if (fName == null) {
//     alert ("Please Enter Your Name.");
// }
// document.getElementById ('goodDay').innerHTML = (message + " " + fName );

// Alternative Method
// window.onload = function () {
//     var message = "Good Day !";
// var fName   = prompt ("Please enter your Name to visit our Website.");

// if (fName == null) {
//     alert ("Please Enter Your Name.");
// }
// document.getElementById ('goodDay').innerHTML = (message + " " + fName );
// }

// Alternative Method
// function askName () {
//     var message = "Good Day !";
// var fName   = prompt ("Please enter your Name to visit our Website.");

// if (fName == null) {
//     alert ("Please Enter Your Name.");
// }
// document.getElementById ('goodDay').innerHTML = (message + " " + fName );
// }
// askName ();

// Concatenation Some Strings
document.getElementById ('concatenateSomeStrings').onclick = function () {
    var message = "Good Day ";
    var name = "Salman";
    var banger = " ! ";
    document.getElementById ('statements').innerHTML = (message + name + banger);
    document.getElementById ('outputs').innerHTML = (message + name + banger);
    // console.log (message + name + banger);
    // alert (message + name + banger);
}

// Ask Name From User
document.getElementById ('askFromUser').onclick = function () {
    // var message = "Good Day ";
    // var firstName = prompt ("What is your First Name?");
    // var lastName = prompt ("What is your Last Name?");
    // var banger = " ! ";
    // document.getElementById ('statements').innerHTML = (message + firstName + " " + lastName +   banger);
    // document.getElementById ('outputs').innerHTML = (message + firstName + " " + lastName +   banger);
    // console.log (message + firstName + " " + lastName + banger);
    // alert (message + firstName + " " + lastName + banger);
    
    // var number1 = +prompt ("Enter your number1");

    // if (number1 == 0) {
    //     alert ("Please Enter Number 1");
        // prompt ("Please Enter Your Number 1");
    //     return;
    // }
    // var number2 = +prompt ("Enter your number2" );
    // if (number1 == 0) {
    //     alert ("Please Enter Number 1");
        // prompt ("Please Enter Your Number 1");
    //     return;
    // }

    var one = "2";
    var two = 2;
    if (one !== two) {
        document.getElementById ('statements').innerHTML = ("Yess It's True");
        document.getElementById ('outputs').innerHTML = ("Yess It's True");

    }

    // document.getElementById ('statements').innerHTML = (number1 + number2);
    // document.getElementById ('outputs').innerHTML = (number1 + number2);

    // if (firstName == "Ali") {
    //     document.getElementById ('statements').innerHTML = ('Good Morning !. Muhammad Salman.')
    // }
    // if (firstName == "Dawood") {
    //     document.getElementById ('outputs').innerHTML = ('Have a Nice Day.')
    // }
}

// Comparison Operators

// Value Assign
// =
// Only Value Check
// ==
// "1" == 1 = True
// "1"  === 1 = False
//  1 == 1 = True
//  1 === 1 = True
// Identity Operators
// === Values + Data Types
// Not Equal 
//  ! = Values
//  !== Values + Data Types
// Greater or Less 
// > Greater
// < Less
// Greater Than or Equal to >=
// Less Than or Equal to <=



// Clear Statement 
document.getElementById ('clearstmnt').onclick = function () {
    document.getElementById ('statements').innerHTML = "";
}

// Clear output 
document.getElementById ('clroutput').onclick = function () {
    document.getElementById ('outputs').innerHTML = "";
}
