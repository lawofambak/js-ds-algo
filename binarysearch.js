const SORTED_NUM_ARRAY = [2, 5, 10, 17, 40, 91, 99];

function binarySearch(_array, _target) {
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

binarySearch(SORTED_NUM_ARRAY, 17);

// Time complexity of O(logn)
// Space complexity of O(1)