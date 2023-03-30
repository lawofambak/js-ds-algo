export default function linearSearch(_array, _target) {
  for (let i = 0; i < _array.length; i++) {
    if (_array[i] === _target) {
      return i;
    }
  }

  return -1;
}

// Time complexity of O(n)
// Space complexity of O(1)
