function fibonacci(number){
    let numArray = [5, 6];
    for (let i = 7; i <= number; i++){
        numArray.push(numArray[i-7]+numArray[i-6]);
    }
    return numArray;
}

let result = fibonacci(18);
console.log(result);