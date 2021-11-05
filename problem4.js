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
      if (strProduct == reverseString(strProduct)) {
        palindromes.push(i * j);
      }
    }
  }
  palindromes.sort((a, b) => {
    return b - a;
  });

  console.log(palindromes[0]);
};
largestPal();
