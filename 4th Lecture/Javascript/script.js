// Concatenation Some Strings
document.getElementById ('concatenateSomeStrings').onclick = function () {
    var message = "Good Day ";
    var name = "Salman";
    var banger = " ! ";
    document.getElementById ('statements').innerHTML = (message + name + banger);
    document.getElementById ('outputs').innerHTML = (message + name + banger);
    console.log (message + name + banger);
    alert (message + name + banger);
}
// Clear Statement 
document.getElementById ('clearstmnt').onclick = function () {
    document.getElementById ('statements').innerHTML = "";
}

// Clear output 
document.getElementById ('clroutput').onclick = function () {
    document.getElementById ('outputs').innerHTML = "";
}
