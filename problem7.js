/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13.
We can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

const findPrime = (max) => {
  let primes = [2];
  let i = 3;
  let j = 2;
  while (primes.length < max) {
    while (i % j !== 0) {
      j++;
      //Have looped w/o being able to divide -> found a prime number
      if (j === i) {
        primes.push(i);
        break;
      }
    }
    //Increment i, reset j.
    i++;
    j = 2;
  }
  return primes[max - 1];
};

console.log(findPrime(10001));
