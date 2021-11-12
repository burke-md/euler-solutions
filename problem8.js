/*The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
*/

const num = `7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450`;

const listProduct = (list) => {
  let total = list[0];
  for (let i = 1; i < list.length; i++) {
    total = total * list[i];
  }
  return total;
};

const greatestAdjacentProduct = (numberOfDigits, numberToSearch) => {
  let maxProduct = 0;
  let largestSet = [];
  //Step1: Split nuber into array w/ single digit elements.
  const numArr = numberToSearch.split("");
  const midIdx = Math.floor(numberToSearch.length);
  let midIdxReached = false;
  let leftIdx = numberOfDigits - 1;
  let rightIdx = numberToSearch.length - 1 - numberOfDigits;

  while (!midIdxReached) {
    const leftWindow = {
      list: [],
      listProduct: 0,
    }
    const rightWindow = {
      list: [],
      listProduct: 0,
    };
//Write helper function to resolve this
    leftWindow.list = []
    rightWindow.list = []

    leftWindow.listProduct = listProduct(leftWindow.list);
    rightWindow.listProduct = listProduct(rightWindow.list);


    //Compare left/right set w/ current max
    if(leftWindow.listProduct > maxProduct || rightWindow.listProduct > maxProduct) {
      //Update if needed
      maxProduct = Math.max(leftWindow.listProduct, rightWindow.listProduct);
      //Update product

    }

    //Increment/Decrement pointers
    leftIdx++;
    rightIdx--;
    //Check if mid point has been reached. End search if true.
    if (leftIdx === midIdx || rightIdx === midIdx) {
      midIdxReached = true;
    }
  }

  return product;
};

console.log(greatestAdjacentProduct(13, num));
