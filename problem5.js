//Smallest positive number that can be divided by each number upto than 20

const findMin = (target) => {
  let count = 1;
  let min = 1;
  while (count < target) {
    //brute force increment to 20
    //Optimize in steps pattern after
    if (target % count !== 0) min *= count;

    count++;
  }
  return min;
};

console.log(findMin(20));
