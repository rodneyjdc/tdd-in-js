const base = require('../index');

// add
test('add 1 + 2 to equal 3', () => {
    expect(base.add([1,2])).toBe(3);
})

test('add 0 + 2 to equal 2', () => {
    expect(base.add([0, 2])).toBe(2);
})

test('add 0 + 2 + 3 to equal 5', () => {
    expect(base.add([0, 2, 3])).toBe(5);
})

test('add 0 to equal 0', () => {
    expect(base.add([0])).toBe(0);
})

test('pass empty array', () => {
    expect(base.add([])).toBe(undefined);
})

test('add a string to return a string', () => {
    expect(base.add(['0'])).toBe('0');
})

test('add two strings to return a string', () => {
    expect(base.add(['0', '1'])).toBe('01');
})

test('add a string and a number to return a string', () => {
    expect(base.add(['1', 100])).toBe('1100');
})

// subtract

test('subtract 1 - 2 to equal -1', () => {
    expect(base.subtract([1, 2])).toBe(-1);
})

test('subtract 0 - 2 to equal -2', () => {
    expect(base.subtract([0, 2])).toBe(-2);
})

test('subtract 0 - 2 - 3 to equal -5', () => {
    expect(base.subtract([0, 2, 3])).toBe(-5);
})

test('subtract 0 to equal 0', () => {
    expect(base.subtract([0])).toBe(0);
})

test('pass empty array', () => {
    expect(base.subtract([])).toBe(undefined);
})

test('subtract a string to return a string', () => {
    expect(base.subtract(['0'])).toBe('0');
})

test('subtract \'0\' - \'1\' to equal a -1', () => {
    expect(base.subtract(['0', '1'])).toBe(-1);
})

test('subtract \'bill\' - \'parrot\' to return NaN', () => {
    expect(base.subtract(['bill', 'parrot'])).toBe(NaN);
})

test('subtract \'1\' - 100 to equal -99', () => {
    expect(base.subtract(['1', 100])).toBe(-99);
})

// divide

test('divide 1 / 1 to equal 1', () => {
    expect(base.divide([1, 1])).toBe(1);
})

test('divide 1 / 0 to equal Cannot divide by zero', () => {
    //expect(base.divide([1, 0])).toBe("Error");
    expect(base.divide([1, 0])).toBe("Cannot divide by zero");
})

test('divide 1 / "0" to equal Cannot divide by zero', () => {
    //expect(base.divide([1, 0])).toBe("Error");
    expect(base.divide([1, "0"])).toBe("Cannot divide by zero");
})

test('divide 1 / 0 / 1 to equal Cannot divide by zero', () => {
    //expect(base.divide([1, 0, 1])).toBe("Error");
    expect(base.divide([1, 0, 1])).toBe("Cannot divide by zero");
})

test('divide 0 / 1 to equal 0', () => {
    expect(base.divide([0, 1])).toBe(0);
})

test('divide "0" / 1 to equal 0', () => {
    expect(base.divide(["0", 1])).toBe(0);
})

test('divide 1 / "0" / 1 to equal Cannot divide by zero', () => {
    //expect(base.divide([1, "0", 1])).toBe("Error");
    expect(base.divide([1, 0, 1])).toBe("Cannot divide by zero");
})

test('divide 1 / "bill" / 1 to equal Cannot divide these', () => {
    expect(base.divide([1, "bill", 1])).toBe("Cannot divide these");
})

test('divide "bill" / 1 to equal Cannot divide these', () => {
    expect(base.divide(["bill", 1])).toBe("Cannot divide these");
})

test('pass in empty array to divide to equal undefined', () => {
    expect(base.divide([])).toBe(undefined);
})

// multiple

test('multiply 1 * 1 to equal 1', () => {
    expect(base.multiple([1, 1])).toBe(1);
})


