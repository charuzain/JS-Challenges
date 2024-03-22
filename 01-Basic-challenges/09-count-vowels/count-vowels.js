const countVowels = (str) => {
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      count++;
    }
  }
  return count;
};

console.log(countVowels('JKKello'));
console.log(countVowels('why')); 
console.log(countVowels('mississippi')); 
