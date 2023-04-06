import bubbleSort from "../bubbleSort";

describe("Bubble sort", () => {
  it("Should correctly sort given array", () => {
    const num_array = [2, 7, 4, 11, 10, 25, 5];

    expect(bubbleSort(num_array)).toEqual([2, 4, 5, 7, 10, 11, 25]);

    const another_num_array = [10, 3, 55, 20, 21, 99];

    expect(bubbleSort(another_num_array)).toEqual([3, 10, 20, 21, 55, 99]);
  });
});
