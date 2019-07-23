$(document).ready(function() {
    var gem = [];
    var score;
    var initiate = function() {
      for (i = 0; i < 4; i++) {
        gem.push(Math.floor(Math.random() * 13));
        console.log(`The ${i} number is ${gem[i]}`);
        $(`#${i}`).attr("value", gem[i]);
      }
      score = Math.floor(Math.random() * 102 + 19);
      $("#scoreReq").text(score);
    };
    initiate();
    console.log(gem);
    console.log(`score to win is ${score}`);
  });