import prime from "../prime";

describe("Prime number", () => {
  it("Should correctly determine if a number is prime or not", () => {
    expect(prime(2)).toEqual(true);
    expect(prime(5)).toEqual(true);
    expect(prime(61)).toEqual(true);
    expect(prime(193)).toEqual(true);
    expect(prime(1103)).toEqual(true);

    expect(prime(4)).toEqual(false);
    expect(prime(6)).toEqual(false);
    expect(prime(60)).toEqual(false);
    expect(prime(190)).toEqual(false);
    expect(prime(1100)).toEqual(false);
  });
});
