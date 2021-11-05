//Smallest positive number that can be divided by each number upto than 20


//Prime numbers -> find that 2 largest primes, multiply them together and start there?

console.log(17*19)
//323

//Iterate down from 20, multiple by value if not divisible?

let currentMin = 323; 
for(let val = 20; val > 0; val --){
  if (currentMin % val !== 0){
    currentMin *= val
    console.log(`${val} does not divide evenly`)
  }
}
console.log(currentMin);