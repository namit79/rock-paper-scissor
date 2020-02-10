var game = function () {
    var pScore = 0;
    var cScore = 0;
    //Play Match
    var playMatch = function () {
        var options = document.querySelectorAll(".buttons button");
        var playerHand = document.querySelector(".user-hand");
        var computerHand = document.querySelector(".expert-hand");
        var computerOptions = ["ROCK", "PAPER", "SCISSOR"];
        options.forEach(function (option) {
            option.addEventListener("click", function () {
                //Computer Choice
                var computerNumber = Math.floor(Math.random() * 3);
                var computerChoice = computerOptions[computerNumber];
                compareHands(this.textContent, computerChoice);
                //Update Images.
                playerHand.src = "./" + this.textContent + ".jpg";
                computerHand.src = "./" + computerChoice + ".jpg";
                //Animation
                // playerHand.style.animation = "shakePlayer 2s ease";
                //computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };
    var updateScore = function () {
        var playerScore = document.querySelector(".user p");
        var computerScore = document.querySelector(".expert p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };
    var compareHands = function (playerChoice, computerChoice) {
        //Update Text
        //const winner = document.querySelector(".winner");
        //Checking for a tie
        if (playerChoice === computerChoice) {
            alert("It is a tie");
            return;
        }
        //Check for Rock
        if (playerChoice === "ROCK") {
            if (computerChoice === "SCISSOR") {
                alert("user wins");
                pScore++;
                updateScore();
                return;
            }
            else {
                alert("expert wins");
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for Paper
        if (playerChoice === "PAPER") {
            if (computerChoice === "SCISSOR") {
                alert("expert wins");
                cScore++;
                updateScore();
                return;
            }
            else {
                alert("user wins");
                pScore++;
                updateScore();
                return;
            }
        }
        //Check for Scissors
        if (playerChoice === "SCISSOR") {
            if (computerChoice === "ROCK") {
                alert("expert wins");
                cScore++;
                updateScore();
                return;
            }
            else {
                alert("user wins");
                pScore++;
                updateScore();
                return;
            }
        }
    };
    //Is call all the inner function
    //startGame();
    playMatch();
};
//start the game function
game();
