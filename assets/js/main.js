const thisColor = document.getElementById("thisColor");
const result = document.getElementById("result");

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
let rgb2 = 'rgb(' + g + ',' + b + ',' + r + ')';
let rgb3 = 'rgb(' + b + ',' + r + ',' + g + ')';
let rgb4 = 'rgb(' + r + ',' + b + ',' + g + ')';
let rgb5 = 'rgb(' + r + ',' + r + ',' + g + ')';

console.log(rgb)
console.log(rgb2)
console.log(rgb3)
console.log(rgb4)
console.log(rgb5)

thisColor.innerHTML = rgb;

let zufall = Math.floor(Math.random() * 3);
console.log(zufall);

function randBtn() {
    if (zufall == 0) {
        console.log("Case 0");
        document.getElementById("btn").style.background = rgb2;
        document.getElementById("btn2").style.background = rgb;
        document.getElementById("btn3").style.background = rgb4;
        document.getElementById("btn4").style.background = rgb5;
        document.getElementById("btn5").style.background = rgb3;
    } else if (zufall == 1) {
        console.log("Case 1");
        document.getElementById("btn").style.background = rgb5;
        document.getElementById("btn2").style.background = rgb3;
        document.getElementById("btn3").style.background = rgb2;
        document.getElementById("btn4").style.background = rgb;
        document.getElementById("btn5").style.background = rgb4;
    } else if (zufall == 2) {
        console.log("Case 2");
        document.getElementById("btn").style.background = rgb2;
        document.getElementById("btn2").style.background = rgb5;
        document.getElementById("btn3").style.background = rgb;
        document.getElementById("btn4").style.background = rgb3;
        document.getElementById("btn5").style.background = rgb4;
    }
}
randBtn();

for (let i of document.getElementsByTagName("button")) {
    i.addEventListener("click", () => {
        console.log("you chose: " + i.style.background);
        console.log("The answer is: " + rgb);
        let rgbColor = i.style.background;
        if (rgbColor == 'rgb(' + r + ', ' + g + ', ' + b + ')') {
            thisColor.style.color = rgb;
            result.innerHTML = "Das stimmt! Super! Reset me to guess again!"
        } else {
            result.innerHTML = "Das stimmt leider nicht. Versuche es nochmal."
        }
    })
}

function restart() {
    location.reload();
}