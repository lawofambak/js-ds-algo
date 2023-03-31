function factorial(_num) {
  let result = 1;

  for (let i = 2; i <= _num; i++) {
    result *= i;
  }

  return result;
}

// Time complexity of O(n)
// Space complexity of O(1)

function factorialWithRecursion(_num) {
  if (_num === 0) {
    return 1;
  } else {
    return _num * factorialWithRecursion(_num - 1);
  }
}

// Time complexity of O(n)
// Space complexity of O(n)

export { factorial, factorialWithRecursion };
