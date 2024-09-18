let user: [string, number, string[], { city: string; country: string }];

user = ["Anas", 30, ["Pizza", "Burger"], { city: "Manjeri", country: "India" }];

// user = ["anas", { city: "Manjeri", country: "India" }]; // Error

// in tuples, the order of elements is important

let rgb: [number, number, number] = [255, 0, 0];
// rgb = [255, 0]; // Error
// rgb = [255, 0, "red"]; // Error

type user = [string, number, string];

const User: user = ["Anas", 30, "manjeri"];
// const User2: user = ["Anas"]; // Error
// const User3: user = ["Anas", 30]; // Error

//! problems with tuples

User.push("hi"); // No error
// User.push(true); // Error
User.push(67); // no error

console.log(User); // [ 'Anas', 30, 'manjeri', 'hi', 67 ]   this is not what we defined in the type
