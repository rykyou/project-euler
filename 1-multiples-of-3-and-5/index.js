// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function findSum() {
  let sum = 0;
  for (i = 3; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}

// function isDivisibleByThreeOrFive(num) {
//   if (num % 3 === 0 || num % 5 === 0) {
//     return true
//   }
// }
//
// function sumOfMultiples() {
//   let sum = 0;
//   for (i = 3; i < 1000; i++) {
//     if (isDivisibleByThreeOrFive(i)) {
//       sum += i
//     }
//   }
//   return sum
// }
