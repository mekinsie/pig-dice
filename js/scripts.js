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

function addToPlayerScore(player, roll) {
  player.score += roll;
  return player.score;
}

$(document).ready(function() {
  user1 = "player 1";
  user2 = "player 2";
  player1 = new Player(user1);
  player2 = new Player(user2);
  let currentPlayer = player1;
  
  
  $("button#roll").click(function() {
    const roll = (randomNumber(6) + 1);
    if (roll === 1) {
      console.log( currentPlayer.name + " rolled " + roll);
      currentPlayer = turnEnd(currentPlayer);
      console.log("It is " + currentPlayer.name + "'s turn");
    }
    else {
      addToPlayerScore(currentPlayer, roll);
      console.log(currentPlayer.name + " rolled " + roll);
    }
    $("#current-roll").empty();
    $("#current-roll").append(roll);
  }); 
  
  $("button#hold").click(function() {
    currentPlayer = turnEnd(currentPlayer);
    console.log("It is " + currentPlayer.name + "'s turn");
  });
});
