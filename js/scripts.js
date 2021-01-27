function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function turnEnd(currentPlayer) {
  if (currentPlayer === 1) {
    currentPlayer = 2;
  }
  else {
    currentPlayer = 1;
  }
  return currentPlayer;
}

function Player() {
  this.score = 0;
}

function addToPlayerScore(player, roll) {
  player.score += roll;
  return player.score;
}



$(document).ready(function() {
  player1 = new Player();
  player2 = new Player();
  let currentPlayer = 1;
  
  $("button#hold").click(function() {
    // HOLD BUTTON
  });

  $("button#roll").click(function() {
    const roll = (randomNumber(6) + 1);
    if (roll === 1) {
      console.log("Player " + currentPlayer + " rolled " + roll);
      currentPlayer = turnEnd(currentPlayer);
      console.log("It is Player " + currentPlayer + "'s turn");
    }
    else {
      addToPlayerScore(currentPlayer, roll);
      console.log("Player " + currentPlayer + " rolled " + roll);
    }
    $("#current-roll").empty();
    $("#current-roll").append(roll);
  });
});
