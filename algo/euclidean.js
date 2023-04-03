// @return Returns the GCD (greatest common divisor) of two numbers
export default function euclidean(_num1, _num2) {
  let r;

  while (_num1 % _num2 > 0) {
    r = _num1 % _num2;
    _num1 = _num2;
    _num2 = r;
  }

  return _num2;
}

// Time complexity of O(logn)
// Space complexity of O(1)
