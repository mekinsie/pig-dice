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
  user1 = "P1";
  user2 = "P2";
  player1 = new Player(user1);
  player2 = new Player(user2);
  let currentPlayer = player1;
  let currentRoundScore = 0;

  $("#p1-score").append(currentPlayer.score);
  $("#p2-score").append(currentPlayer.score);
  
  $("#current-player").empty();
  $("#current-player").append(currentPlayer.name);
  
  $("button#roll").click(function() {
    let roll = (randomNumber(6) + 1);
    if ((currentPlayer.score + currentRoundScore + roll) >= 100) {
      $("div#winner").empty();
      $("div#winner").append("GAME OVER " + currentPlayer.name + " wins!");
      $("button#roll").hide();
      $("button#hold").hide();
    
      }
    if (roll === 1) {
      currentPlayer = turnEnd(currentPlayer);
      currentRoundScore = 0;
      $("#current-player").empty();
      $("#current-player").append(currentPlayer.name);
      $("#current-round-score").empty();
      $("#current-round-score").append(currentRoundScore);
    }
    else {
      currentRoundScore += roll;
      $("#current-round-score").empty();
      $("#current-round-score").append(currentRoundScore);
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
      currentRoundScore = 0;
      $("#current-round-score").empty();
      $("#current-round-score").append(currentRoundScore);
    }
    else {
      addToPlayerScore(currentPlayer, currentRoundScore);
      $("#current-roll").empty();
      $("#p2-score").empty();
      $("#p2-score").append(currentPlayer.score);
      currentRoundScore = 0;
      $("#current-round-score").empty();
      $("#current-round-score").append(currentRoundScore);
    }
    currentPlayer = turnEnd(currentPlayer);
    $("#current-player").empty();
    $("#current-player").append(currentPlayer.name);
  });
  $("button#rule-button").click(function() {
    $(".rules").slideToggle();
  });
  $("button#new").click(function(){
    player1.score = 0;
    player2.score = 0;
    currentRoundScore = 0;
    roll = 0;
    $("#p1-score").empty();
    $("#p1-score").append(currentPlayer.score);
    $("#p2-score").empty();
    $("#p2-score").append(currentPlayer.score);
    $("#current-round-score").empty();
    $("#current-round-score").append(currentRoundScore);
    $("#current-roll").empty();
    $("#current-roll").append(roll);

    $("button#roll").slideDown();
    $("button#hold").slideDown();
    $("div#winner").hide();
  });
  });