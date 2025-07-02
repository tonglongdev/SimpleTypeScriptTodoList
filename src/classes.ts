interface User {
  userName: string;
  age: number;
  greet(): void;
}
class Person implements User {
  // userName: string;
  // age: number;
  // #password: number = 123;
  constructor(public userName: string, public age: number) {
    // this.userName = userName;
    // this.age = age;
  }
  greet() {
    console.log("Person");
  }
}
const user1 = new Person("Long", 12);
console.log(user1);
user1.greet();
