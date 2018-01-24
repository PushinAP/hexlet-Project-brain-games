import readlineSync from 'readline-sync';

export default (userName) => {
  const game = (acc) => {
    if (acc < 1) {
      return `Congratulations,${userName}!`;
    }
    const generateRandomNumber = () => Math.floor(Math.random() * 100);

    const randomNumber = generateRandomNumber();

    console.log(`Question: ${randomNumber}`);

    const answerUser = readlineSync.question('Your answer: ');

    const checkAnswer = () => {
      if (randomNumber % 2 === 0 && answerUser === 'yes') {
        return true;
      } else if (randomNumber % 2 !== 0 && answerUser === 'no') {
        return true;
      }
      return false;
    };
    //
    if (checkAnswer()) {
      return game(acc - 1);
    } else if (answerUser === 'yes') {
      return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;
    } return `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`;
  };
  return game(3);
};
