//Smallest positive number that can be divided by each number upto than 20

const findMin = (target) => {
  let count = 0;
  let num = 1;
  while (count < target) {
    for (let i = 1; i <= target; i++) {
      num % i === 0 ? count++ : (count = 0);
      break;
    }
    if (count === target) {
      console.log(num);
      break;
    } else {
      num++;
    }
  }
  return num;
};

console.log(findMin(20));
