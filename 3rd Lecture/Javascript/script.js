// Alert Name
document.getElementById ('alertString').onclick = function () {
    alert ('Muhammad Salman !.');
    // Original Statement
    let statement = "alert ('Muhammad Salman !.') "
    document.getElementById ('statement').innerHTML = statement;
    // Clear Output
    // document.getElementById ('Output').innerHTML = '';
}

// Alert Number
    document.getElementById ('alertNumber').onclick = function () {
        alert (786);
    // Original Statement
    let Number = "alert (786)"
    document.getElementById ('statement').innerHTML = Number;
    // Clear Output
    // document.getElementById ('Output').innerHTML = '';
}

// Show Variable Names 
document.getElementById ('variableNames').onclick = function () {
    
    let Variable = ('<ul><li>Names can contain letters, digits, underscores, and dollar signs.</li></ul>')
    document.getElementById ('Output').innerHTML = Variable;
    }
//    Data Types = 8
// 1- String
// 2- Boolean
// 3- Number
// 4- Array 
// 5- Function () {}
// 6- undefined
// 7- Object
// 8- Null