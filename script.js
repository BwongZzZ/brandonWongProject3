// Treasure Hunt Game 


// Check whether out document is ready for JS

// Namespace gameApp
const gameApp = {};

// Simple array to randomize where to bury treasure from the following 3 islands
const randomTreasure = [
    1,
    2,
    3
] 

// User startingScore is 0, is a let variable to change if score is increased.
let startingScore = 0;

// User earns 100 points if treasure is found
const treasureScore = 100;

// User startingShovel is 1, is a let variable to change if score is increased.
let startingShovel = 1;

// create a variable randomizer function for reuseability
const randomizer = function(array) {
    const randomArrayIndex = Math.floor(Math.random() * array.length);
    return array[randomArrayIndex];
}


// initiate the js functions for game app
gameApp.init = function () {

    // If the text input value "Start Digging" is filled with text, allow the button "Start Digging" to activate the restart game function.

    // when page loads focus and active on the input
    $(`input`).focus();

    // hide elements from page until initiated to show
    $(`.hideUntilSubmitted`).hide();

    // When the the user to press the `Start Digging` to Initiate the game (Only if name input has been filled)
    // input the user to type their name (requirement)
    $(`form`).on(`submit`, function(event) {

        // check if form is submitted
        console.log(`Start Digging button has been submitted`);

        // Prevent the default behaviour of the page from refreshing
        event.preventDefault();

        // Show all hidden elements from page until input button "Start Digging" is filled and clicked
        $(`.hideUntilSubmitted`).show();

        // 1) Once the text input and input button "Start Digging" is filled and clicked, append the typed text input into the li class "playerName".
        const userNameInput = $(`#name`).val();

        // How to store the input text placeholder value to append???
        $(`.playerName`).append(` ${userNameInput}`);   
        
        // 2) Once the text input and input button "Start Digging" is filled and clicked, update the li class "playerScore" to zero.
        $(`.playerScore`).append(` ${startingScore}`);
        
        // 3) Once the text input and input button "Start Digging" is filled and clicked, update the li class "shovelRemaining" to one.
        $(`.shovelRemaining`).append(` ${startingShovel}`);

        // 5) Randomizer to place a class of .treasure on one of the following islands randomly and store the value of 100 points.
        // buryRandomTreasure variable to hold the randomizer function
        const buryRandomTreasure = randomizer(randomTreasure);

        // If statement conditional, will randomly place a class of .treasureBuried on one of the following random three <li> selector with the class of island1, island2, island3. 
        if (buryRandomTreasure === 1) {
            $(`.island1`).addClass(`treasureBuried`);
            console.log(`Island 1 🤫 Treasure Buried!`);
        } else if (buryRandomTreasure === 2) {
            $(`.island2`).addClass(`treasureBuried`);
            console.log(`Island 2 🤫🤫 Treasure Buried!!`);
        } else if (buryRandomTreasure === 3) {
            $(`.island3`).addClass(`treasureBuried`);
            console.log(`Island 3 🤫🤫🤫 Treasure Buried!!!`);
        } else {
            console.log(`error`);
        }
        
        $(`#startDigging`).hide();
        // checking the submit input has been committed
        console.log(`Game has initiated!`);
    });
        

    // If statement to update if the user clicked an island that has treasure or nothing, for each island result. When treasureBuried is found append game status and add 100 points if <li> with class of treasureBuried is found. 

    $(`li`).on(`click`, function () {
        if ($(this).hasClass(`treasureBuried`)) {
            console.log(`🥳 TREASURE FOUND 💎 💯 POINTS!!!`);
            $(`.updatedGameInfo`).empty().fadeOut().fadeIn().append(`🥳 TREASURE FOUND 💎 💯 POINTS!!!`);
            $(`.playerScore`).empty().fadeOut().fadeIn().append(`Player's Score: ${startingScore + treasureScore} Points`);
        } else {
            console.log(`😭 Nothing Found 0 Points `);
            $(`.updatedGameInfo`).empty().fadeOut().fadeIn().append(`😭 Nothing Found 0 Points`);
        }
    });

    // Have an event listener on the li with class of ".island" when clicked console log.
    $(`.island`).on(`click`, function () {

        const listItemIslandSearched = `<li class=".islandSearched">🔍 Searched Island 🔎</li>`;

        // on click empties the li initiates a fadeOut and fadeIn animation, and appends <li> with the variable listItemIslandSearched.
        $(this).empty().fadeOut().fadeIn().append(listItemIslandSearched);
        $(`.island`).off(`click`);

        // ***** use focusWithin() to target elements within the parent element  to apply a focus state. 
        

        // on click empties the li initiates a fadeOut and fadeIn animation, and appends class .shovelRemaining by subtracting one shovel from the Shovel Remaining count on the game status.
        $(`.shovelRemaining`).empty().fadeOut().fadeIn().append(`Shovels Remaining: ${startingShovel - 1} Points`);

        // check if class li ".island" is initiated when clicked
        console.log(`island has been Searched`);

            
    });
    
    // To restart the game by refreshing the page, will use location.reload to do so, by targeting the input button with the id #playAgain
    // if (location.reload() =)
    //     location.reload(`#playAgain`);
    // });
}


$(function () {
    gameApp.init();
});