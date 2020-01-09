// External Package
var inquirer = require("inquirer");

// Internal Module
var Word = require("./Words");

// Array and Local Variables for the game
var answers = [
    "fried chicken",
    "buffalo wings",
    "chili dog",
    "chips",
    "ice cream",
    "barbeque",
    "chicken fried steak",
    "peanut butter and jelly",
    "macaroni and cheese",
    "gumbo",
    "philly cheesesteak",
    "french fries",
    "sushi",
    "popcorn",
    "mashed potatoes",
    "Burgers",
    "thanksgiving turkey",
    "california roll",
    "smores"
];

var answerCount = 0,
    guessCount = 12,
    usedGuess = [];

//Play the Game

console.log("\t\t<-----  Can You Guess these American Favorite things to Eat ? ----->\n");

//This displays the word with dashes to start the game
function question() {
    if (answerCount < answers.length) {
        answer = new Word(answers[answerCount]);
        answer.toString();
        guessWord();
    } else {
        console.log("\n\n\t\t<----- Thanks for playing!!  ----->");
    }

    // this function takes in the user guess, checks that it is a letter and runs the game
    function guessWord() {
        inquirer
            .prompt([{
                name: "guess",
                message: "Enter any letter: ",
                validate: function checkInput(name) {
                    var reg = /^[a-z]$/;
                    return reg.test(name) || "please enter a letter between 'a' and 'z'"
                }
            }])
            .then(function (input) {
                // console.log(answer.word);
                console.log("guesss here: " + input.guess);
                console.log(answer.word.indexOf(input.guess));
                if ((usedGuess.indexOf(input.guess) < 0) && (answer.word.indexOf(input.guess) < 0)) {
                    guessCount--;
                    usedGuess.push(input.guess);
                }
                if (usedGuess.indexOf(input.guess) >= 0) {
                    console.log("\n\t\t💩  You've already used '" + input.guess + "'  💩\n");
                }

                console.log("\n\t" + guessCount + " guessess remaining!\n");
                answer.wordGuess(input.guess);
                console.log("\t\t" + answer.newWord.join(" ").toString() + "\n");

                if (answer.word.join("") === answer.newWord.join("") && guessCount > 0) {
                    console.log("\tGreat Job!  🍴  Are you getting hungry?  🍴");
                    console.log("\n\t🎯\tTry this one!\t🎯\n");
                    usedGuess = []
                    answerCount++;
                    guessCount = 12;
                    question();
                } else {
                    nextQuestion();
                }
            });

        //keeps track of the guess count and asks new questions
        function nextQuestion() {
            if (guessCount > 0) {
                guessWord();
            } else {
                console.log("<----- the word was '" + answer.word.join("") + "' ----->");
                console.log("\n\t🎯\tgive this one a shot!\t🎯\n");
                usedGuess = []
                answerCount++;
                guessCount = 12;
                question();
            }
        }
    }
}

question();