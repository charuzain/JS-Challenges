const calculator = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result= num1 + num2;
      break;
    case '-':
      result= num1 - num2;
      break;
    case '*':
      result= num1 * num2;
      break;
    case '/':
      result= num1 / num2;
      break;

    default:
      throw new Error("Invalid number or operator")
  }
  return result;
}

console.log(calculator(1, 2, '+')) 
console.log(calculator(10, 5, '-')) 
console.log(calculator(2, 2, '*') )
console.log(calculator(10, 5, '/')) 