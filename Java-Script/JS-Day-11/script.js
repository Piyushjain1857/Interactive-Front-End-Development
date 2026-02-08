// function handleClick(){
//     document.querySelector("#head").style.color="red";

//     document.getElementById("btn").textContent="color changed"
// }

// Q2.
// const handleClick = () => {
//     const image = document.createElement("img");
//     image.setAttribute("src", "https://krmangalam.edu.in/_next/image?url=%2Flife-at-krmu%2Finfra.webp&w=3840&q=75")

//     image.setAttribute("alt", "kr mangalam");

//     document.getElementById("content").append(image);
// }

// document.getElementById("btn").addEventListener("click",()=>{
//     const image = document.createElement("img");
//     image.setAttribute("src", "https://krmangalam.edu.in/_next/image?url=%2Flife-at-krmu%2Finfra.webp&w=3840&q=75")

//     image.setAttribute("alt", "kr mangalam");

//     document.getElementById("content").append(image);
// })



const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", function () {

    const link = document.createElement("a");
    link.href = "https://www.krmangalam.edu.in/";
    link.innerText = "Visit KR Mangalam University";

    const box = document.createElement("div");
    box.innerText = "Welcome to KR Mangalam University";

    box.style.backgroundColor = "tomato";
    box.style.borderRadius = "20px";
    box.style.height = "150px";
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
    box.style.color = "white";
    box.style.fontSize = "18px";

    output.appendChild(link);
    output.appendChild(box);
});