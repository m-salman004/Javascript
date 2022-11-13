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
    
    var number1 = prompt ("Enter your number1", "10");
    var number2 = prompt ("Enter your number2","20" );

    document.getElementById ('statements').innerHTML = (number1 + number2);
    document.getElementById ('outputs').innerHTML = (number1 + number2);
}


// Clear Statement 
document.getElementById ('clearstmnt').onclick = function () {
    document.getElementById ('statements').innerHTML = "";
}

// Clear output 
document.getElementById ('clroutput').onclick = function () {
    document.getElementById ('outputs').innerHTML = "";
}
