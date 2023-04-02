// @param n represents the positive integer to determine if the number is a power of "b" or not
// @param b represents the base power number (power of "b")
export default function power(n, b) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % b !== 0) {
      return false;
    }

    n /= b;
  }

  return true;
}

// Time complexity of O(logn)
// Space complexity of O(1)
