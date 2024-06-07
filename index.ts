#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from "chalk";

async function countdownTimer() {
  const { seconds } = await inquirer.prompt([
    {
      type: 'number',
      name: 'seconds',
      message: 'Enter your number 1-10 to start coundown seconds:',
      default: 10,
    },
  ]);

  let currentSeconds = seconds;

  const timer = setInterval(() => {
    if (currentSeconds >= 10) {
      clearInterval(timer);
      console.log(chalk.yellow.bold('"-------HAPPY BIRTHDAY DEAR 🎂🎂🎶🎶💖💖🎉🎉!!!!---------"'));
    } else {
      console.log(chalk.red(`Countdown: ${currentSeconds} seconds`));
      currentSeconds++;
    }
  }, 1000);
}

countdownTimer();