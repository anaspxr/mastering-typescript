function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

function greet(name: string, lastName?: string): string {
  return "Hello " + name + (lastName ? " " + lastName : "");
}

console.log(greet("John"));

function greet2(name: string, lastName?: string, isSignedUp = false): string {
  return "Hello " + name + " " + lastName + isSignedUp
    ? " You are signed up"
    : " You are not signed up";
}

console.log(greet2("John", "Doe"));
console.log(greet2("John", "Doe", true));

function returnsString(): string {
  //   return 2; // Error
  return "Hello";
}

function multipleReturnTypes(a: number) {
  // the type of the return value is inferred to be false | "One" | 1
  // we have to specify the return type to avoid this (see below)
  if (a === 1) {
    return "One";
  } else if (a === 2) {
    return false;
  }
  return 1;
}

function multipleReturnTypes2(a: number): string {
  if (a === 1) {
    return "One";
  } else if (a === 2) {
    // return false; // Error
    return "Two";
  }
  //   return 1; // Error
  return "Three";
}

function returnsNothing() {
  // the return type is void
  console.log("Hello");
}

function consoleError(message: string): void {
  console.error(message);
}

function handleError(message: string): never {
  throw new Error("Something went wrong, " + message);
}

export {};
