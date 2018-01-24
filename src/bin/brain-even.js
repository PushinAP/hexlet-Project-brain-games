#!/usr/bin/env node

import actionUser from '..';
import game from '../game';

console.log('Welcome to the Brain-Games!\nAnswer "yes" if number even otherwise answer "no".\n');
const userName = actionUser();
console.log(`Hello, ${userName}!\n`);
console.log(game(userName));
