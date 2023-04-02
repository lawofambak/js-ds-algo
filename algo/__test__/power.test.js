import power from "../power";

describe("Power of", () => {
  it("Should correctly calculate if a number is a power of a base number", () => {
    expect(power(0, 1)).toEqual(false);

    expect(power(1, 1)).toEqual(true);

    expect(power(1, 3)).toEqual(true);

    expect(power(64, 4)).toEqual(true);

    expect(power(100, 22)).toEqual(false);
  });
});
