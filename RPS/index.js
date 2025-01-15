function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  return choices[getRandomInt(3)];
};

obj = {
  getWinner: (computerChoice, userChoice) => {
    if (computerChoice == userChoice) return "Draw!";
    if (
      (computerChoice == "rock" && userChoice == "paper") ||
      (computerChoice == "scissors" && userChoice == "rock") ||
      (computerChoice == "paper" && userChoice == "scissors")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  },
};

const getEmoji = (choice) => {
  if (choice == "rock") {
    return "✊";
  } else if (choice == "scissors") {
    return "✌️";
  } else if (choice == "paper") {
    return "✋";
  }
};

const rpsGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  const result = obj.getWinner(computerChoice, userChoice);

  //Update Dom
  document.getElementById("result").textContent = result;
  document.getElementById("user-answer").textContent =
    "You threw " + userChoice + getEmoji(userChoice);
  document.getElementById("computer-answer").textContent =
    "Computer threw " + computerChoice + getEmoji(computerChoice);
};
