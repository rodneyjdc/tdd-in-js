const base = require('../index');

var calc;

beforeEach(() => {
    calc = new base.Calculator();
});

test('add 1 + 2 to equal 3', () => {
    expect(calc.add([1,2])).toBe(3);
})