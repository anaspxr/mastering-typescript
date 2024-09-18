"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var orderTypes;
(function (orderTypes) {
    orderTypes[orderTypes["PIZZA"] = 1] = "PIZZA";
    orderTypes[orderTypes["BURGER"] = 2] = "BURGER";
    orderTypes[orderTypes["APPLE_JUICE"] = 5] = "APPLE_JUICE";
    orderTypes[orderTypes["MANGO_JUICE"] = 6] = "MANGO_JUICE";
    orderTypes[orderTypes["COKE"] = 7] = "COKE";
})(orderTypes || (orderTypes = {}));
// if we don't assign value to the first element, it will be 0 by default
// if we assign value to an element, the next elements will be incremented by 1
var myOrders = [orderTypes.PIZZA, orderTypes.APPLE_JUICE];
console.log(myOrders); // [ 0, 2 ]
// this will not create crazy javascript iife code
var myOrders2 = [1 /* orderTypes2.PIZZA */, 5 /* orderTypes2.APPLE_JUICE */];
