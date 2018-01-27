import { cons } from 'hexlet-pairs';
import { generateRandomNumber, balance } from '../library';
import engine from '..';

export default () => {
  const specification = 'Balance the given number.';
  const rulesGame = () => {
    const number = generateRandomNumber(100, 400);
    const answer = balance(number);
    return (cons(number, answer));
  };
  return engine(specification, rulesGame);
};
