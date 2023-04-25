// @param n Represents the number of elements of the Fibonacci sequence to display
export default function fibonacciSequence(n) {
  let fibArray = [0, 1];

  if (n === 0) {
    return null;
  } else if (n === 1) {
    return [0];
  } else {
    for (let i = 2; i < n; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    return fibArray;
  }
}

// Time complexity of O(n)
// Space complexity of O(n)
