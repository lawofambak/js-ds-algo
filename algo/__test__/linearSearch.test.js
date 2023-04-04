import linearSearch from "../linearSearch";

describe("Linear Search", () => {
  it("Should return index of element if contained in array", () => {
    const num_array = [2, 7, 4, 11, 10, 25, 5];

    expect(linearSearch(num_array, 2)).toEqual(0);
    expect(linearSearch(num_array, 11)).toEqual(3);
    expect(linearSearch(num_array, 5)).toEqual(6);
  });

  it("Should return -1 if element is not contained in array", () => {
    const num_array = [2, 7, 4, 11, 10, 25, 5];

    expect(linearSearch(num_array, 20)).toEqual(-1);
  });
});
