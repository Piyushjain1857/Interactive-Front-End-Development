console.log("Start...");
function myFunction() {
    setTimeout(() => {
        return("Long running task finished.");
    }, 2000); 
}
// myFunction();
console.log(myFunction());
console.log("End...");
