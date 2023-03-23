// functions.js
function addTwoNumbers(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
function sayHello(name) {
  var greeting = `Hi there ${name}!`;
  var meanGreeting = `No more testing ${name}!`;
  if (name === "Will") {
    return meanGreeting;
  } else {
    return greeting;
  }
}
function buildCar(color, type) {
  if (color || type) {
    var car = {
      color: color,
      type: type,
    };
    return car;
  } else {
    return {};
  }
}

module.exports = {
  addTwoNumbers,
  sayHello,
  buildCar,
};
