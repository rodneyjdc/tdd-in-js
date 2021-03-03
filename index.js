function add (input) {
       return operation(input, function (result, input) {
            return result + input;
        })
    }

function operation(input, operator) {
    var result = input.shift();
    for (i = 0; i < input.length; i++) {
        result = operator(result, input[i]);
    }

    return result;
}


module.exports = { add, operation}