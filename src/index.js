import readlineSync from 'readline-sync';

const userName = () => {
  const userName1 = readlineSync.question('May I have your name? ');
  return userName1;
};
export default userName;
