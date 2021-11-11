/*The sum of the first ten natural numbers squared is 385
  The square of the first ten natural numbers summed is 3025
  The difference is 2640

  What is the difference if we are to use the first 100 natural
  numbers in the above example?
 */

const sumSqrDiff = (target) => {
  let tracker = 1;
  let sumOfSqrs = 0;
  let sqrOfSums = 0;

  while (tracker <= target) {
    sqrOfSums += tracker;
    sumOfSqrs += tracker * tracker;
    tracker++;
  }

  //Square the now total sum of all natural numbers
  sqrOfSums = sqrOfSums * sqrOfSums;
  return sqrOfSums - sumOfSqrs;
};

console.log(sumSqrDiff(100));
