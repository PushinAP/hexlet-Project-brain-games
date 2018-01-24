import readlineSync from 'readline-sync';

export default () => {
  const userName1 = readlineSync.question('May I have your name? ');
  return userName1;
};
