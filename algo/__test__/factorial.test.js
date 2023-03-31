import { factorial, factorialWithRecursion } from "../factorial";

describe("Factorial", () => {
  it("Should return 1 for the factorial of 0", () => {
    expect(factorial(0)).toEqual(1);

    expect(factorialWithRecursion(0)).toEqual(1);
  });

  it("Should correctly return factorial of a given number", () => {
    expect(factorial(1)).toEqual(1);
    expect(factorial(5)).toEqual(120);
    expect(factorial(7)).toEqual(5040);

    expect(factorialWithRecursion(1)).toEqual(1);
    expect(factorialWithRecursion(5)).toEqual(120);
    expect(factorialWithRecursion(7)).toEqual(5040);
  });
});
