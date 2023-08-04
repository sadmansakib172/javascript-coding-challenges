function isFactorial(num){
    let number = 1;
    let sum = 1;
    while(num >=number){
        sum = sum * num;
        num--;
    }
    return sum;
}

let result = isFactorial(5);
console.log(result);