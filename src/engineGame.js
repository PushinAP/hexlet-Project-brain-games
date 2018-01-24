import readlineSync from 'readline-sync';
import actionUser from '..';

export const welcomeAndSpecification = (specification) => {
  console.log(`Welcome to the Brain-Games!\n${specification}\n`);
};

export const askName = () => {
  const userName = actionUser();
  console.log(`Hello ${userName}!\n`);
  return userName;
};

export const askQuestions = (data) => {
  console.log(`Question: ${data}`);
  const answerUser = readlineSync.question('Your answer: ');
  return answerUser;
};

export const results = (result) => {
  console.log(result);
};
