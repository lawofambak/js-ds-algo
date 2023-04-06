const PARTIALLY_SORTED_ARRAY = [40, 25, 55, 17, 19, 21, 99];

function insertionSort(_array) {
    let length = _array.length;
    
    for (let i = 1; i < length; i++) {
        let key = _array[i];
        let indexToCompare = i - 1;

        while (indexToCompare >= 0 && _array[indexToCompare] > key) {
            _array[indexToCompare + 1] = _array[indexToCompare];
            indexToCompare--;
        }

        _array[indexToCompare + 1] = key;
    }
    
    return _array;
}

insertionSort(PARTIALLY_SORTED_ARRAY);

// Time complexity of O(n^2)
// Space complexity of O(1)