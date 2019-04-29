/* // Store the choices
const choice =  {
    rock: document.getElementById('rock').innerHTML,
    paper: document.getElementById('paper').innerHTML,
    scissors: document.getElementById('scissors').innerHTML
};

// Set up event listeners
document.getElementById('rock').addEventListener('click', function(){
    choiceMade(choice.rock);
});
document.getElementById('paper').addEventListener('click', function(){
    choiceMade(choice.paper);
});
document.getElementById('scissors').addEventListener('click', function(){
    choiceMade(choice.scissors);
});

// Update view to show the chosen option
function choiceMade(element){
    console.log(element);
} */

/* function choices(x) {
    console.log(x.id);
} */

/* Phase 1
1. Set up event listeners to receive input from choices. (controller)
2. Store the choice selected. (model)
3. Update the view to show the chosen option. (view)
*/

const data = {
    userChoice: [],
    computerChoice: []
};

function choices(x) {
    data.userChoice[data.userChoice.length] = x.id; // this passes in the id of the html dom element button.
    generateComputerChoice();
};

function updateView(){
    console.log('userChoice: ' + data.userChoice);
    console.log('computerChoice: ' + data.computerChoice);
    document.getElementById('userGameDisplay').innerHTML = data.userChoice[data.userChoice.length - 1];
    document.getElementById('compGameDisplay').innerHTML = data.computerChoice[data.computerChoice.length - 1];
    previousChoices();
};

function generateComputerChoice(){
    let x = Math.floor((Math.random() * 3) + 1);
    switch(x){
        case 1:
            data.computerChoice[data.computerChoice.length] = 'rock';
            break;
        case 2:
            data.computerChoice[data.computerChoice.length] = 'paper';
            break;
        case 3:
            data.computerChoice[data.computerChoice.length] = 'scissors';
            break;
        default:
        document.getElementById('.compGameDisplay').innerHTML = 'Error';
    };
    updateView();
    
};

function previousChoices(){
/*     if (data.userChoice.length == 1){
        document.getElementById('prevUserChoice').innerHTML = 'No previous choice';
        document.getElementById('prevCompChoice').innerHTML = 'No previous choice';           
    } else if (data.userChoice.length > 1) {
        document.getElementById('prevUserChoice').innerHTML = "<p>" + data.userChoice[data.userChoice.length - 2] + "</p>";
        document.getElementById('prevCompChoice').innerHTML = "<p>" + data.computerChoice[data.computerChoice.length - 2] + "</p>"; 
    };
};*/

    if (data.userChoice.length == 1){
        document.getElementById('prevUserChoice').innerHTML = 'No previous choice';
        document.getElementById('prevCompChoice').innerHTML = 'No previous choice';
    } else if (data.userChoice.length > 1){
        data.userChoice.map(function (elements){
            document.getElementById('prevUserChoice').innerHTML = '<p id="prevUserChoice" class="roundChoice">' + elements + '</p>';
        });
        data.computerChoice.map(function (elements){
            document.getElementById('prevCompChoice').innerHTML = '<p id="prevUserChoice" class="roundChoice">' + elements + '</p>';
        });
    };
};

/* const yoyos = ['A','B','C'];
yoyos.map(function (yoyo){
    console.log(yoyo + 'mapped');
}); */
