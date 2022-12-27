const board1 = document.querySelector("#board1");
const colors1 = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
// const colors = ["#e74c3c"];
const SQUARES_NUMBER = 300;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColorSquare(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  // square.addEventListener("mouseover", setColorSquare);

  // square.addEventListener("mouseleave", removeColor);

  board1.append(square);
}

// ====================================================
const board2 = document.querySelector("#board2");
const btn = document.querySelector("#btn");
const colors2 = [
  "#ff8fdf",
  "#faf75a",
  "#5afadf",
  "#d778fd",
  "#e67777",
  "#5abffa",
  "#b5fa5a",
  "#789bfd",
  "#7c5fff",
];
// const colors = ["#e74c3c"];

const CIRCLES_NUMBER = 308;

for (let i = 0; i < CIRCLES_NUMBER; i++) {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  circle.addEventListener("mouseover", () => {
    setColorCircle(circle);
  });

  // circle.addEventListener("mouseleave", () => {
  //   removeColor(square);
  // });

  btn.addEventListener("click", () => {
    removeColor(circle);
  });
  board2.append(circle);
}

function setColorSquare(element) {
  const color = getRandomSquareColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function setColorCircle(element) {
  const color = getRandomCircleColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomSquareColor() {
  const index = Math.floor(Math.random() * colors1.length);
  return colors1[index];
}
function getRandomCircleColor() {
  const index = Math.floor(Math.random() * colors2.length);
  return colors2[index];
}
