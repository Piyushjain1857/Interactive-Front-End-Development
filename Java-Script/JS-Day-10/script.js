// const head = document.getElementById('heading');

// // head.innerHTML = "<i>New Heading</i>"
// console.log(head.innerHTML); // It will Show only the visible text

// console.log(head.textContent); // It will Show all the text including hidden text and HTML tags

// console.log(head.innerText); // It will Show only the visible text without any HTML tags

// // don mofification
// const newPhara = document.createElement('p');
// newPhara.textContent = "This is a dynamically created paragraph"; 
// console.log(newPhara.innerHTML); 

// // append the new element to the container
// const container = document.getElementById('container');
// container.appendChild(newPhara);

// // remove the new element from the container
// container.removeChild(newPhara);

// // or
// document.getElementById('container').removeChild(newPhara);

// // queryselector example
// const cont = document.querySelector('#container');
// console.log(cont.innerHTML);

// date
let date = new Date();
console.log(date.toString());

// setTimeout(() => {
//     // console.log("Welcome");
//     alert("Offer valid for 24 hours only!");
// }, 5000);

setInterval(() => {
    // console.log(new Date().toLocaleTimeString());
}, 2000);

handleClick = () => {
    // console.log("Button Clicked");
    document.querySelector('p').textContent = "Btn Clicked";
}