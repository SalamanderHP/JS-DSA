const { bubbleSort } = require('../sort/bubble-sort');
const { insertionSort } = require('../sort/insertion-sort');

describe("bubbleSort", function () {
  it("should sort with bubble sort", function () {
    let data = [64, 34, 25, 12, 22, 11, 90];
    let result = bubbleSort(data);
    expect(result).toStrictEqual([11, 12, 22, 25, 34, 64, 90]);
  });
});

describe("insertionSort", function () {
  it("should sort with insertion sort", function () {
    let data = [12, 11, 13, 5, 6, 4, 8];
    let result = insertionSort(data);
    expect(result).toStrictEqual([4, 5, 6, 8, 11, 12, 13]);
  });
});
