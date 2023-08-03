function concatTwoArray(array1, array2){
   let concatResult = array1.concat(array2);
   return concatResult;
}
let array1 = [1, 3, 4, 5, 7, 8];
let array2 = [3, 5, 5, 7, 55, 64];
let finalResult = concatTwoArray(array1, array2);
console.log(finalResult);