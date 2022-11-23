// ----------------- TASK 1 ----------------- //
    // return Equal or Not Equal //

function trueOrFalse (a, b) {
    if (a == b) {
        return "Equal";
    }

    else {
        return "Not Equal";
}
}

console.log (trueOrFalse(4,5));



// ----------------- TASK 2 ----------------- //
     // Convert Fahrenheit  ro Celsius //

function Convertor (Fahrenheit) {
    if (typeof Fahrenheit === "number") {
        return (Fahrenheit - 32) * 5/9;
    } else {
        return "False";
    }
}

console.log (Convertor(-10));



// ----------------- TASK 3 ----------------- //

      // Simple Calculator in JS//

function calcSum (a, b, operator) {
    if (typeof a !== "number" || typeof b !== "number" || operator !== '+' & operator !== '-' & operator !== '/' & operator !== '*' ) {
        return "False";
    } else if (operator == '+') {
            return a + b;
        }
   
    else if (operator == '-') {
        return a - b;
    }

    else if (operator == '*') {
        return a * b;
    }

    else if (operator == '/') {
        return a / b;
    }

}

console.log (calcSum(5, 7,'-'));
console.log (calcSum(5, 7,'+'));
console.log (calcSum(5, 7,'/'));
console.log (calcSum(5, 7,'*'));
console.log (calcSum(5, '7','-'));
console.log (calcSum(5, 7,'ok'));