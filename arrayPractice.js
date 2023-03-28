// Function to reverse an array
// Time complexity: O(n)
const array_1 = [1, 2, 3, 4, 5];

function reverseArray(_array) {
  let start = 0;
  let end = _array.length - 1;

  while (start < end) {
    let temp = _array[start];
    _array[start] = _array[end];
    _array[end] = temp;
    start++;
    end--;
  }

  return _array;
}

reverseArray(array_1); // [5, 4, 3, 2, 1]
