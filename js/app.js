
/* Phase 1
1. Set up event listeners to receive input from choices. (controller)
2. Store the choice selected. (model)
3. Update the view to show the chosen option. (view)
*/

/* Phase 2
1. Generate the past 5 choices for both user and computer
2. Choose a winner
3. Keep score
*/

// Data Structure
const data = {
    userChoice: [],
    computerChoice: []
};

// Main controller function for program. This is where we call other functions and drive through the app.
function controller(x) {
    let player = setUserChoice(x);
    let computer = generateComputerChoice();
    console.log('user = ' + player + ' ' + 'computer = ' + computer);
    chooseWinner(player, computer);
    updateView(player, computer);
    previousChoices();
};

// grabs user's button choice
function setUserChoice(x) {
    data.userChoice[data.userChoice.length] = x.id; // this passes in the id of the html dom element button as a STRING.
    return x.id;
}

// creates a random number and then assigns a choice to the computer
function generateComputerChoice() {
    let computerGeneratedChoice;
    let y = Math.floor((Math.random() * 3) + 1);
    switch (y) {
        case 1:
            computerGeneratedChoice = 'rock';
            data.computerChoice[data.computerChoice.length] = computerGeneratedChoice;
            break;
        case 2:
            computerGeneratedChoice = 'paper';
            data.computerChoice[data.computerChoice.length] = computerGeneratedChoice;
            break;
        case 3:
            computerGeneratedChoice = 'scissors';
            data.computerChoice[data.computerChoice.length] = computerGeneratedChoice;
            break;
    };
    return computerGeneratedChoice;

};

// Compare human choice vs computer choice and declare a winner.
function chooseWinner(human, ai) {
    if (human === 'rock') {
        if (ai === 'rock') {
            document.getElementById('gameResult').innerHTML = 'It\'s a tie!';
        } else if (ai === 'paper') {
            document.getElementById('gameResult').innerHTML = 'computer wins';
        } else if (ai === 'scissors') {
            document.getElementById('gameResult').innerHTML = 'human wins';
        };
    } else if (human === 'paper') {
        if (ai === 'rock') {
            document.getElementById('gameResult').innerHTML = 'human wins';
        } else if (ai === 'paper') {
            document.getElementById('gameResult').innerHTML = 'It\'s a tie!';
        } else if (ai === 'scissors') {
            document.getElementById('gameResult').innerHTML = 'computer wins';
        };
    } else if (human === 'scissors') {
        if (ai === 'rock') {
            document.getElementById('gameResult').innerHTML = 'computer wins';
        } else if (ai === 'paper') {
            document.getElementById('gameResult').innerHTML = 'human wins';
        } else if (ai === 'scissors') {
            document.getElementById('gameResult').innerHTML = 'It\'s a tie!';
        };
    };
};

// DOM view of the choices both user and computer made.
function updateView(user, comp) {
    document.getElementById('userGameDisplay').innerHTML = user;  // sets the inner element of #userGameDisplay to array item.
    document.getElementById('compGameDisplay').innerHTML = comp;
};

// Shows the past 5 choices both computer and user have picked.
function previousChoices() {

    if (data.userChoice.length == 1) {
        document.getElementById('prevUserChoice').innerHTML = 'No previous choice';
        document.getElementById('prevCompChoice').innerHTML = 'No previous choice';
    } else if (data.userChoice.length > 1) {
        // document.getElementById('prevUserChoice').innerHTML = data.userChoice[data.userChoice.length - 2];
        document.getElementById('prevUserChoice').innerHTML = populateUserHistoryDisplay();
        document.getElementById('prevCompChoice').innerHTML = populateCompHistoryDisplay();
    };
};

// ???
function populateUserHistoryDisplay(){ 
    let lastFiveUserRounds = "";
    let limitOfFive = data.userChoice.length > 5 ? 0 : data.userChoice.length - 5;
    for (i = data.userChoice.length - 1; i > limitOfFive; i--) {
        if (data.userChoice[i] === 'undefined') {
            lastFiveUserRounds += "<p>" + "No previous choice" + "</p>";
        } else {
            lastFiveUserRounds += "<p>" + data.userChoice[i] + "</p>";
        }
    };
    return lastFiveUserRounds;
};

// ???
function populateCompHistoryDisplay(){
    var lastFiveCompRounds = "";
    var arrayLen = data.computerChoice.length;
    var limitOfFive = data.computerChoice.length > 5 ? 0 : data.computerChoice.length-5;
    for (i = data.computerChoice.length-1; i > limitOfFive; i--) { 
        lastFiveCompRounds += "<p>" + data.computerChoice[i] + "</p>";
      };
    return lastFiveCompRounds;
};