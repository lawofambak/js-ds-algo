const NUM_ARRAY = [2, 7, 4, 11, 10, 25, 5];

function linearSearch(_array, _target) {
    for (let i = 0; i < _array.length; i++) {
        if (_array[i] === _target) {
            return i;
        }
    }
    return -1;
}

linearSearch(NUM_ARRAY, 5);

// Time complexity of O(n)
// Space complexity of O(1)