type User = {
  name: string;
  age: number;
  place: string;
  isSignedUp: boolean;
};

function acceptUser(user: User) {
  console.log(user.name);
  console.log(user.age);
  console.log(user.place);
  console.log(user.isSignedUp);
}

function returnUser(): User {
  const user = {
    name: "Anas",
    age: 30,
    place: "Manjeri",
    isSignedUp: true,
  };
  return user;
}

type a = {
  x: number;
  y: string;
};

type b = {
  z: boolean;
};

type c = a & b & { w: string };

export {};
