#!/usr/bin/env node

import { dataFunction } from './dataFunction.js';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
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


dataFunction("add", argv);





