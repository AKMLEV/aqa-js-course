// const {myAge, myName} = require("./file_1")
// const {myAge} = require("./file_1")
// import {age} from "./file_1"
import chalk from "chalk"

import {age} from "./file_1.js"

// console.log("My age ", myAge)
// console.log("My name ", myName)
console.log("My age ", chalk.red(age))