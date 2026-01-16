// loops

// for loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: " + i);
}

// while loop
let j = 0;
while (j < 5) {
    console.log("While Loop iteration: " + j);
    j++;
}

// do-while loop
let k = 0;
do {
    console.log("Do-While Loop iteration: " + k);
    k++;
} while (k < 5);

// for...of loop
const array = ['a', 'b', 'c', 'd', 'e'];
for (const element of array) {
    console.log("For...of Loop element: " + element);
}

// for...in loop
const object = {name: 'Alice', age: 25, city: 'Wonderland'};
for (const key in object) {
    console.log("For...in Loop key: " + key + ", value: " + object[key]);
}