

function add (input) {
       return operation(input, function (result, input) {
            return result + input;
        })
    }

function subtract (input) {
    try {
        return operation(input, function (result, input) {
            return result - input;
        });
    } catch (error) {
        return "Cannot subtract two strings"
    }
}

function divide (input) {
    return operation(input, function (result, input) {
        if (input == 0 || result === "Cannot divide by zero") {
            return "Cannot divide by zero";
        } else if (!Number.isFinite(result / input)) {
            return "Cannot divide these";
        } else if (result === "Error") {
            return "Error";
        }

        return result / input;
    });
}

function multiple (input) {
    return input;
}

function exponential (input) {}



function operation(input, operator) {
    try {
        var result = input.shift();
        for (i = 0; i < input.length; i++) {
            result = operator(result, input[i]);
        }
        return result;
    } catch (error) {
        return "Cannot perform operation"
    }
    
}


module.exports = { add, subtract, divide, multiple, operation}