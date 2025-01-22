const button = document.getElementById("btn");
const textInput = document.getElementById("txt");
const output = document.getElementById("output");

button.addEventListener("click", function () {
  const text = textInput.value;

  output.textContent = text.toUpperCase();
});
