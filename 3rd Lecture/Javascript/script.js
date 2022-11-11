// Alert Name
document.getElementById ('alertString').onclick = function () {
    alert ('Muhammad Salman !.');
    // Original Statement
    let statement = "alert ('Muhammad Salman !.') "
    document.getElementById ('statements').innerHTML = statement;
}

// Alert Number
    document.getElementById ('alertNumber').onclick = function () {
        alert (786);
    // Original Statement
    let Number = "alert (786)"
    document.getElementById ('statements').innerHTML = Number;
   
}

// Show Variable Names 
document.getElementById ('variableNames').onclick = function () {
    
    let Variable = ('<ul><li>Names can contain letters, digits, underscores, and dollar signs.</li></ul> <ul><li>Names must begin with a letter.</li></ul><ul><li>Names can also begin with <code> $ </code> and <code> _ </code> </li></ul> <ul><li>Names are case sensitive (y and Y are different variables).</li></ul><ul><li>Reserved words (like JavaScript keywords) cannot be used as names.</li></ul>')
    // Clear Output
    document.getElementById ('outputs').innerHTML = Variable;
}

// Show camelCase Examples
document.getElementById ('camelCaseExamples').onclick = function () {
    
    let camelcase = ('<ul><li> camelCaseExamples </li></ul> <ul><li> variableNames </li></ul> <ul><li> alertString </li></ul> <ul><li> alertNumber </li></ul>')
    // Clear Output
    document.getElementById ('outputs').innerHTML = camelcase;
    
}

// Sum 2 Numbers
document.getElementById ('sumNumbers').onclick = function () {
    let num1 = 10;
    let num2 = 40;
    let sum  = num1 + num2;
    
    document.getElementById ('outputs').innerHTML = "<p class = 'text-center'>"+ sum +" </p>"
    let statement = "let num1 = "+ num1 + "; <br/> let num2 = "+ num2 +";<br/> let sum = num1 + num2;"
    document.getElementById ('statements').innerHTML = statement;  
}

// Subtract 2 Numbers
document.getElementById ('subtractNumbers').onclick = function () {
    let num1 = 40;
    let num2 = 30;
    let subtract  = num1 - num2;
    document.getElementById ('outputs').innerHTML = "<p class = 'text-center'>"+ subtract +" </p>"
    document.getElementById ('outputs').innerHTML = "<p class = 'text-center'>"+ subtract +" </p>"
    let statement = "let num1 = "+ num1 + "; <br/> let num2 = "+ num2 +";<br/> let subtract = num1 - num2;"
    document.getElementById ('statements').innerHTML = statement;  
}

// Multiply 2 Numbers
document.getElementById ('mutiplyNumbers').onclick = function () {
    let num1 = 40;
    let num2 = 30;
    let multiply  = num1 * num2;
    document.getElementById ('outputs').innerHTML = "<p class = 'text-center'>"+ multiply +" </p>"
    
    let statement = "let num1 = "+ num1 + "; <br/> let num2 = "+ num2 +";<br/> let multiply = num1 * num2;"
    document.getElementById ('statements').innerHTML = statement;  
}
// Divide 2 Numbers
document.getElementById ('divideNumbers').onclick = function () {
    let num1 = 40;
    let num2 = 30;
    let divide  = num1 / num2;
    document.getElementById ('outputs').innerHTML = "<p class = 'text-center'>"+ divide +" </p>"
    
    let statement = "let num1 = "+ num1 + "; <br/> let num2 = "+ num2 +";<br/> let divide = num1 / num2;"
    document.getElementById ('statements').innerHTML = statement; 
}

// Calculate Some Number
    document.getElementById ('calculateSomeNumbers').onclick = function () {

    let calculateNumbers = 10/5 * 2 + 8 ** 9 - (8+5) ;
    document.getElementById ('outputs').innerHTML = "<p class = 'text-center'>"+ calculateNumbers +" </p>"
    
    let statement = "Let calculeNumbers = 10/5 * 2 + 8 ** 9 - (8+5)";
    document.getElementById ('statements').innerHTML = statement; 
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

// Clear Statement
document.getElementById("clearstmnt").onclick = function() {
    statments.innerText = "";
    }
    
// Clear Output
    document.getElementById("clroutput").onclick = function() {
    
        outputs.innerHTML = "";
    }
