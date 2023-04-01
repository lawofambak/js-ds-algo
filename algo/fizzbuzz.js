export default function fizzBuzz(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
      // console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
      // console.log("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
      // console.log("Buzz");
    } else {
      result.push(i);
      // console.log(i);
    }
  }

  return result;
}

// Time complexity of O(n)
// Space complexity of O(1)
