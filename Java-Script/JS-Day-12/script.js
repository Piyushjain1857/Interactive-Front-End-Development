const nameInput = document.getElementById("myInput");
nameInput.addEventListener("change", () => {
    document.getElementById("output").textContent = "Changed code";
    console.log(nameInput.value);

});
