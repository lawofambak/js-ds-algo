import jumpSearch from "../jumpSearch";

describe("Jump Search", () => {
  it("Should return index of element if contained in array", () => {
    const num_array = [1, 7, 11, 17, 91, 105];

    expect(jumpSearch(num_array, 1)).toEqual(0);
    expect(jumpSearch(num_array, 17)).toEqual(3);
    expect(jumpSearch(num_array, 105)).toEqual(5);
  });

  it("Should return -1 if element is not contained in array", () => {
    const num_array = [1, 7, 11, 17, 91, 105];

    expect(jumpSearch(num_array, 2)).toEqual(-1);
  });
});
