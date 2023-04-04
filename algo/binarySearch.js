export default function binarySearch(_array, _target) {
  let start = 0;
  let end = _array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (_array[mid] === _target) {
      return mid;
    } else if (_array[mid] < _target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

// Time complexity of O(logn)
// Space complexity of O(1)
