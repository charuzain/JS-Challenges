const isPalindrome = (str) => {
  const reversedStr = str.replaceAll(" ", "").split("").reverse().join("")
  return str.replaceAll(' ', '') === reversedStr ;
  
};
console.log(isPalindrome('race ace'));
console.log(isPalindrome('madam'));
console.log(isPalindrome('madam')) // true
console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('hello') )// false
console.log(isPalindrome('') )// true
