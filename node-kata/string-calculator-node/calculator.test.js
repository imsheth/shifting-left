const Calculator = require("./calculator");

describe("Calculator", () => {
  test("adds '' to 2", () => {
    expect(Calculator.Add("")).toEqual(0);
  });

  test("adds '42' to 42", () => {
    expect(Calculator.Add("42")).toEqual(42);
  });

  test("adds '1,2' to 3", () => {
    expect(Calculator.Add("1,2")).toEqual(3);
  });

  test("adds '1,2,3,4,x' to 10", () => {
    expect(Calculator.Add("1,2,3,4,x")).toEqual(10);
  });

  test("adds '1\n2' to 3", () => {
    expect(Calculator.Add("1\n2")).toEqual(3);
  });

  test("adds '1\n2\n3\n4\n5' to 15", () => {
    expect(Calculator.Add("1\n2\n3\n4\n5")).toEqual(15);
  });

  test("adds '1\n2,3\n4,5' to 15", () => {
    expect(Calculator.Add("1\n2,3\n4,5")).toEqual(15);
  });
});
