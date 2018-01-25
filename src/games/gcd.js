import { cons } from 'hexlet-pairs';
import engineGame from '..';

const generateRandomNumber = () => 1 + Math.floor(Math.random() * 100);
const findGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGcd(num2, num1 % num2);
};
export default () => {
  const specification = 'Find the greatest common divisor of given numbers.';
  const logicGame = () => {
    const number1 = generateRandomNumber();
    const number2 = generateRandomNumber();
    const numbers = `${number1} ${number2}`;
    return cons(numbers, String(findGcd(number1, number2)));
  };
  return engineGame(specification, logicGame);
};
