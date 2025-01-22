// TODO: increment and decrement the count when the buttons are clicked
const count = document.querySelector("#count");

const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");

let score = 0;
increment.addEventListener("click", () => {
  score++;
  count.innerHTML = score;
});

decrement.addEventListener("click", () => {
  score--;
  count.innerHTML = score;
});
