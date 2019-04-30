
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

const data = {
    userChoice: [],
    computerChoice: [],
    userChoiceID: [],
    computerChoiceID: []
};

function choices(x) {
    data.userChoice[data.userChoice.length] = x.id; // this passes in the id of the html dom element button as a STRING.
    if (x.id == 'rock'){
        data.userChoiceID[data.userChoiceID.length] = 1;
        //console.log(data.userChoiceID);
    } else if (x.id == 'paper'){
        data.userChoiceID[data.userChoiceID.length] = 2;
        //console.log(data.userChoiceID);
    } else if (x.id == 'scissors') {
        data.userChoiceID[data.userChoiceID.length] = 3;
        //console.log(data.userChoiceID);
    }
    generateComputerChoice();
};

function updateView(){
    //console.log('userChoice: ' + data.userChoice);
    //console.log('computerChoice: ' + data.computerChoice);
    document.getElementById('userGameDisplay').innerHTML = data.userChoice[data.userChoice.length - 1]; // sets the inner element of #userGameDisplay to array item.
    document.getElementById('compGameDisplay').innerHTML = data.computerChoice[data.computerChoice.length - 1];
    previousChoices();
};

function generateComputerChoice(){
    let y = Math.floor((Math.random() * 3) + 1);
    switch(y){
        case 1:
            data.computerChoice[data.computerChoice.length] = 'rock'; // this passes in 'rock' into the data object as a STRING.
            data.computerChoiceID[data.computerChoiceID.length] = y;
            //console.log(data.computerChoiceID);
            break;
        case 2:
            data.computerChoice[data.computerChoice.length] = 'paper'; // this passes in 'paper' into the data object as a STRING.
            data.computerChoiceID[data.computerChoiceID.length] = y;
            //console.log(data.computerChoiceID);
            break;
        case 3:
            data.computerChoice[data.computerChoice.length] = 'scissors'; // this passes in 'scissors' into the data object as a STRING.
            data.computerChoiceID[data.computerChoiceID.length] = y;
            //console.log(data.computerChoiceID);
            break;
        default:
        document.getElementById('.compGameDisplay').innerHTML = 'Error'; // this passes in 'error' into the data object as a STRING.
    };
    chooseWinner(y);
    updateView();
    
};

function chooseWinner(compChoice){
    if (data.userChoiceID[data.userChoiceID.length-1] == 1 && compChoice == 1){
        console.log('issa tie!');
    } else if (data.userChoiceID[data.userChoiceID.length-1] == 1 && compChoice == 2){
        console.log('Computer Wins!');
    } else if (data.userChoiceID[data.userChoiceID.length-1] == 1 && compChoice == 3){
        console.log('User Wins!');
    } else if (data.userChoiceID[data.userChoiceID.length-1] == 2 && compChoice == 1){
        console.log('User Wins!');
    } else if (data.userChoiceID[data.userChoiceID.length-1] == 2 && compChoice == 2){
        console.log('issa tie!');
    } else if (data.userChoiceID[data.userChoiceID.length-1] == 2 && compChoice == 3){
        console.log('Computer Wins!');
    } else if (data.userChoiceID[data.userChoiceID.length-1] == 3 && compChoice == 1){
        console.log('Computer Wins!');
    } else if (data.userChoiceID[data.userChoiceID.length-1] == 3 && compChoice == 2){
        console.log('User Wins!');
    } else if (data.userChoiceID[data.userChoiceID.length-1] == 3 && compChoice == 3){
        console.log('issa tie!');
    }

};

function previousChoices(){

    if (data.userChoice.length == 1){
        document.getElementById('prevUserChoice').innerHTML = 'No previous choice';
        document.getElementById('prevCompChoice').innerHTML = 'No previous choice';           
    } else if (data.userChoice.length > 1) {
        document.getElementById('prevUserChoice').innerHTML = "<p>" + data.userChoice[data.userChoice.length - 2] + "</p>";
        document.getElementById('prevCompChoice').innerHTML = "<p>" + data.computerChoice[data.computerChoice.length - 2] + "</p>"; 
    };

    // Tests for trying to get last 5 throws to show up on page.

    // Test 1 - successful, but I could only get the last previous item to show up.

    /*     if (data.userChoice.length == 1){
        document.getElementById('prevUserChoice').innerHTML = 'No previous choice';
        document.getElementById('prevCompChoice').innerHTML = 'No previous choice';           
    } else if (data.userChoice.length > 1) {
        document.getElementById('prevUserChoice').innerHTML = "<p>" + data.userChoice[data.userChoice.length - 2] + "</p>";
        document.getElementById('prevCompChoice').innerHTML = "<p>" + data.computerChoice[data.computerChoice.length - 2] + "</p>"; 
    };*/

    // Test 2 - successful, but i could only print out the previous item to show up using map function

    /* if (data.userChoice.length == 1){
        document.getElementById('prevUserChoice').innerHTML = 'No previous choice';
        document.getElementById('prevCompChoice').innerHTML = 'No previous choice';
    } else if (data.userChoice.length > 1){
        data.userChoice.map(function (elements){
            document.getElementById('prevUserChoice').innerHTML = '<p id="prevUserChoice" class="roundChoice">' + elements + '</p>';
        });
        data.computerChoice.map(function (elements){
            document.getElementById('prevCompChoice').innerHTML = '<p id="prevUserChoice" class="roundChoice">' + elements + '</p>';
        });
    }; */

    // Test 3 - Failed, could not delete previous child and replace with new child

    /* var parent, childUser, thing, para, node, div;
    parent = document.getElementById('previous');
    childUser = document.getElementById('prevChoices');
    parent.removeChild(childUser);
    thing = '.prevChoices';
    if (data.userChoice.length == 1){
        para = document.createElement('div');
        para.classList.add('prevChoices');
        node = document.createTextNode("No previous choice");
        para.appendChild(node);
        parent.appendChild(para);
    } else if (data.userChoice.length > 1){
        para = document.createElement('div');
        para.classList.add('prevChoices');
        data.userChoice.map(function (element){
            document.querySelector(thing).insertAdjacentHTML('afterend', ("<p>" + element + "</p>"));
        });
    }; */

    // Test 4 - Failed, got a return of null when creating items greater than 1

/*  var newChildDiv;
    var paraMessage;
    //Delete Previous Divs
    var parent = document.getElementById('previous');
    var childDiv = document.getElementById('prevChoices');
    parent.removeChild(childDiv);

    //Determine if we have < 1 or > 1 items in our data
    if (data.userChoice.length == 1){
        //Append text for < 1 items
        newChildDiv = document.createElement('div'); //creates a new div element
        paraMessage = document.createTextNode('No Previous Choice'); //creates a new message to indicate no previous choices have been made
        newChildDiv.setAttribute("id","prevChoices"); // adds id=prevChoices to div element
        newChildDiv.appendChild(paraMessage); // adds paragraph to new div
        parent.appendChild(newChildDiv); // new div element gets added to the parent node

    } else if (data.userChoice.length > 1){
        newChildDiv = document.createElement('div'); //creates a new div element
        paraMessage = data.userChoice.map(function (element){
            var newP = document.createElement('p');
            var data = document.createTextNode(element);
            newP.appendChild(data);
        })
        newChildDiv.setAttribute("id","prevChoices"); // adds id=prevChoices to div element
        newChildDiv.appendChild(paraMessage); // adds paragraph to new div
        parent.appendChild(newChildDiv); // new div element gets added to the parent node
    }; */
};


 // Map method example

/* const yoyos = ['A','B','C'];
yoyos.map(function (yoyo){
    console.log(yoyo + 'mapped');
}); */
