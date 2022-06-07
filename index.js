console.log("NUMBER GUESSING GAME\n\n");
let username = prompt("Please enter your username: ");
let point = 0;
let stage = 1;
let range = 2;

function playGame() {
  let userOption = prompt("Predict the generated number between 1 and " + range + ": ");
  const rand = getRandomNumber(range)
  if (Number(userOption) === rand) {
    stage++;
    range++;
    point++;
    console.log("\n----\n----\nCorrect. Good job", username,"\n\nYou just earned 1 point", "\n\You are now in stage", stage, "\nWait for the next game >>>\n\n");

    setTimeout(() => { playGame() }, 2000)
  } else {
    console.log("\n\nOops!!!\nGame Over\n\n");
    console.log("*GAME SUMMARY*\n")
    console.log("Total points: ", getCookie()["points"], "\nStage: ", getCookie()["stage"]);
  }
}

const getRandomNumber = (range) => {
  return Math.floor((Math.random() * range) + 1);
}

const getCookie = () => {
  return {
    username: username,
    points: point,
    stage: stage
  }
}
playGame();