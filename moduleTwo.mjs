import { a as leterA, b } from "./moduleOne.mjs";
import funcAdd from "./moduleOne.mjs";

const num1 = 2
const num2 = 4

const result = funcAdd(num1, num2)
console.log(result)

console.log(funcAdd(13,20))

console.log(leterA, b)