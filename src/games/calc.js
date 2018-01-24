import { askName, askQuestions, results, welcomeAndSpecification } from '../engineGame';

const generateRandomOperation = () => {
  const arr = ['-', '+', '*'];

  const random = Math.floor(Math.random() * arr.length);

  return arr[random];
};

const generateRandomNumber = () => Math.floor(Math.random() * 10);

const calculation = (operand1, operand2, operation) => {
  if (operation === '-') {
    return operand1 - operand2;
  } else if (operation === '+') {
    return operand1 + operand2;
  }
  return operand1 * operand2;
};

const logicGame = (acc) => {
  if (acc < 1) {
    return 'Congratulations';
  }
  const number1 = generateRandomNumber();

  const number2 = generateRandomNumber();

  const operation = generateRandomOperation();

  const mathOperation = `${number1}${operation}${number2}`;

  const answerUser = askQuestions(mathOperation);

  const correctAnswer = calculation(number1, number2, operation);

  if (Number(answerUser) === correctAnswer) {
    results('Correct!');
    return logicGame(acc - 1);
  }
  results(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return "Let's try again";
};


export default () => {
  welcomeAndSpecification('What is the result of the expression?');

  const userName = askName();

  return results(`${logicGame(3)}, ${userName}!`);
};
