const NUM_ARRAY = [2, 7, 4, 11, 10, 25, 5];

export default function bubbleSort(_array) {
  let length = _array.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (_array[j] > _array[j + 1]) {
        let temp = _array[j];
        _array[j] = _array[j + 1];
        _array[j + 1] = temp;
      }
    }
  }

  return _array;
}

// Time complexity of O(n^2)
// Space complexity of O(1)
