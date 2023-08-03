function checkNums(num1, num2){
    if(num2 > num1){
        return true;
    }
    else if(num1 === num2){
        return -1;
    }
    return false;

}

let num1 = 34;
let num2 = 33;
let result = checkNums(num1, num2);
console.log(result);