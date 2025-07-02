"use strict";
class Person {
    // userName: string;
    // age: number;
    // #password: number = 123;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
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
