import { compose, pipe } from "lodash/fp";

// function sayHello() {
//   return "hello lowercase through a variable";
// }
// let fn = sayHello();

// function fnLogger(fctn) {
//   console.log(fctn);
// }
// fnLogger(fn);

// let numbers = [1, 2, 3];

// console.log(numbers.map((number) => number * 2));
const input = "  JSbenis  ";
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrapInDiv);
const result = transform(input);

// const result = wrapInDiv(toLowerCase(trim(input)));
console.log(result);
