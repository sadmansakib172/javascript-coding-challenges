function takeString(string1, string2){
  if (string1.length === string2.length){
    return true;
  }
  return false;
}

let string1 = "Sakib";
let string2 = "sadat";
let result = takeString(string1, string2);
console.log(result);