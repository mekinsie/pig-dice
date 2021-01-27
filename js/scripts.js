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

Player.prototype.addToPlayerScore = function(roll) {
  this.score += roll;
  return this.score;
}

player1 = new Player();
player2 = new Player();

$(document).ready(function() {
  $("button#roll").click(function() {
    let currentPlayer=1;
    const roll = (randomNumber(6) + 1);
    if (roll === 1) {
      turnEnd();
    }
    else {
      addToPlayerScore(player);
    }
    $("#current-roll").empty();
    $("#current-roll").append(roll);
    console.log(roll);
  });
});
