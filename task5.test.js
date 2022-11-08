const {incNumber} = require("./task5");

test("Testing contains number", () => 
{
    expect(incNumber(3)).toBe(true);
});

test("Testing contains number2", () => 
{
    expect(incNumber(36)).toBe(false);
});
