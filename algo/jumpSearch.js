export default function jumpSearch(_array, _target) {
  let length = _array.length;
  let start = 0;
  let jump = Math.floor(Math.sqrt(length));
  let end = jump;

  while (_array[end] <= _target && end < length) {
    start = jump;
    end += jump;
    if (end > length - 1) {
      end = length;
    }
  }

  for (let i = start; i < end; i++) {
    if (_array[i] === _target) {
      return i;
    }
  }
  return -1;
}

// Time complexity of O(sqrt(n))
// Space complexity of  O(1)
