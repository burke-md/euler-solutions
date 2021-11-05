const reverseString = (str) => {
  let reversedStr = "";
  for (let charIdx = str.length - 1; charIdx >= 0; charIdx--) {
    reversedStr += str[charIdx];
  }
  return reversedStr;
};

const largestPal = () => {
  var palindromes = [];
  for (i = 999; i > 99; i--) {
    for (j = 999; j > 99; j--) {
      strProduct = (i * j).toString();
      //Check if palindromic, add to list
      if (strProduct == reverseString(strProduct)) {
        palindromes.push(i * j);
      }
    }
  }
  //Order list big -> small
  palindromes.sort((a, b) => {
    return b - a;
  });
  const largestVal = palindromes[0];

  return largestVal;
};
console.log(largestPal());
