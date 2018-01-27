import { cons } from 'hexlet-pairs';
import { generateRandomNumber, findGcd } from '../library';
import engineGame from '..';

export default () => {
  const specification = 'Find the greatest common divisor of given numbers.';

  const rulesGame = () => {
    const number1 = generateRandomNumber(1, 100);

    const number2 = generateRandomNumber(1, 100);

    const numbers = `${number1} ${number2}`;

    return cons(numbers, String(findGcd(number1, number2)));
  };

  return engineGame(specification, rulesGame);
};
