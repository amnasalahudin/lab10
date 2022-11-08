const task3 = require("./task3");

test("Testing power function", () => 
{
    expect(task3.power(3,2)).toBe(9);
});

test("Testing round function", () => 
{
    expect(task3.round(2.67)).toBe(3);
});

test("Testing ceiling function" , () => 
{
    expect(task3.ceiling(4.5)).toBe(5);
});