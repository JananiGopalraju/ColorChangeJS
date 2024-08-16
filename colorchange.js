const btn = document.querySelector("#btn");
const colorText = document.getElementById("color");
const wrap = document.getElementById("wrap");

const hexArrayDabba = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", changeColor); 
// or we can give onclick function in the html button element!

function changeColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
  hexColor = hexColor + randomHex();
  }

  wrap.style.backgroundColor = hexColor;
  colorText.innerText = hexColor;
}

function randomHex() {
  let randomIndex = Math.floor(Math.random() * 16);
  return hexArrayDabba[randomIndex];
}
