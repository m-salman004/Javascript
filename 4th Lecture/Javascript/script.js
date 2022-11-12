// Concatenation Some Strings
document.getElementById ('concatenateSomeStrings').onclick = function () {
    var message = "Good Day ";
    var name = "Salman";
    var banger = " ! ";
    document.getElementById ('statements').innerHTML = (message + name + banger);
    document.getElementById ('outputs').innerHTML = (message + name + banger);
}
