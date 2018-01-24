import { askName, askQuestions, results, welcomeAndSpecification } from '../engineGame';

const logicGame = (acc) => {
  if (acc < 1) {
    return 'Congratulations';
  }
  const generateRandomNumber = () => Math.floor(Math.random() * 100);

  const randomNumber = generateRandomNumber();

  const answerUser = askQuestions(randomNumber);

  if (answerUser === 'yes') {
    if (randomNumber % 2 === 0) {
      results('Correct!');
      return logicGame(acc - 1);
    }
    results("'yes' is wrong answer ;(. Correct answer was 'no'.");
    return "Let's try again";
  }
  if (answerUser === 'no') {
    if (randomNumber % 2 !== 0) {
      results('Correct!');
      return logicGame(acc - 1);
    }
    results("'no' is wrong answer ;(. Correct answer was 'yes'.");
    return "Let's try again";
  }
  return "Error, enter yes or no. Let's try again";
};

export default () => {
  welcomeAndSpecification('Answer "yes" if number even otherwise answer "no".');
  const userName = askName();
  return results(`${logicGame(3)}, ${userName}!`);
};

