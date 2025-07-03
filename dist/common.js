"use strict";
// // GENERIC
// interface Example {
//   name: string;
//   age: number;
// }
function isCat(animal) {
    return animal.isMeow !== undefined;
}
function whatAnimal(animal) {
    if (isCat(animal)) {
        console.log("this is a cat!");
    }
    else {
        console.log("this is a dog!");
    }
}
whatAnimal({ isMeow: true });
