class Hello {
    userName: string;
    age: number;
    constructor(userName: string, age: number){
        this.userName = userName;
        this.age = age;
    };
    greet(){
        console.log("hello")
    };
}
const user1 = new Hello("Long", 12);
user1.greet();