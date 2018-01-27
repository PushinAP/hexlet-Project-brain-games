
export const generateRandomOperations = () => {
  const arr = ['-', '+', '*'];

  const random = Math.floor(Math.random() * arr.length);

  return arr[random];
};


export const generateRandomNumber = (min, max) => min + Math.floor(Math.random() * max);


export const calculation = (operand1, operand2, operation) => {
  if (operation === '-') {
    return operand1 - operand2;
  } else if (operation === '+') {
    return operand1 + operand2;
  }
  return operand1 * operand2;
};


export const findGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGcd(num2, num1 % num2);
};

export const balance = (number) => {
  const arrNumber = String(number).split('');
  const minNumber = Math.min(...arrNumber);
  const maxNumber = Math.max(...arrNumber);

  if (maxNumber - minNumber <= 1) {
    return arrNumber.sort().join('');
  }
  const indexMin = arrNumber.indexOf(String(minNumber));
  const indexMax = arrNumber.indexOf(String(maxNumber));

  arrNumber[indexMin] = minNumber + 1;
  arrNumber[indexMax] = maxNumber - 1;

  return balance(Number(arrNumber.join('')));
};
