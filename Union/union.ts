let stringOrNumber: string | number = "Anas";
console.log(stringOrNumber);
stringOrNumber = 30;
console.log(stringOrNumber);
// stringOrNumber = false; // Error: Type 'boolean' is not assignable to type 'string | number'.

type User = {
  name: string;
  age: number;
  orders: string[];
  address: {
    city: string;
    country: string;
  };
};

type Admin = {
  name: string;
  role: string;
};

const user1: User | Admin = {
  name: "Anas",
  age: 30,
  orders: ["Pizza", "Burger"],
  address: {
    city: "Karachi",
    country: "Pakistan",
  },
};

const user2: User | Admin = {
  name: "Ali",
  role: "Admin",
};

function userID(id: string | number) {
  //   id.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'string | number'.
  //   id.toFixed(); // Error: Property 'toFixed' does not exist on type 'string | number'.
  if (typeof id === "string") {
    return id.toUpperCase();
  } else {
    return id.toFixed();
  }
}

const arr: (string | number)[] = ["45", 30, "25", 25];

let orderStatus: "pending" | "completed" | "rejected";
orderStatus = "pending";
orderStatus = "completed";
// orderStatus = "delivered"; // Error: Type '"delivered"' is not assignable to type '"pending" | "completed" | "rejected"'.

export {};
