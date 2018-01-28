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

export const Progression = (allNumber) => {
  const step = generateRandomNumber(1, 7);

  const numberStart = generateRandomNumber(1, 150);

  const iter = (arr, acc) => {
    if (acc === allNumber + 1) {
      return arr;
    }
    arr.push((acc * step) + numberStart);

    return iter(arr, acc + 1);
  };

  return iter([], 1);
};

export const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
