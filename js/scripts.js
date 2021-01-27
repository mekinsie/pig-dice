function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
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
    const roll = (randomNumber(6) + 1);
    // if (roll === 1) {
    //   turnEnd();
    // }
    // else {
    //   addToPlayerScore();
    // }
    $("#current-roll").empty();
    $("#current-roll").append(roll);
    console.log(roll);
  });
});
