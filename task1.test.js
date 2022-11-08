const task1 = require("./task1");

test("Testing sum", () => {
    expect(task1.sum(1,2)).toBe(3);
});


test("Testing subtraction", () => {
    expect(task1.subtract(3,1)).toBe(2);
});


test("Testing multiplication", ()=> {
    expect(task1.mul(2,7)).toBe(14);
});


test("Testing division", () => {
    expect(task1.div(8,2)).toBe(4);
});

test("Testing division", () => {
    expect(task1.div(1,0)).toBe("invalid");
});
