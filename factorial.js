function factorial(num){
    let sum = 1;
    for(let i = 1; i<= num; i++){
        sum = sum * i;

    }
    return sum;

}

let number = 5;
let result = factorial(number);
console.log(result);