$(document).ready(function() {

  //Set up our variables to use later
  var computerChoice;

  //Get a random value for the computer choice
  var computerChoiceVal = Math.random();

  //Turn the random value into a choice for the computer
  if (computerChoiceVal < 0.34) {
    computerChoice = "rock";
  } else if (computerChoiceVal <= 0.67 && computerChoiceVal > 0.34) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  $(document).on("click", ".choice", function() {
    var userChoice = $(this).attr("id");

    if (userChoice == computerChoice) {
      alert ("Tie!");
    } else if (userChoice == "rock") {
      if (computerChoice == "scissors") {
        // alert ("You win!");
        $(this).addClass("success green-background");
      } else {
        alert ("You lose.");
      };
    } else if (userChoice == "paper") {
      if (computerChoice == "rock") {
        // alert ("You win!");
        $(this).addClass("success green-background");
      } else {
        alert ("You lose.");
      };
    } else if (userChoice == "scissors") {
      if (computerChoice == "paper") {
        // alert ("You win!");
        $(this).addClass("success green-background");
      } else {
        alert ("You lose.");
      };
    }

  });

});
