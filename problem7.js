/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13.
We can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

const findPrime = (max) => {
  let primes = [2];

  while (primes.length > max) {

  }
  return primes[max - 1];
};

console.log(findPrime(1))
