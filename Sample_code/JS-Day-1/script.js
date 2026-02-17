console.log("Hello");
function myFunction() {
    setTimeout(() => {
        console.log("Long running task finished.");
    }, 2000); 
}
// myFunction();
console.log(myFunction());
console.log("This will be printed immediately after the long running task is started.");
