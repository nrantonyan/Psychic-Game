var lettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var lives = 10;
var letterGuessed = [];
var chosen = lettersArr[Math.floor(Math.random() * lettersArr.length)];


function reset() {
    lives = 10;
    wins = 0;
    losses = 0;
    letterGuessed = [];
    chosen = lettersArr[Math.floor(Math.random() * lettersArr.length)];
}


document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(letterGuessed);

    if (letterGuessed === chosen) {
        alert("That is correct, it was " + chosen)
        wins++;
        reset();
    }

    if (letterGuessed != chosen) {
        alert("It was actually " + chosen + " Try again");
        losses++;
        lives--;
        if (lives===0) {
            alert("I knew you didn't have it in you, try again next year")
            reset();
        }
    }

    
    $("#lives").text("Lives Left: " + lives);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#guessed").text("Previously Guessed Letter: " + letterGuessed);
};

