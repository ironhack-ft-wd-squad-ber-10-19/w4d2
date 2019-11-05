console.log("Hello World!");

// const { multiply, divide, randomString } = require("./utils");

const utils = require("./utils");
// const { multiply } = utils;
const multiply = utils.multiply;

// console.log(utils.multiply(6, 7));
console.log(multiply(6, 7));

const chalk = require("chalk");

console.log(chalk.blue.bgRed.bold("Hello world!"));
