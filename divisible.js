function isDivisible(integer){
    if(integer % 2 === 0){
        return true;
    }
    return false;
}
let result = isDivisible(10);
console.log(result);