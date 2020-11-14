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
    
    // hides elements from page until initiated to show
    $(`.hideUntilSubmitted`).hide();
    $(`.hideUntilGameOver`).hide();

    // When the the user to press the `Start Digging` to Initiate the game (Only if name input has been filled)
    // input the user to type their name (requirement)
    $(`form`).on(`submit`, function(event) {

        // check if form is submitted
        // console.log(`Start Digging button has been submitted`);

        // Prevent the default behaviour of the page from refreshing
        event.preventDefault();

        // Show all hidden elements from page until input button "Start Digging" is filled and clicked
        $(`.hideUntilSubmitted`).show();

        const userNameInput = $(`#name`).val();

        // 1) Once the text input and input button "Start Digging" is filled and clicked, append the typed text input into the li class "playerName".
        $(`.playerName p`).append(` <span class="goldVariable">${userNameInput}</span>`);   
        
        // 2) Once the text input and input button "Start Digging" is filled and clicked, update the li class "playerScore" to zero.
        $(`.playerScore p`).append(` <span class="goldVariable">${startingScore}</span>`);
        
        // 3) Once the text input and input button "Start Digging" is filled and clicked, update the li class "shovelsLeft" to one.
        $(`.shovelsLeft p`).append(` <span class="goldVariable">${startingShovel}</span>`);

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
        } 
        
        $(`#startDigging`).hide();
        // checking the submit input has been committed
        // console.log(`Game has initiated!`);
    });
        

    // If statement to update if the user clicked an island that has treasure or nothing, for each island result. When treasureBuried is found append game status and add 100 points if <li> with class of treasureBuried is found. 

    $(`li`).on(`click`, function () {

        const userNameInput = $(`#name`).val();

        if ($(this).hasClass(`treasureBuried`)) {
            // console.log(`🥳 TREASURE FOUND 💎 💯 POINTS!!!`);
            $(`.updatedGameInfo`).empty().fadeOut().fadeIn().append(`<p> 🥳 AWESOME DIGGING ${userNameInput}!!! YOU DISCOVERED TREASURE!!! 💎 💯 POINTS!!!</p>`);
            $(`.playerScore`).empty().fadeOut().fadeIn().append(`<p>Player Score <span class="blueColon">:</span> <span class="goldVariable"> ${startingScore + treasureScore} Points</span></p>`);
            $(`.hideUntilGameOver`).show();
        } else {
            // console.log(`😭 Nothing Found 0 Points `);
            $(`.updatedGameInfo`).empty().fadeOut().fadeIn().append(`<p>😭 Good try ${userNameInput}, no treasure found. 0 Points</p>`);
            $(`.hideUntilGameOver`).show();
        } 


        // **** Might use for more dynamic code for the when the shovel counter reaches zero to initiate GAME OVER ****
        // if ($(`.playerScore`) === `Player Score: 100 Points`) {
        //     console.log(`YOU WIN ${userNameInput}!!!`);
        //     $(`.hideUntilGameOver`).show();
        // } else {
        //     console.log(`SORRY ${userNameInput} GAME OVER, PLAY AGAIN?`);
        //     $(`.hideUntilGameOver`).show();
        // }
    });

    // Have an event listener on the li with class of ".island" when clicked console log.
    $(`.island`).on(`click`, function () {

        const listItemIslandSearched = `<p class="islandSearched">🔍 Searched Island 🔎</p>`;

        // on click empties the li initiates a fadeOut and fadeIn animation, and appends <li> with the variable listItemIslandSearched.
        $(this).empty().fadeOut().fadeIn().append(listItemIslandSearched);
        $(`.island`).off(`click`);

        // on click empties the li initiates a fadeOut and fadeIn animation, and appends class .shovelsLeft by subtracting one shovel from the shovelsLeft count on the game status.
        $(`.shovelsLeft`).empty().fadeOut().fadeIn().append(`<p>Shovels Left <span class="blueColon">:</span> <span class="goldVariable">${startingShovel - 1}</span></p>`);
        
        // check if class li ".island" is initiated when clicked
        // console.log(`island has been Searched`);


    });

    // To restart the game by refreshing the page, will use location.reload to do so, by targeting the input button with the id #playAgain
    $(`#playAgain`).on(`click`, function() {
            location.reload(`#playAgain`);
    });
    

}

$(function () {
    gameApp.init();
});

 // ***** use focusWithin() to target elements within the parent element  to apply a focus state. 

//  **** Remove all console.log when completed