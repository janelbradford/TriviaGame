// Internal Module
var Letter = require("./Letter");

// Constructor Function
var Word = function (word) {
    this.word = word.split("");
    this.letterArray = [];
    this.newWord = [];

    for (var i = 0; i < this.word.length; i++) {
        this.letterArray.push(new Letter(this.word[i]));
    }
};

//returns a string representing the word and displays each letter as an underscore to start the game.
Word.prototype.toString = function (guess) {
    this.guess = guess;
    for (var j = 0; j < this.word.length; j++) {
        if (this.word[j] === ' ') {
            console.log(' ');
        }
        this.newWord.push(this.letterArray[j].guessLetter(guess));
    }
    console.log("\t\t" + this.newWord.join(" ").toString() + "\n");
};

//This function takes a character (guess) as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
Word.prototype.wordGuess = function (guess) {
    for (var k = 0; k < this.word.length; k++) {
        if ((this.letterArray[k].showLetter(guess) !== '_') && (this.letterArray[k].showLetter(guess) !== ' ')) {
            this.newWord.splice(k, 1, guess)
        }
    };
};

//Export
module.exports = Word;