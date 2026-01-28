// [
//     ["x", "o", "x"],
//     ["x", "o", "x"],
//     ["x", "o", "x"]
// ]

let user={
    name:"Piyush",
    age:18,
    addres:{
        city:"Gurugram",
        state:"Haryana",
        country:"India"
    },
    mobileno:1234567890,
    favcolor:["red","blue","green"],
    demo:function(){
        return "Hello World";
    }
}

// console.log(user.demo());
// console.log("My Name Is "+user.name+". I am "+user.age+" years old.");

// string literals
// console.log(`My Name Is ${user.name}. I am ${user.age} years old.`);

// //Object methods
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

const car={
    make:"Mahindra",
    model:"Thar",
};
Object.freeze(car);

car.color="ZBlack";

console.log(car);