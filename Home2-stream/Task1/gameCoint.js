#! /usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

require('dotenv').config();

const readline = require('node:readline');

const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const inspectAnswer = require('./src/controller/InspectAnswer');
const log = require('./src/controller/LogController');
const logAnalizer = require('./src/controller/LogAnalizer');
const logAnaliserView = require('./src/view/LogAnaliserView');

const argv = yargs(hideBin(process.argv))
    .option('log', {
        alias: 'l',
        type: 'string',
        description: 'Log file name',
        default: process.env.FILE_NAME ? process.env.FILE_NAME : "log.txt",
    })
    .argv;

const fileName = argv.log;

const start = () => {
    const number = Math.floor(1 + Math.random() * 2);
    rl.question('Угадайте число (1 или 2); Для выхода наберите 3 \n', (answer) => {
        answer = parseInt(answer);
        checkAnswer(answer, number);
    })
}

const checkAnswer = async (answer, number) => {
    if (answer == 1 || answer == 2) {
        const result = inspectAnswer(answer, number);
        await log(result, fileName);
        start();
    } else if (answer == 3) {
        rl.close()
    } else {
        rl.question('Неверное значение! Введите число 1 или 2! \n', (answer) => {
            answer = parseInt(answer);
            checkAnswer(answer);
        });
    }
}


start();

rl.on('close', () => {
    const analize = logAnalizer(fileName);
    logAnaliserView(analize)
})

