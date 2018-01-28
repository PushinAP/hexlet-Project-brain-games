import { cons } from 'hexlet-pairs';
import { generateRandomNumber, isPrime } from '../library';
import engineGame from '..';

export default () => {
  const specification = 'Answer "yes" if number prime otherwise answer "no".';
  const gameRules = () => {
    const randomNumber = generateRandomNumber(1, 100);
    const question = `Is this number prime? ${randomNumber}`;
    const answer = isPrime(randomNumber) ? 'yes' : 'no';
    return cons(question, answer);
  };

  return engineGame(specification, gameRules);
};
