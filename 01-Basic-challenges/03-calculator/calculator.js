const calculator = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
      break;
    case '-':
      return num1 - num2;
      break;
    case '*':
      return num1 * num2;
      break;
    case '/':
      return num1 / num2;
      break;

    default:
      return "Enter a Valid number or operator"
      break;
  }
}

console.log(calculator(1, 2, '+')) 
console.log(calculator(10, 5, '-')) 
console.log(calculator(2, 2, '*') )
console.log(calculator(10, 5, '/')) 