import fibonacciSequence from "../fibonacciSequence";

describe("Fibonacci sequence", () => {
  it("Should return null if number of given elements is 0", () => {
    expect(fibonacciSequence(0)).toBeNull();
  });

  it("Should correctly return an array of given elements in the Fibonacci sequence", () => {
    expect(fibonacciSequence(1)).toEqual([0]);

    expect(fibonacciSequence(2)).toEqual([0, 1]);

    expect(fibonacciSequence(3)).toEqual([0, 1, 1]);
    expect(fibonacciSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect(fibonacciSequence(15)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,
    ]);
  });
});
