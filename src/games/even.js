import { cons } from 'hexlet-pairs';
import engineGame from '..';


export default () => {
  const specification = 'Answer "yes" if number even otherwise answer "no".';
  const logicGame = () => {
    const generateRandomNumber = () => 1 + Math.floor(Math.random() * 100);
    const randomNumber = generateRandomNumber();
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
