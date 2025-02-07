let player1Score = 0;
let player2Score = 0;

document.querySelector(".roll-player1").addEventListener("click", function() {
player1Score = rollDice(".img1");
checkWinner();
    });

document.querySelector(".roll-player2").addEventListener("click", function() {
player2Score = rollDice(".img2");
checkWinner();
    });

    function rollDice(imgSelector) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      const randomDiceImage = "images/dice" + randomNumber + ".png";
      document.querySelector(imgSelector).setAttribute("src", randomDiceImage);
      return randomNumber;
    }

    function checkWinner() {
      if (player1Score && player2Score) {
        if (player1Score === player2Score) {
          document.querySelector("h1").innerHTML = "😲 OOps! The game is a draw.";
        } else if (player1Score > player2Score) {
          document.querySelector("h1").innerHTML = "🥳👏 Player 1 wins 🚩";
        } else {
          document.querySelector("h1").innerHTML = "🚩 Player 2 wins 🥳👏";
        }
      }
    }