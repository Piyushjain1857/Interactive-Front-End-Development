// Types of function in JS

// normal function 

function greet(name) {
    console.log(name);
}

greet("Piyush");

// arrow function 

const farewell = (name) => { console.log(name); };

farewell("Piyush");

// callback function 

const sample = (callback) => {
    console.log("Sample");
    callback();
};

const demo = () => {
    console.log("Demo");
};

sample(demo);