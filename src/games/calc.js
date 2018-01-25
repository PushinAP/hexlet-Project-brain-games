import { cons } from 'hexlet-pairs';
import engine from '..';

const generateRandomOperations = () => {
  const arr = ['-', '+', '*'];

  const random = Math.floor(Math.random() * arr.length);

  return arr[random];
};

const generateRandomNumber = () => 1 + Math.floor(Math.random() * 10);

const calculation = (operand1, operand2, operation) => {
  if (operation === '-') {
    return operand1 - operand2;
  } else if (operation === '+') {
    return operand1 + operand2;
  }
  return operand1 * operand2;
};
export default () => {
  const specification = 'Answer "yes" if number even otherwise answer "no".';
  const logicGame = () => {
    const number1 = generateRandomNumber();

    const number2 = generateRandomNumber();

    const operation = generateRandomOperations();

    const expression = `${number1}${operation}${number2}`;

    return cons(expression, String(calculation(number1, number2, operation)));
  };

  return engine(specification, logicGame);
};
