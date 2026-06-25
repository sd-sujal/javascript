const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redValue = document.getElementById("redValue");
const greenValue = document.getElementById("greenValue");
const blueValue = document.getElementById("blueValue");

const rgbText = document.getElementById("rgbText");
const colorBox = document.getElementById("colorBox");

function updateColor() {

    const r = red.value;
    const g = green.value;
    const b = blue.value;

    redValue.textContent = r;
    greenValue.textContent = g;
    blueValue.textContent = b;

    const color = `rgb(${r}, ${g}, ${b})`;

    document.body.style.background = color;
    colorBox.style.background = color;

    rgbText.textContent = color;
}

red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);

updateColor();