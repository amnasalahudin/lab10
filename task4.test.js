const task4 = require("./task4");

test("Testing Reverse String function", () => 
{
    expect(task4.reverse("hello")).toBe("olleh");
});