import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default (specification, logicGame) => {
  console.log(`Welcome to the Brain-Games!\n${specification}\n`);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello ${userName}!\n`);

  const createQuestion = (acc) => {
    if (acc < 1) {
      return console.log(`Congratulations ${userName}`);
    }

    const data = logicGame();

    console.log(`Question: ${car(data)}`);

    const answer = readlineSync.question('Your answer: ');

    if (cdr(data) === answer) {
      console.log('Correct!');
      return createQuestion(acc - 1);
    }

    return console.log(`${answer} is wrong answer ;(. Correct answer was ${cdr(data)}.\nLet's try again, ${userName}`);
  };
  createQuestion(3);
};
