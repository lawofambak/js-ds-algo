export default function bubbleSort(_array) {
  let length = _array.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
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
