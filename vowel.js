function countVowel(string){
    let count = 0;
    for(let i = 0; i< string.length; i++){
        let singleString = string[i];
        if(singleString === 'a' || singleString=== 'A' || singleString=== 'e'|| singleString==='E' || singleString=== 'i' || singleString==="I" || singleString === 'o' || singleString==="O" || singleString==='u' || singleString ==="U"){
           count +=1 ;
        }
    }
    return count;
}
let vowel = 'Amar Sonar Bangla Ami Tomai valobashi';
let result = countVowel(vowel);
console.log(result);

// const findVowels = str => {
//     const matched = str.match(/[aeiou]/gi)
//     console.log(matched ? matched.length : 0) 
//     }
//     findVowels('vowels')
    