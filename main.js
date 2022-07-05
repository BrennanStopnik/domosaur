// Warm up challenges


// 1.
let span1 = document.querySelector(".mess-with-me");
span1.style.fontSize = '40px';

// 2.
let paraMess = document.querySelector("p.mess-with-me");
paraMess.style.backgroundColor = 'green';

// 3.
let hiddenDino = document.querySelector("#hide-me");
hiddenDino.style.display = "none";

// 4.
let triGuy = document.querySelector("#triceratops");
triGuy.style.width = "324px";



// Event Listener Challenges


// 1.
span1.addEventListener('click', greenClick);
function greenClick(){
    span1.style.color = 'orange';
}

// 2.
triGuy.addEventListener('click', redBorder);
function redBorder(){
    triGuy.style.border = "4px dotted red";
}

// 3.
let feathers = document.querySelector('#feathers');
feathers.addEventListener('click', halfBye)
function halfBye(){
    feathers.style.opacity = '0.5'
}

// 4.
let dinoRow = document.querySelector("#row");
let mrButton = document.querySelector("#toggle");
mrButton.addEventListener('click', bGChanger);
function bGChanger(){
    if (dinoRow.style.backgroundColor === ""){
        dinoRow.style.backgroundColor = "goldenrod";
    } else if (dinoRow.style.backgroundColor === "goldenrod"){
        dinoRow.style.backgroundColor = "red";
    } else if (dinoRow.style.backgroundColor === "red"){
        dinoRow.style.backgroundColor = "blue";
    } else if (dinoRow.style.backgroundColor === "blue"){
        dinoRow.style.backgroundColor = "black";
    } else if (dinoRow.style.backgroundColor === "black"){
        dinoRow.style.backgroundColor = "goldenrod";
    } else {
        dinoRow.style.backgroundColor = "";
    }
}
// dinoRow.style.backgroundColor = "goldenrod";



// 5.
let bigBoy = document.querySelector("#biggify");
bigBoy.addEventListener("mouseenter", entered);

function entered(){
    bigBoy.style.width = "200px"
};




// Stretch Goals


// 1.
// See above in ELC #4

// 2.
bigBoy.addEventListener("mouseleave", leaving);
function leaving(){
    bigBoy.style.width = '162px';
};