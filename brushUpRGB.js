var numSquares = 6
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.getElementById("displayMessage");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
colorDisplay.textContent = pickedColor;

var h1 = document.querySelector("h1");

for (var i = 0; i < squares.length; i++) {

    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            h1.style.backgroundColor = clickedColor;
            displayMessage.textContent = "Correct :) ";
            resetButton.textContent = "Play Again ?";
            changeColorOnCorrect(clickedColor);
        } else if (clickedColor !== pickedColor) {
            displayMessage.textContent = "Wrong :< "
            this.style.backgroundColor = "#232323";
        }
    });
}

function changeColorOnCorrect(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for(var i=0 ; i<num ; i++){
        arr.push(genrateColor());
    }
    return arr;
}

function genrateColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click" , function(){
    h1.style.backgroundColor = "steelblue";
    numSquares = 6
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    displayMessage.textContent = " ";
    resetButton.textContent = "New Colors"
});

easyButton.addEventListener("click" , function(){
    displayMessage.textContent = " ";
    h1.style.backgroundColor = "steelblue";
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
})

hardButton.addEventListener("click" , function(){
    displayMessage.textContent = " ";
    h1.style.backgroundColor = "steelblue";
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
})