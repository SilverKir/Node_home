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


const number = Math.floor(1 + Math.random() * 2);

const argv = yargs(hideBin(process.argv))
    .option('log', {
        alias: 'l',
        type: 'string',
        description: 'Log file name',
        default: process.env.FILE_NAME,
    })
    .argv;

const fileName = argv.log;


const start = () => {

    rl.question('Угадайте загаданое случайное число (1 или 2) \n', async (answer) => {
        answer = parseInt(answer);
        checkAnswer(answer)

    })

    rl.on('close', () => {
        const analize = logAnalizer(fileName);
        logAnaliserView(analize);
    });

}


const checkAnswer = async (answer) => {

    if (answer == 1 || answer == 2) {
        const result = inspectAnswer(answer, number);
        await log(result, fileName);
        rl.close();
    } else {
        rl.question('Неверное значение! Введите число 1 или 2! \n', (answer) => {
            answer = parseInt(answer);
            checkAnswer(answer);
        });
    }
}

start();
