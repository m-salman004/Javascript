// Prompt 
// var message = "Good Day !";
// var fName   = prompt ("Please enter your Name to visit our Website.");

// if (fName == null) {
//     alert ("Please Enter Your Name.");
// }
// document.getElementById ('goodDay').innerHTML = (message + " " + fName );

// Alternative Method
window.onload = function () {
    var message = "Good Day !";
var fName   = prompt ("Please enter your Name to visit our Website.");

if (fName == null) {
    alert ("Please Enter Your Name.");
}
document.getElementById ('goodDay').innerHTML = (message + " " + fName );
}

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

document.getElementById ('comparisonOperators').onclick = function () {
    // var Number1 = ("12") ;
    // var Number2 = ("12") ;
// Less Than
    // if (Number1 <= Number2) {
    //     document.getElementById ('statements').innerHTML = ("Yess It's True");
    //     document.getElementById ('outputs').innerHTML = ("Yess It's True");
    // }
// Greater Than
    // if (num1 > num2) {
    //     document.getElementById ('statements').innerHTML = ("Yess It's True");
    //     document.getElementById ('outputs').innerHTML = ("Yess It's True");
    // }
// Greater Than
    // if (num1 > num2) {
    //     document.getElementById ('statements').innerHTML = ("Yess It's True");
    //     document.getElementById ('outputs').innerHTML = ("Yess It's True");
    // }

    var num3 = 14;
    var num4 = 15;

    if (num3 >= num4) {
            document.getElementById ('statements').innerHTML = ("Yess It's True. The 15 = 15");
            document.getElementById ('outputs').innerHTML = ("Yess It's True. The 15 = 15");
        }
        else {
            document.getElementById ('statements').innerHTML = ("No, It's not True. The 14 is not equal to 15");
            document.getElementById ('outputs').innerHTML = ("No, It's not True. The 14 is not equal to 15");
        }
}

// If else If
    document.getElementById ('ifElseIf').onclick = function () {
        var num5 = 10;
        var num6 = 20;
        if (num5 >= num6) {
            document.getElementById ('statements').innerHTML = ("First Condtion is not Ture.");
            document.getElementById ('outputs').innerHTML = ("First Condtion is not Ture.");
        }
        else if (num5 === num6) {
            document.getElementById ('statements').innerHTML = ("Second Condtion is not Ture.");
            document.getElementById ('outputs').innerHTML = ("Second Condtion is not Ture.");
        }
        else if (num5 <= num6) {
            document.getElementById ('statements').innerHTML = ("Third Condtion is Ture.");
            document.getElementById ('outputs').innerHTML = ("Third Condtion is Ture.");
        }
        else {
            document.getElementById ('statements').innerHTML = ("Your Condtion is not Ture.");
            document.getElementById ('outputs').innerHTML = ("Your Condtion is not Ture.");
        }

    }
 
// Testing sets of Conditions
// Logical Operators
// And Operator
// &&
// OR Operator
// ||
// Not Operator
// !

document.getElementById ('testingSetsConditions').onclick = function () {
    var age = +prompt ("Enter Your Age.");
    var weight = +prompt ("Enter Your Weight.");

    if (age >=18 && weight <= 70) {
        document.getElementById ('statements').innerHTML = ("You are a Smart Man.");
        document.getElementById ('outputs').innerHTML = ("You are a Smart Man.");
    }
    else if (age >=18 && weight > 70) {
        document.getElementById ('statements').innerHTML = ("You are a Fat Guy.");
        document.getElementById ('outputs').innerHTML = ("You are a Fat Guy.");
    }
    else {
        document.getElementById ('statements').innerHTML = ("You are a Baby.");
        document.getElementById ('outputs').innerHTML = ("You are a Baby.");
    }
}

// If Statements Nested
document.getElementById ('ifStatementsNested').onclick = function () {

    var age = +prompt("Your Age?");
    if (age >=18 ) {

       var weight = +prompt ("Your Weight?")
       if (weight <= 70 ) {
        document.getElementById ('statements').innerHTML = ("You are a Smart Man.");
        document.getElementById ('outputs').innerHTML = ("You are a Smart Man.");
       }
       else if (weight > 70) {
        document.getElementById ('statements').innerHTML = ("You are a Fat Guy.");
        document.getElementById ('outputs').innerHTML = ("You are a Fat Guy.");
       }
       else {
        document.getElementById ('statements').innerHTML = ("You are a Baby.");
        document.getElementById ('outputs').innerHTML = ("You are a Baby.");
       }
    }
    else {
        alert ("You are a Baby.");
    }
}

// Login
document.getElementById ('logIn').onclick = function () {
    var userName = prompt ("Your User Name");
    var pass    = prompt ("Your Password");

    if (userName === "Salman" && pass === "123") {
        document.getElementById ('statements').innerHTML = ("User Loged In.");
        document.getElementById ('outputs').innerHTML = ("User Loged In.");
    }
    else {
        document.getElementById ('statements').innerHTML = ("Your User Name or Password is incorrect.");
        document.getElementById ('outputs').innerHTML = ("Your User Name or Password is incorrect.");
    }
}
// Clear Statement 
document.getElementById ('clearstmnt').onclick = function () {
    document.getElementById ('statements').innerHTML = "";
}

// Clear output 
document.getElementById ('clroutput').onclick = function () {
    document.getElementById ('outputs').innerHTML = "";
}
