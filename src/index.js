function sayHello() {
  return "hello lowercase through a variable";
}
let fn = sayHello();

function fnLogger(fctn) {
  console.log(fctn);
}
fnLogger(fn);
