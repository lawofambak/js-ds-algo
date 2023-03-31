import binarySearch from "../binarySearch";

describe("Binary Search", () => {
  it("Should return index of element if contained in array", () => {
    const num_array = [2, 5, 10, 17, 40, 91, 99];

    expect(binarySearch(num_array, 2)).toEqual(0);
    expect(binarySearch(num_array, 17)).toEqual(3);
    expect(binarySearch(num_array, 99)).toEqual(6);
  });

  it("Should return -1 if element is not contained in array", () => {
    const num_array = [2, 5, 10, 17, 40, 91, 99];

    expect(binarySearch(num_array, 1)).toEqual(-1);
  });
});
