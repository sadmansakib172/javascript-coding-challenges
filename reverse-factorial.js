function afterFactorial(number){
    let sum = 1;
   for(let i = number; i >= 1; i--){
      sum = sum * i;
   }
   return sum;
}
let factorialResult = afterFactorial(5);
console.log(factorialResult);