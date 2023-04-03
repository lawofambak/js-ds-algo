import euclidean from "../euclidean";

describe("Euclidean algorithm", () => {
  it("Should correctly find the GCD of two given numbers", () => {
    expect(euclidean(18, 12)).toEqual(6);
    expect(euclidean(20, 15)).toEqual(5);
    expect(euclidean(100, 10)).toEqual(10);
    expect(euclidean(2322, 654)).toEqual(6);
  });
});
