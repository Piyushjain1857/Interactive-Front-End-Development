// const pro = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("promise resolved")
//     }, 3000)
// })

// function getData(){
//     pro.then((res) => console.log(res));
//     console.log("After promise");
// }

// getData();

// output will be
// After promise
// promise resolved



// const pro = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Payment Done");
//     }, 3000);
// });

// async function getData() {
//     const value = await pro;
//     console.log(value);
//     console.log("Dashboard Access given");
// }

// getData();

// output will be
// Payment Done
// Dashboard Access given


// const pro = new Promise((res, rej) => {
//     setTimeout(() => {
//         let payment = false;

//         if (payment === true)
//             res("Payment Done");
//         else
//             rej("Payment failed");
//     }, 3000);
// });

// async function getData() {
//     try {
//         const value = await pro;
//         console.log(value);
//         console.log("Dashboard Access given");
//     }
//     catch(err){
//         console.log(err);
//         console.log("Access denied");
//     }
// }

// getData();

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))


// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchData()
// .then(users => console.log(users));

// async function main(){
//     const users = await fetchData();
//     console.log(users);   
// }

// main()


async function fetchData(city){
    const API_Key="8abd30b3940f663008e6013e897d975f";
    try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`);
    const data = await response.json();

    console.log(city);
    console.log("Temp:",data.main.temp);
    console.log("Humidity:",data.main.humidity);

    }catch(error){
        console.error(error);
    }
}
fetchData("Gurugram")