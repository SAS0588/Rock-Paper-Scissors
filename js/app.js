
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

function controller(x) {
    let player = setUserChoice(x);
    let computer = generateComputerChoice();
    console.log('user = ' + player + ' ' + 'computer = ' + computer);
    chooseWinner(player, computer);
    updateView(player, computer);
    previousChoices();
};

function setUserChoice(x) {
    data.userChoice[data.userChoice.length] = x.id; // this passes in the id of the html dom element button as a STRING.
    return x.id;
}

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

function updateView(user, comp) {
    document.getElementById('userGameDisplay').innerHTML = user;  // sets the inner element of #userGameDisplay to array item.
    document.getElementById('compGameDisplay').innerHTML = comp;
};

function previousChoices() {

    if (data.userChoice.length == 1) {
        document.getElementById('prevUserChoice').innerHTML = 'No previous choice';
        document.getElementById('prevCompChoice').innerHTML = 'No previous choice';
    } else if (data.userChoice.length > 1) {
        // document.getElementById('prevUserChoice').innerHTML = data.userChoice[data.userChoice.length - 2];
        document.getElementById('prevUserChoice').innerHTML = populateHistoryDisplay();
        document.getElementById('prevCompChoice').innerHTML = data.computerChoice[data.computerChoice.length - 2];
    };
};

function populateHistoryDisplay(){
    var lastFiveRounds = "";
    var arrayLen = data.userChoice.length;
    var limitOfFive = data.userChoice.length > 4 ? 0 : data.userChoice.length-5;
    for (i = data.userChoice.length-1; i > limitOfFive; i--) { 
        lastFiveRounds += data.userChoice[i] + "\n";
      }
    return lastFiveRounds;
}