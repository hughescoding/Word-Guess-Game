//tells me the JS is alive
console.log('Application starting...')

//defines the array of word choices

var wordArray = ["mango", "apple", "orange", "grape", "watermelon", "strawberry", "plum",
    "pear", "kiwi", "papaya", "guava", "clementine", "peach", "grapefruit",]

//Boolean to keep JS from running nutil user starts
var gameStarted = false
//need a starting point for Guesses
var remainingGuesses = 0
//need a starting point for wins counter
var wins = 0
//connecting the JS to the html so we can display output
var currentWord = document.getElementById("current-word")
var showLetters = document.getElementById("guessed-letters")
var showremainingGuesses = document.getElementById("remaining-guesses")
var showWins = document.getElementById("total-wins")
//available choices
var letterChoices = "abcdefghijklmnopqrstuvwxyz"
//current random word
var randomWord = []
//picks word from wordArray
var wordGenerator = function () {
    word = wordArray[Math.floor(Math.random() * wordArray.length)].toLowerCase()
    console.log(word);
    return word
}
//game start function
var start = function () {
    gameStarted = true
    blanks = []
    //empty var for letters user presses
    lettersGuessed = []
    showLetters.innerHTML = lettersGuessed
    randomWord = wordGenerator()
    for (i = 0; i < randomWord.length; i++) {
        blanks[i] = "_"
    }
    currentWord.innerHTML = blanks.join(" ")
    remainingGuesses = 10
    showremainingGuesses.innerHTML = remainingGuesses
}
var endGame = function () {
    gameStarted = false
}

document.onkeyup = function (event) {
    var userEntry = event.key.toLowerCase()
    if (gameStarted === false) {
        start()
    }
    else {
        if (gameStarted === true) {
            //determine if key pressed is a match
            if (letterChoices.includes(userEntry)) {
                
                //alert if the letter was used already
                if (lettersGuessed.includes(userEntry)) {
                    alert("You can only guess a letter once")
                }
                //add letter to list of guessed letters and subtract from remaining guesses
                else {
                    lettersGuessed.push(userEntry.toLowerCase())
                    showLetters.innerHTML = lettersGuessed
                    remainingGuesses--
                    showremainingGuesses.innerHTML = remainingGuesses
                }
                //checks for letter matches & displays
                for (i = 0; i < randomWord.length; i++) {
                    if (randomWord[i] === userEntry) {
                        blanks[i] = userEntry
                        currentWord.innerHTML = blanks.join(" ")
                        remainingGuesses++
                    }
                }
            }
            //game win or lose
            if (remainingGuesses === 0) {
                alert("You Lose! Try Again..")
                endGame()
            }
            else if (!blanks.includes("_")) {
                alert("You Win! Play Again..");
                wins++;
                endGame();
                showWins.innerHTML = wins;
                //didn't like that after the alert you had to hit a key for next word, added this
                start();
            }
        }
    }
}
