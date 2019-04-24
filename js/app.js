
/* Phase 1
1. Set up event listeners to receive input from choices. (controller)
2. Store the choice selected. (model)
3. Update the view to show the chosen option. (view)
*/

// 1. Set up event listeners
document.getElementById('rock').addEventListener('click',choiceMade);
document.getElementById('paper').addEventListener('click',choiceMade);
document.getElementById('scissors').addEventListener('click',choiceMade);




function choiceMade(){
    console.log();
};




var controller = (function (){

    return{

    };
});

var model = (function (){

    return{

    };
});

var view = (function(){

    const DOM = {
        choice: '.objectChoice'
    };

    return {

    };
}); 

