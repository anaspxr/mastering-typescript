"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function acceptUser(user) {
  console.log(user.name);
  console.log(user.age);
  console.log(user.place);
  console.log(user.isSignedUp);
}
function returnUser() {
  var user = {
    name: "Anas",
    age: 30,
    place: "Manjeri",
    isSignedUp: true,
  };
  return user;
}
