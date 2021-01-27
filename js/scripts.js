// Business Logic
function Player(name) {
  this.score = 0;
  this.name = name;
}

function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function turnEnd(currentPlayer) {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  }
  else {
    currentPlayer = player1;
  }
  return currentPlayer;
}

function addToPlayerScore(player, currentRoundScore) {
  player.score += currentRoundScore;
  return player.score;
}



//User Interface Logic
$(document).ready(function() {
  user1 = "p1";
  user2 = "p2";
  player1 = new Player(user1);
  player2 = new Player(user2);
  let currentPlayer = player1;
  let currentRoundScore = 0;

  $("#current-player").empty();
  $("#current-player").append(currentPlayer.name);
  
  $("button#roll").click(function() {
    const roll = (randomNumber(6) + 1);
    if (roll === 1) {
      console.log(currentPlayer.name + " rolled " + roll);
      currentPlayer = turnEnd(currentPlayer);
      console.log("It is " + currentPlayer.name + "'s turn");
      currentRoundScore = 0;
      $("#current-player").empty();
      $("#current-player").append(currentPlayer.name);
    }
    else {
      currentRoundScore += roll;
    }
    $("#current-roll").empty();
    $("#current-roll").append(roll);
    $("#current-roll").hide();
    $("#current-roll").fadeIn();
  }); 
  


  $("button#hold").click(function() {
    if (currentPlayer === player1)
    {
      addToPlayerScore(currentPlayer, currentRoundScore);
      $("#current-roll").empty();
      $("#p1-score").empty();
      $("#p1-score").append(currentPlayer.score);
      console.log(currentRoundScore);
      currentRoundScore = 0;
    }
    else {
      addToPlayerScore(currentPlayer, currentRoundScore);
      $("#current-roll").empty();
      $("#p2-score").empty();
      $("#p2-score").append(currentPlayer.score);
      console.log(currentRoundScore);
      currentRoundScore = 0;
    }
    currentPlayer = turnEnd(currentPlayer);
    console.log("It is " + currentPlayer.name + "'s turn");
    $("#current-player").empty();
    $("#current-player").append(currentPlayer.name);
  });
});
