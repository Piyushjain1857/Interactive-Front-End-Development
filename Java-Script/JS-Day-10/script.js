const head = document.getElementById('heading');

head.innerHTML = "<i>New Heading</i>"
console.log(head.innerHTML); // It will Show only the visible text

console.log(head.textContent); // It will Show all the text including hidden text and HTML tags

console.log(head.innerText); // It will Show only the visible text without any HTML tags
