let button = document.querySelectorAll("#btn");
let farbe = document.getElementById("thisColor");
let result = document.getElementById("result");
let numQuadrat = 5;
let colors = [];
let pickedColor;
let resetButton = document.querySelector("#reset");
console.log();

init();

function init() {
  setupQuadrate();

  reset();
}
function setupQuadrate() {
  for (var i = 0; i < button.length; i++) {
    // click listeners für die buttons
    button[i].addEventListener("click", function () {
      //die Farbe des geklickten button nehmen
      let clickedColor = this.style.backgroundColor;

      //Vergleich  mit gewählter Farbe
      if (clickedColor === pickedColor) {
        result.textContent = "Das stimmt!! Super!!";

        changeColor(clickedColor);
      } else {
        result.textContent = "Das stimmt leider nicht!! Versuche es nochmal!!";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numQuadrat);

  //eine zufällige Farbe aus dem array wählen
  pickedColor = pickRandomColor();

  //die zu ratende Farbe als RGB anzeigen
  farbe.textContent = `Rate welche Farbe ${pickedColor} ist:`;

  result.textContent = "";

  // den Buttons die Farben zuweisen
  for (let i = 0; i < button.length; i++) {
    if (colors[i]) {
      button[i].style.backgroundColor = colors[i];
    }
  }
}

resetButton.addEventListener("click", function () {
  reset();
});

function changeColor(color) {
  //Loop über die Buttons

  // Alle Buttons auf die richtige Farbe ändern
  for (let i = 0; i < button.length; i++) {
    button[i].style.backgroundColor = color;
  }
}

function pickRandomColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num) {
  // ein array generieren
  let arr = [];

  // zufällige Farben den array zuweisen
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  //den array ausgeben
  return arr;
}

function randomColor() {
  // rot zwischen 0 - 255
  r = Math.floor(Math.random() * 256);

  // grün zwischen 0 - 255
  let g = Math.floor(Math.random() * 256);

  // blau zwischen 0 - 255
  let b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
