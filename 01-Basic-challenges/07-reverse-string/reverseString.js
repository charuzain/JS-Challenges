const reverseString = (str) => {
  let reverseStr = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]
  }
  return reverseStr;
}

const reverseString1 = (str) => {
  return str.split("").reverse().join("")
}



// console.log(reverseString('hello world'));
// console.log(reverseString('hello'));
// console.log(reverseString('world'));
// console.log(reverseString(" "));

console.log(reverseString1('hello world'));
console.log(reverseString1('hello'));
console.log(reverseString1('world'));
console.log(reverseString1(' '));