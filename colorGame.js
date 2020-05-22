var numsquares = 6;
var colors = generateRandomColors(numsquares);

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor(); //randomColor();  //function() for random color picking
var colorDisplay = document.querySelector('.colorDisplay');
var headingContainer = document.querySelector('.heading-container');
var messageDisplay = document.getElementById('message');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

resetButton.addEventListener('click', function () {
    //generate new colors
    //pick random color
    //change colors of square
    //keep record of easy and hard clicks

    colors = generateRandomColors(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = 'New colors';
    messageDisplay.textContent = '';

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    headingContainer.style.backgroundColor = '#3569ca';

});



easyBtn.addEventListener('click', function () {

    easyBtn.classList.add('selected');

    hardBtn.classList.remove('selected');

    numsquares = 3;
    colors = generateRandomColors(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }

});

hardBtn.addEventListener('click', function () {
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');

    numsquares = 6;
    colors = generateRandomColors(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = 'block';
    }

});

colorDisplay.textContent = pickedColor; //bgColor;


for (var i = 0; i < squares.length; i++) {
    //add initial colors to square
    squares[i].style.backgroundColor = colors[i];

    //add event listener
    squares[i].addEventListener('click', function () {
        //grab color of picked square
        var clickedColor = this.style.backgroundColor;
        //compare color with picked  color
        if (clickedColor === pickedColor) {
            //alert('right');
            changeColors(clickedColor);
            //squares.style.backgroundColor = pickedColor;
            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play Again?';
        } else {
            //alert('wrong');
            //fades away
            this.style.backgroundColor = '#232323';
            //center message
            messageDisplay.textContent = 'Try Again:(';
        }
    });
}

function changeColors(color) {

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    headingContainer.style.backgroundColor = color;

}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num) {
    //create an array
    var arr = [];
    //repeate num times
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;

}

function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);

    return "rgb(" + x + ", " + y + ", " + z + ")";
}