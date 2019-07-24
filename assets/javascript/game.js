$(document).ready(function() {
  var gem = [];
  var score;
  var totalScore = 0;
  var wTotal = 0;
  var lTotal = 0;
  var initiate = function() {
    gem = [];
    totalScore = 0;
    for (i = 0; i < 4; i++) {
      gem.push(Math.ceil(Math.random() * 12));
      console.log(`The ${i} number is ${gem[i]}`);
      $(`#${i}`).attr("value", gem[i]);
    }
    score = Math.floor(Math.random() * 102 + 19);
    $("#scoreReq").text(score);
    $("#totalScore").text("0");
  };
  initiate();
  console.log(gem);
  console.log(`score to win is ${score}`);
  //click function for clicking gems
  $(document).on("click", ".gems", function(event) {
    var gemPoint = parseInt(event.target.getAttribute("value"));
    console.log(gemPoint);
    totalScore += gemPoint;
    $("#totalScore").text(totalScore);
    checkWL();
  });
  var checkWL = function() {
    if (totalScore === score) {
      console.log("you win!");
      alert("You win!");
      wTotal += 1;
      $("#wins").text(wTotal);
      initiate();
    } else if (totalScore > score) {
      console.log("You lose!");
      alert("You lose!");
      lTotal += 1;
      $("#losses").text(lTotal);
      initiate();
    }
  };
});
