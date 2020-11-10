// Treasure Hunt Game 


// Check whether out document is ready for JS

// Namespace gameApp
const gameApp = {};

// create a global randomizer for reuseability


// initiate the js functions for game app
gameApp.init = function () {

    // If the text input value "Start Digging" is filled with text, allow the button "Start Digging" to activate the restart game function.

    // when page loads focus on the input
    $(`input`).focus();

    // input the user to type their name (requirement)
    $(`form`).on(`submit`, function(event) {
        // When the the user to press the `Start Digging` to Initiate the game (Only if name input has been filled)

        // check if form is submitted
        console.log(`Start Digging button has been submitted`);

        // Prevent the default behaviour of the page from refreshing
        event.preventDefault();
        
        // 1) Once the text input and input button "Start Digging" is filled and clicked, append the typed text input into the li class "playerName".
        const userNameInput = $(`#name`).val();

        // How to store the input text placeholder value to append???
        $(`.playerName`).append(` ${userNameInput}`);   
        
        // 2) Once the text input and input button "Start Digging" is filled and clicked, update the li class "playerScore" to zero.
        $(`.playerScore`).append(` 0`);
        
        // 3) Once the text input and input button "Start Digging" is filled and clicked, update the li class "shovelRemaining" to one.
        $(`.shovelRemaining`).append(` 1`);
        
        // checking the submit input has been committed
        console.log(`Game has initiated!`);
    });
        
    // Have an event listener on the li with class of ".island" when clicked console log.
    $(`.island`).on(`click`, function () {

        const listItemIslandSearched = `<li class=".islandSearched">Searched Island</li>`;

        // empties the li when clicked, provides an fadeOut and fadeIn animation fo the new li appended with the class .islandSearched.
        $(this).empty();
        $(this).on(`click`).fadeOut();
        $(this).on(`click`).fadeIn();
        $(this).on(`click`).append(listItemIslandSearched);

        // check if class li ".island" is initiated when clicked
        console.log(`island has been Searched`);

        // if conditional statement to determine which of the 3 islands are being clicked

            


    });

}


$(function () {
    gameApp.init();
});