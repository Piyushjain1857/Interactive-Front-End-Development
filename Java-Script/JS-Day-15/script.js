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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num === 3) {
                reject("Error: Failed while printing " + num);
            } else {
                console.log(num);
                resolve();
            }
        }, delay);
    });
}

printAfterDelay(1, 1000)
    .then(() => printAfterDelay(2, 1000))
    .then(() => printAfterDelay(3, 1000))
    .then(() => printAfterDelay(4, 1000))
    .catch(error => console.error("Promise Rejected:", error));

// promice with fetch

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));


new Promise((resolve, rejected) => {
    let payment = "True";
    if (payment == "True") {
        resolve("Payment Successfull");
    } else {
        rejected("Payment Failed");
    }
}).then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});