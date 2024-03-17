// Method 1 : using for loop
/*
const findMaxNumber = (arr) => {
  let maxNum = arr[0]
  for (let i = 1; i < arr.length; i++){
    if (arr[i] > maxNum) {
      maxNum = arr[i]
    }
  }
  return maxNum
}
*/

// Method 2 using sort

const findMaxNumber = (arr) => arr.sort((a, b) => b - a)[0];

// using reduce

const findMaxNumber3 = (arr) => arr.reduce((a, c) => c > a ? c : a, 0);

// console.log(findMaxNumber([1, 2, 3, 4, 5, 6, 70, 8, 9, 10]));
console.log(findMaxNumber3([1, 20, 3, 4, 5, 6, 70, 8, 9, 10]));


// using math.max

const findMaxNumber4 = (arr) => Math.max(...arr)
console.log(findMaxNumber4([100, 20, 3, 4, 5, 6, 70, 8, 9, 10]));