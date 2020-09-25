
let button = document.getElementById('button-one');


let mysteryButton = document.getElementById('button-two');


function rgb(num) {
    return Math.floor(Math.random() * num);
}


let changeColor = function (event) {
    let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
    event.target.style.backgroundColor = randomColor;
}

button.onclick = changeColor;

mysteryButton.onwheel = changeColor;