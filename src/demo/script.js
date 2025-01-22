// TODO: get a reference to the .box element and log it to the console

// TODO: add an event listener to the .box element that toggles the .left class

// TODO: get a reference to #button, #txt and #output

// TODO: add an event listener to the #button that changes the text in #output to the lowercase value of #txt
const box = document.querySelector(".box");
console.log(box);

box.addEventListener("click", function () {
  this.classList.toggle("left");
});

const button = document.getElementById("button");
const textInput = document.getElementById("txt");
const output = document.getElementById("output");

button.addEventListener("click", function () {
  const text = textInput.value;
  output.textContent = text.toLowerCase();
});
