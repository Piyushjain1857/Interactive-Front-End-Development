// // callback hell

// setTimeout(() => {
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//         setTimeout(() => {
//             console.log("3");
//             setTimeout(() => {
//                 console.log("4");
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// // promise

// function printAfterDelay(num, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num === 3) {
//                 reject("Error: Failed while printing " + num);
//             } else {
//                 console.log(num);
//                 resolve();
//             }
//         }, delay);
//     });
// }

// printAfterDelay(1, 1000)
//     .then(() => printAfterDelay(2, 1000))
//     .then(() => printAfterDelay(3, 1000))
//     .then(() => printAfterDelay(4, 1000))
//     .catch(error => console.error("Promise Rejected:", error));

// // promice with fetch

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error:", error));


// new Promise((resolve, rejected) => {
//     let payment = "True";
//     if (payment == "True") {
//         resolve("Dashboard Accessed");
//     } else {
//         rejected("Dashboard Access Denied");
//     }
// }).then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// });


// function pro() {
//     return new Promise((resolve, rejected) => {
//         let payment = "True";
//         if (payment == "True") {
//             resolve("Dashboard Accessed");
//         } else {
//             rejected("Dashboard Access Denied");
//         }
//     })
// }

// pro().then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// });



//  output guessing question




// console.log("start");
// setTimeout(() => {
//     console.log("timeout");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("promise");
// });

// console.log("end");






// setTimeout(() => {
//     console.log("settimeout 1");
// }, 0);

// function delay() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Timeout Done");
//             resolve();
//         }, 0);
//     });
// }

// function test() {
//     console.log("Start");
//     delay();
//     console.log("After Delay");
// }

// test();
// console.log("End");





// console.log("Start");

// setTimeout(() => {
//     console.log("Timer");
// }, 0);

// Promise.resolve()
//     .then(() => {
//         console.log("First");
//     })
//     .then(() => {
//         console.log("Second");
//     });

// console.log("End");




function pro(num) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(num)            
        }, 1000);
    })
}

pro(1)
    .then(() =>pro(2))
    .then(() =>pro(3))
    .then(() =>pro(4))
    .then(() =>pro(5))