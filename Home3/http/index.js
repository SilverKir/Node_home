#!/usr/bin/env node

const http = require('http');
let city = process.argv.slice(2).reduce((acc, arg) => acc+" "+arg, "").trim();
const myAPIKey = process.env.WeatherstackAPIKey;


if (!city||city.length<2) {
    const readline = require('node:readline');
    const { stdin: input, stdout: output } = require('node:process');
    const rl = readline.createInterface({ input, output });
    const number = Math.floor(Math.random() * 101);
    
    rl.question('Введите название города  \n', (answer) => {
        inspectAnswer(answer);
    });

    function inspectAnswer(answer) {
        if (!answer|| answer.length<2 ) {
            console.log('Некоореектные данные! Попробуйте еще раз!');
            rl.question('', (answer) => {
                inspectAnswer(answer)})
        } else {
            city = answer;
            rl.close();
            getWeather(myAPIKey, city);
        }
    }
  
} else {
    getWeather(myAPIKey, city);
}


function getWeather(key, city) {
    const url =`http://api.weatherstack.com/current?access_key=${key}&query=${city}`;
    http.get(url, (resp) => {
    const { statusCode } = resp;
    if (statusCode !== 200) {
        console.error(`Status Code: ${statusCode}`);
        return;
    }
    resp.setEncoding('utf8');
    let rawData = '';
    resp.on('data', (chunk) => { rawData += chunk; });
    resp.on('end', () => {
        let parsedData = JSON.parse(rawData);
        console.log(parsedData);
    })
    }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
    });
}