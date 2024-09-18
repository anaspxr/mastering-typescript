type User = {
  readonly _id: string;
  name: string;
  age: number;
  place: string;
  isSignedUp: boolean;
  phone?: string;
};

const user: User = {
  _id: "1",
  name: "Anas",
  age: 30,
  place: "Manjeri",
  isSignedUp: false,
};

// user._id = "2"; // Error: Cannot assign to '_id' because it is a read-only property.

user.age = 31;
user.isSignedUp = true;
user.phone = "1234567890";
// user.phoneNumber = "2141441" // Error: Property 'phoneNumber' does not exist on type 'User'.
