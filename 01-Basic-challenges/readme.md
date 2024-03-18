## Challenge - 3 - Calcualtor

### Instructions

Write a function called `calculator` that takes in 2 numbers and an operator and returns the result of the calculation.

### Examples

```JS
calculator(1, 2, '+') // 3
calculator(10, 5, '-') // 5
calculator(2, 2, '*') // 4
calculator(10, 5, '/') // 2
```

### Constraints

- The function must return a number
- The function must throw or log an error if an invalid operator is given

### Challenge - 4 - Count Occurance

## Instructions

Write a function called `countOccurrences()` that takes in a string and a character and returns the number of occurrences of that character in the string.

### Examples

```js
countOccurrences('hello', 'l'); // 2
countOccurrences('hello', 'z'); // 0
```

### Constraints

- Lowercase and uppercase characters are considered different characters. If you want, you can make the function case insensitive

### Challenge - 5 - Find Max Number

## Instructions

Write a function called `findMaxNumber` that takes in an array of numbers and returns the largest number in the array.

### Examples

```js
findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 10
findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]); // 10
findMaxNumber([1, 2, 3, 4, 5, 100, 9, 8, 7, 6]); // 100
```

# Challenge:-06- Title Case

## Instructions

Write a function called `titleCase` that takes in a string and returns the string with the first letter of each word capitalized.

### Examples

```js
titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
titleCase('sHoRt AnD sToUt'); // Short And Stout
titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'); // Here Is My Handle Here Is My Spout
```

### Constraints

- You may assume that each word consists of only letters and spaces

# Challenge: -07- Reverse String

## Instructions

Write a function called `reverseString` that takes in a string and returns the reverse of that string. In this section, we are really focusing on loops without using any built-in methods, so try that first. If you get stuck, you can always use the built-in methods to solve the problem.

### Examples

```JS
reverseString('hello') // 'olleh'
reverseString('world') // 'dlrow'
reverseString('') // ''
```

### Constraints

- The input string will only contain lowercase letters and spaces

# Challenge: 08- Palindrome

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. An example of a palindrome is "madam".

## Instructions

Write a function called `isPalindrome` that takes in a string and returns `true` if the string is a palindrome and `false` if it is not.

### Examples

```JS
isPalindrome('madam') // true
isPalindrome('racecar') // true
isPalindrome('hello') // false
isPalindrome('') // true
```

### Constraints

- The input string will only contain lowercase letters and spaces
- The function should ignore spaces when checking if the string is a palindrome

# Challenge: Count Vowels

## Instructions

Write a function called `countVowels` that takes in a string and returns the number of vowels in the string.

### Function Signature

```js
/**
 * Returns the number of vowels in a string.
 * @param {string} str - The string to search.
 * @returns {number} - The number of vowels in the string.
 */
function countVowels(str: string): number;
```

### Examples

```js
countVowels('hello'); // 2
countVowels('why'); // 0
countVowels('mississippi'); // 4
```

### Constraints

- It shouldn't matter if the input string is uppercase or lowercase


# Challenge: Remove Duplicates

## Instructions

Write a function called `removeDuplicates` that takes in an array and returns a new array with duplicates removed.

### Function Signature

```js
/**
 * Returns a new array with duplicates removed.
 * @param {any[]} arr - The array to remove duplicates from.
 * @returns {any[]} - The new array with duplicates removed.
 */
function removeDuplicates(arr: any[]): any[];
```

### Examples

```js
removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]); // [1]
removeDuplicates([1, 2, 3, 4, 5, true, 1, 'hello' 2, 3, 'hello', true]); // [1, 2, 3, 4, 5, true, 'hello']
```

### Constraints

- The array can contain any data type
