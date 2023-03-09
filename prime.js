function prime(_num) {
  if (_num < 2) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(_num); i++) {
    if (_num % i === 0) {
      return false;
    }
  }

  return true;
};

prime(10);

// Time complexity of O(sqrt(n))
// Space complexity of O(1)