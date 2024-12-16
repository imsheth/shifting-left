const isEven = require("./even");

describe("isEven", () => {
  it("returns true if number is even", () => {
    expect(isEven(2)).toBe(true);
  });

  it("returns false if number is odd", () => {
    expect(isEven(3)).toBe(false);
  });

  it("throws an error if number is negative", () => {
    expect(() => isEven(-1)).toThrow();
  });

  it("throws an error if number is not a number", () => {
    expect(() => isEven("1")).toThrow();
  });
});
