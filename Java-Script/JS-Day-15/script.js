// callback hell

setTimeout(() => {
    console.log("1");
    setTimeout(() => {
        console.log("2");
        setTimeout(() => {
            console.log("3");
            setTimeout(() => {
                console.log("4");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);        

// promise

function printAfterDelay(num, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(num);
            resolve();
        }, delay);
    });
}

printAfterDelay(1, 1000)
    .then(() => printAfterDelay(2, 1000))
    .then(() => printAfterDelay(3, 1000))
    .then(() => printAfterDelay(4, 1000));  