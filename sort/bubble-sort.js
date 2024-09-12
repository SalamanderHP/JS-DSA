const { swap } = require('../common/swap');

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
}

function main() {
  let arr = [64, 34, 25, 12, 22, 11, 90];
  arr = bubbleSort(arr);
  console.log(arr);
}

main();
