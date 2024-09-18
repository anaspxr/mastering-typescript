const user = {
  name: "Anas",
  place: "Manjeri",
  age: 30,
};

function printUser(user: { name: string; age: number; place: string }) {
  console.log(user.name);
  console.log(user.age);
  console.log(user.place);
}

function printUser2({
  name,
  age,
  place,
}: {
  name: string;
  age: number;
  place: string;
}) {
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

function returnUser2(): {
  name: string;
  age: number;
  place: string;
} {
  const obj = {
    name: "Anas",
    age: 30,
    place: "Manjeri",
  };
  return obj;
}

export {};
