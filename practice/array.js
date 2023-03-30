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

// Function to get minimun and maximum values from an array
// Time complexity: O(n)
const array_2 = [1, 10, 7, 5, 11, 0];

function getMinMax(_array) {
  if (_array.length === 0) {
    return;
  } else if (_array.length === 1) {
    return _array[0];
  } else {
    let min = _array[0];
    let max = _array[1];

    for (let i = 1; i < _array.length; i++) {
      if (_array[i] < min) {
        min = _array[i];
      } else if (_array[i] > max) {
        max = _array[i];
      }
    }

    return { min, max };
  }
}

getMinMax(array_2);
