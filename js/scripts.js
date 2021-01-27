function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(function() {
  $("button#roll").click(function() {
    const roll = (randomNumber(6) + 1);
    $("#current-roll").empty();
    $("#current-roll").append(roll);
    console.log(roll);
  });
});
