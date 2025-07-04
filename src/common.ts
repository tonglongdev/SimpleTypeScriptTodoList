// // GENERIC
// interface Example {
//   name: string;
//   age: number;
// }

// function testGeneric<T>(param: T[]): T[] {
//   return param;
// }

// testGeneric<string>(["Long"]);
// testGeneric<number>([123]);
// testGeneric<Example>([{ name: "Long", age: 12 }]);

// function merge<T extends object, U extends object>(obj1: T, obj2: U) {
//   return {
//     ...obj1,
//     ...obj2,
//   };
// }
// console.log(merge({ name: "long", age: 12 }, [{ school: "harvard", major: "CS" }]));

// interface Lengthy {
//   length: number;
// }

// function printLength<T extends Lengthy>(arr: T): number {
//   return arr.length * 2;
// }
// console.log(printLength([1, 2, 3, 4]));

// Type Predicate
interface Dog {
  isBark: boolean;
}
interface Cat {
  isMeow: boolean;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).isMeow !== undefined;
}

function whatAnimal(animal: Dog | Cat): void {
  if (isCat(animal)) {
    console.log("this is a cat!");
  } else {
    console.log("this is a dog!");
  }
}

whatAnimal({ isMeow: true });
