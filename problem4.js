const palindromeCheck = (number) => {
  numStr = number.toString();

  for (let i = 0; i < numStr.length / 2; i++) {
    const rightIndex = numStr.length - (i + 1);
    const leftIndex = i;
    if(numStr.charAt(leftIndex) !== numStr.charAt(rightIndex))return false
  }

  return true;
};

let x = 999;
let y = 999;

console.log(palindromeCheck(9991));
