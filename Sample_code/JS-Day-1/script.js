console.log("Start...");
function myFunction(cb) {
    setTimeout(() => {
        cb("Long running task finished.");
    }, 2000); 
}
// myFunction();
myFunction((result) => {
    console.log(result);
});
console.log("End...");
