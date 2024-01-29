import { compose, pipe } from "lodash/fp";
import { produce } from "immer";
// function sayHello() {
//   return "hello lowercase through a variable";
// }
// let fn = sayHello();

// function fnLogger(fctn) {
//   console.log(fctn);
// }
// fnLogger(fn);

// let numbers = [1, 2, 3];

// // console.log(numbers.map((number) => number * 2));
// const input = "  JSbenis  ";
// const trim = (str) => str.trim();
// const wrapInDiv = (str) => `<div>${str}</div>`;
// const toLowerCase = (str) => str.toLowerCase();

// const transform = pipe(trim, toLowerCase, wrapInDiv);
// const result = transform(input);

// // const result = wrapInDiv(toLowerCase(trim(input)));
// console.log(result);
// console.log("start");
// const person = { name: "John", address: { county: "USA", state: "Virginia" } };
// // const updatedPerson = Object.assign({}, person, { age: 30 });
// const updatedPerson = {
//   ...person,
//   weight: "135 lbs",
//   address: { ...person.address, state: "Arizona" },
// };
// // updatedPerson.address.state = "New York";
// // console.log(person);
// // console.log(updatedPerson);
// const numbers = [1, 2, 3, 4, 5];
// const index = numbers.indexOf(3);
// const added = [...numbers.slice(0, index), 7, 8, 9, ...numbers.slice(index)];
// const removed = added.filter((n) => n !== 2);
// const mapped = numbers.map((n) => (n === 2 ? 20 : n));
// console.log(numbers);
// console.log(added);
// console.log(removed);
// console.log(mapped);
let book = { title: "Harry Potter" };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

const newBook = publish(book);
console.log(book);
console.log(newBook);
