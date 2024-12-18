#!/usr/bin/env node


const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv))
    .option('year', {
        alias: "y",
        type: "integer",
        description: "current year",
    })
    .option('month', {
        alias: "m",
        type: "integer",
        description: "current month",
    })
    .option('day', {
        alias: "d",
        type: "integer",
        description: "current month",
    })
    .parse();

let action = argv._[0] === undefined ? "current" : argv._[0];
let params = null;
let value = null;


if (argv.y) {
    params = "year";
    value = argv.y;

} else if (argv.m) {
    params = "month";
    value = argv.m;
} else if (argv.d) {
    params = "day";
    value = argv.d;
} else {
    params = "current";
}

console.log(argv);
console.log(action, params, value);

dataFunction(action, params, value);


function add(params, value) {

    if (params === "year") {
        let year = new Date().getFullYear() + value;
        console.log(new Date(new Date().setFullYear(year)).toISOString());
    } else if (params === "month") {

        let month = new Date().getMonth() + value;
        console.log(new Date(new Date().setMonth(month)).toISOString());

    } else if (params === "day") {
        let day = new Date().getDate() + value;
        console.log(new Date(new Date().setDate(day)).toISOString());
    } else if (params === "current") {
        console.log(new Date().toISOString());
    }
    else {
        console.log("params is not valid");
    }
}

function sub(params, value) {
    add(params, -value);
}

function current(params, value) {
    if (params === "year") {
        console.log(new Date().getFullYear());
    } else if (params === "month") {
        console.log(new Date().getMonth());
    } else if (params === "day") {
        console.log(new Date().getDate());
    } else {
        console.log(new Date().toISOString());
    }
}

function dataFunction(action, params, value) {
    if (action === "add") {
        add(params, value);
    } else if (action === "sub") {
        sub(params, value);
    } else if (action === "current") {
        current(params, value);
    } else {
        console.log("action is not valid");
    }

}





