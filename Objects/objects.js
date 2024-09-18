"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Anas",
    place: "Manjeri",
    age: 30,
};
function printUser(user) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.place);
}
function printUser2(_a) {
    var name = _a.name, age = _a.age, place = _a.place;
    console.log(name);
    console.log(age);
    console.log(place);
}
function returnUser() {
    return {
        name: "Anas",
        age: 30,
        place: "Manjeri",
    };
}
function returnUser2() {
    var obj = {
        name: "Anas",
        age: 30,
        place: "Manjeri",
    };
    return obj;
}
