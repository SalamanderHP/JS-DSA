const { swap } = require("../common/swap");

function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    // find min
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    swap(arr, min, i);
  }

  return arr;
}

function main() {
  let arr = [2, 5, 3, 1, 8, 7, 20, 6, 8, 16, 19, 100];
  arr = selectionSort(arr);
  console.log(arr);
}

main();
