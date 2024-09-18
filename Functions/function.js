"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));
function greet(name, lastName) {
  return "Hello " + name + (lastName ? " " + lastName : "");
}
console.log(greet("John"));
function greet2(name, lastName, isSignedUp) {
  if (isSignedUp === void 0) {
    isSignedUp = false;
  }
  return "Hello " + name + " " + lastName + isSignedUp
    ? " You are signed up"
    : " You are not signed up";
}
console.log(greet2("John", "Doe"));
console.log(greet2("John", "Doe", true));
