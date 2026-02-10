// document.getElementById("myInput").addEventListener("change", ()=> {
//     document.getElementById("output").textContent = "Code Changed By Piyush Jain";
// });

const nameInput = document.getElementById("myInput");
const selectInput = document.getElementById("mySelect");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    output.textContent = `Input value: ${nameInput.value}, Selected value: ${selectInput.value}`;
    console.log(nameInput.value, selectInput.value);
});
