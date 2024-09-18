"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringOrNumber = "Anas";
console.log(stringOrNumber);
stringOrNumber = 30;
console.log(stringOrNumber);
var user1 = {
    name: "Anas",
    age: 30,
    orders: ["Pizza", "Burger"],
    address: {
        city: "Karachi",
        country: "Pakistan",
    },
};
var user2 = {
    name: "Ali",
    role: "Admin",
};
function userID(id) {
    //   id.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'string | number'.
    //   id.toFixed(); // Error: Property 'toFixed' does not exist on type 'string | number'.
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    else {
        return id.toFixed();
    }
}
var arr = ["45", 30, "25", 25];
var orderStatus;
orderStatus = "pending";
orderStatus = "completed";
