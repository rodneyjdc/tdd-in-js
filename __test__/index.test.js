const base = require('../index');

test('add 1 + 2 to equal 3', () => {
    expect(base.add([1,2])).toBe(3);
})