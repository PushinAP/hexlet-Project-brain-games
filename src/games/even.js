import { cons } from 'hexlet-pairs';
import { generateRandomNumber } from '../library';
import engineGame from '..';


export default () => {
  const specification = 'Answer "yes" if number even otherwise answer "no".';

  const logicGame = () => {
    const randomNumber = generateRandomNumber(1, 100);

    const checkAnswer = (number) => {
      if (number % 2 === 0) {
        return 'yes';
      }
      return 'no';
    };
    return cons(randomNumber, checkAnswer(randomNumber));
  };

  return engineGame(specification, logicGame);
};
