import { cons } from 'hexlet-pairs';
import { generateRandomNumber, Progression } from '../library';
import engineGame from '..';

export default () => {
  const specification = 'What number is missing in this progression?';
  const gameRules = () => {
    const allNumbers = 10;

    const randomIndex = generateRandomNumber(0, allNumbers);

    const progression = Progression(allNumbers);

    const answer = String(progression[randomIndex]);

    progression[randomIndex] = '..';

    const numbers = progression.join(' ');

    return cons(numbers, answer);
  };

  return engineGame(specification, gameRules);
};
