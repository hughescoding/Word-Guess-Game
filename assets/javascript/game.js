console.log('Application starting...')

//- Create a list of words

var wordArray = ["mango", "apple", "orange", "grape", "watermelon", "strawberry", "plum",
"pear", "kiwi", "papaya", "guava", "clementine", "peach", "grapefruit",]

//Press any key to start (how do you start it)
// class = start-text (Make this go away when you start)

var lettersGuessed = []
var currentWord = []
var wordToMatch
var numGuess
var wins = 0

// if letterGuessed.push(event.key.toLowerCase())
// Next, we give Javascript a function to execute when onkeypress fires.

document.onkeypress = function (event) {
    var displayWords = document.getElementById("current-word");

    //userText.textContent = event.key;
     var randomWord = wordGenerator();
     console.log("Random Word: " + randomWord);
    var tempString = "<p>";
   
    // output the stuff
    for (var i = 0; i < randomWord.length; i++) {
        if (lettersGuessed.includes(randomWord[i])) {
            tempString += randomWord[i] + " ";
        } else {
            tempString += "_ ";
        }
      
    }
    // end paragraph
    tempString += "</p>";
    console.log(tempString);
    displayWords.innerHTML = tempString;
    // Select one randomly (Random Word Generator)
}
var wordGenerator = function () {
    var wordIndex = [Math.floor(Math.random() * wordArray.length)];
    return wordArray[wordIndex];
}

//- Display the word
function updateDisplay() {
    document.getElementById("total-wins").innerText = wins
    document.getElementById("current-word").innerText = currentWord.join("")
    document.getElementById("remaining-guesses").innerText = numGuess
    document.getElementById("guessed-letters").innerText = guessedLetters.join(" ")
}
// 1. Press any key to play again