#!/usr/bin/env node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
const number = Math.floor(Math.random() * 101);

rl.question('Загадано число в диапазоне от 0 до 100 включительно \n', (answer) => {
    answer = parseInt(answer);
    inspectAnswer(answer);
});

function inspectAnswer(answer) {
    if (answer != number) {
        if (answer > number) {
            console.log('Меньше');
        } else {
            console.log('Больше');
        }
        rl.question('', (answer) => {
            answer = parseInt(answer);
            inspectAnswer(answer);
        });
    } else {
        console.log('Отгадано число ' + number);
        rl.close();
    }
}