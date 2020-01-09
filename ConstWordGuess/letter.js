// ? letter Constructor Function
var Letter = function (letter) {
    this.letter = letter.toLowerCase();
    this.isGuessed = false;

    // changes value to true if it was guessed correctly
    // the beginning letters word will be shown without letters in this function
    this.guessLetter = function (guess) {
        this.guess = guess;

        if (this.guess === this.letter) {
            this.isGuessed = true;
            return this.letter;

        } else if (this.letter === ' ') {
            return ' ';

        } else {
            this.isGuessed = false;
            return '_';
        }
    };

    //returns the character if the letter has been guessed, or an underscore if the letter has not been guessed
    this.showLetter = function (guess) {
        this.guess = guess;

        if (this.guess === this.letter) {
            this.isGuessed = true;
            return this.letter;

        } else if (this.letter === ' ') {
            return ' ';

        } else {
            this.isGuessed = false;
            return '_';
        }
    }
}

// ! Export
module.exports = Letter;