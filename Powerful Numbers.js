
/*
Given a positive number x:

p = (p1, p2, …)
// Set of *prime* factors of x
If the square of every item in p is also a factor of x, then x is said to be a powerful number.

Create a function that takes a number and returns true if it's powerful, false if it's not.

Examples
isPowerful(36) ➞ true
// p = (2, 3) (prime factors of 36)
// 2^2 = 4 (factor of 36)
// 3^2 = 9 (factor of 36)

isPowerful(27) ➞ true

isPowerful(674) ➞ false

*/


function isPowerful(num) {

    let num1 = num;
    let factors = [];
  
    for (let i = 2; i <= num1; i++) {
      while ((num1 % i) === 0) {
        factors.push(i);
        num1 /= i;
      }
    }
  
    return Array.from(new Set(factors)).every(x => num % (x * x) === 0);
  
  }
  