// The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

    var crystalOne;
    var crystalTwo;
    var crystalThree;
    var crystalFour;
    var wins = 0;
    var losses = 0;
    var magicNumber;
    var totalScore;
    var gameStart = false;
// There will be four crystals displayed as buttons on the page.
gameReset();
 function gameReset(){
    crystalOne = Math.floor(Math.random()* 12 + 1);
    crystalTwo = Math.floor(Math.random()* 12 + 1);
    crystalThree = Math.floor(Math.random()* 12 + 1);
    crystalFour = Math.floor(Math.random()* 12 + 1);
// The player will be shown a random number at the start of the game.
    magicNumber = Math.floor(Math.random()* (120-19) + 19);
    totalScore = 0;
    //will display magic number
    updateDom();


 };
 console.log(crystalOne, crystalTwo, crystalThree, crystalFour);
 
 function updateDom() {
    $("#magic-number").text("Magic Number: " + magicNumber);
    $("#total-score").text("Total Score: " + totalScore);
    //starts the game
    startGame();
 };

 function startGame() {
    if (!gameStart) {
        gameStart = true;
        crystalClicks();
    }
    
 };

function crystalClicks() {

    $("#crystal-one").on('click', () =>{
        totalScore += crystalOne; 
        console.log(totalScore);
        totalScoreUpdate();
        checkWinLoss();
    })

    $("#crystal-two").on('click', () =>{
        totalScore += crystalTwo; 
        console.log(totalScore);
        totalScoreUpdate();
        checkWinLoss();
    })

    $("#crystal-three").on('click', () =>{
        totalScore += crystalThree; 
        console.log(totalScore);
        totalScoreUpdate();
        checkWinLoss();
    })

    $("#crystal-four").on('click', () =>{
        totalScore += crystalFour; 
        totalScoreUpdate();
        checkWinLoss();
    })

};

function totalScoreUpdate () {
    $("#total-score").text("Total Score:" + totalScore);
};

function checkWinLoss (){
    if (totalScore === magicNumber){
        alert('Quench Your Thirst Champion!')
        wins++;
        $("#wins").text('Wins: ' + wins);
        gameReset();
    };
    if(totalScore > magicNumber) {
        alert('You Spilled your drink, LOSER!')
        losses++;
        $("#losses").text("Losses: " + losses);
        gameReset();
    };
};




// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

// Your game will hide this amount until the player clicks a crystal.

// When they do click one, update the player's score counter.

// The player wins if their total score matches the random number from the beginning of the game.

// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

