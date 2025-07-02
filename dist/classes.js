"use strict";
class Hello {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    ;
    greet() {
        console.log("hello");
    }
    ;
}
const user1 = new Hello("Long", 12);
user1.greet();
