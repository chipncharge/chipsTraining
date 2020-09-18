function rollDice() {
  roll1 = Math.floor(Math.random() * 6) + 1;
  roll2 = Math.floor(Math.random() * 6) + 1;
  return roll1 + roll2;
}

function playLuckySevens() {
  var startingBet = parseFloat(document.getElementById("startingBet").value);
  if(isNaN(startingBet) || startingBet < 1) {
    displayError();
    return false;
  }
  var currentMoney = startingBet.toFixed(2);
  var largestStash = currentMoney;
  var totalRolls = 0;
  var rollBiggestWin = 0;

  while (currentMoney >= 1) {
    totalRolls++;
    var diceRoll = rollDice();
    if(diceRoll === 7) {
      currentMoney = currentMoney + 4;
      if(largestStash < currentMoney) {
        largestStash = currentMoney;
        rollBiggestWin = totalRolls;
      }
    } else {
      currentMoney = currentMoney - 1;
    }
  }
  document.getElementById("startingBetResults").innerText = "$" + startingBet.toFixed(2);
  document.getElementById("totalRollsResults").innerText = totalRolls;
  document.getElementById("highestAmountWon").innerText = "$" + largestStash.toFixed(2);
  document.getElementById("rollCountHighest").innerText = rollBiggestWin;
  document.getElementById("submitButton").value = "Play Again!";
  document.getElementById("submitButton").className = "playAgain";
  document.getElementById("resultsTable").style.display = "table";

  return false;
}

function displayError() {
  document.getElementById("startingBetError").style.display = "block";
}