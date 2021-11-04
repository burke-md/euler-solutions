const palindromeCheck = (number) => {
  numStr = number.toString();

  for (let i = 0; i < numStr.length / 2; i++) {
    const rightIndex = numStr.length - (i + 1);
    const leftIndex = i;
    if (numStr.charAt(leftIndex) !== numStr.charAt(rightIndex)) return false;
  }

  return true;
};

const largestPal = () => {
  let x = 999;
  let y = 999;

  while (x > 0 && y > 0) {
    let product = x * y;
    if (palindromeCheck(product)) {
      console.log("x", x, "y", y, product);
      return;
    }
    /* If product is not palindrome, decrement x
    UNLESS x === 1. Decrememnt y and reset x */
    if (x !== 1) x--;
    if (x === 1) {
      x = 999;
      y--;
    }
  }
};
largestPal();
