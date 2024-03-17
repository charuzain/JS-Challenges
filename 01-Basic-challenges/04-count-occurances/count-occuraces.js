// Method 1

/*
const countOccurrences = (str, char) => {
  let count = 0;
  for (let c of str) {
    if (c === char) {
      count++;
    }
  }
  return count;
  
}
*/

// Method 2 Filter & Split

// const countOccurrences = (str, char) =>
//   str.split('').filter((c) => c === char).length;



// Method 3 only split

const countOccurrences = (str, char) => str.split(char).length -1;
  
  
// console.log(countOccurrences('hellllo', 'l'));
console.log(countOccurrences('helllo', 'l'));
