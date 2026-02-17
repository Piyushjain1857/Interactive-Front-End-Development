console.log("Hello");
function longRunningTask() {
    setTimeout(() => {
        console.log("Long running task finished.");
    }, 2000); // this will execute the callback function after 2 seconds
}
longRunningTask();
console.log("This will be printed immediately after the long running task is started.");
