interface User {
  username: string;
  email: string;
  age: number;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(coupon: string): void;
}

//we can add more properties to the interface
interface User {
  address: string;
}

const newUser: User = {
  email: "user@gmail.com",
  username: "user",
  age: 20,
  startTrail: () => "start trail",
  getCoupon(coupon) {
    console.log(`Your coupon code is ${coupon}`);
  },
  address: "Manjeri",
};

// we can extend the interface to create a new interface
interface Admin extends User {
  role: string;
  isAdmin: boolean;
}
