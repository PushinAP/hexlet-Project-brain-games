import { cons } from 'hexlet-pairs';
import { generateRandomNumber, generateRandomOperations, calculation } from '../library';
import engine from '..';


export default () => {
  const specification = 'Answer "yes" if number even otherwise answer "no".';

  const logicGame = () => {
    const number1 = generateRandomNumber(1, 10);

    const number2 = generateRandomNumber(1, 10);

    const operation = generateRandomOperations();

    const expression = `${number1}${operation}${number2}`;

    return cons(expression, String(calculation(number1, number2, operation)));
  };

  return engine(specification, logicGame);
};
