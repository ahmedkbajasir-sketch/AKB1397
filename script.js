const players = [
  "Virat Blaze", "Mahi Storm", "Rohit Thunder", "Kane Ice", "Steve Fire",
  "Babar Swift", "Rashid Spin", "Bumrah Bolt", "Starc Blaze", "Shakib Shield", "Bravo Beat"
];

const playerList = document.getElementById("player-list");
const startButton = document.getElementById("start-match");
const gameplay = document.getElementById("gameplay");
const liveScore = document.getElementById("live-score");
const overInfo = document.getElementById("over-info");
const playBallBtn = document.getElementById("play-ball");
const ballResult = document.getElementById("ball-result");
const commentary = document.getElementById("commentary");
const matchEnd = document.getElementById("match-end");
const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");
const cheerSound = document.getElementById("cheer-sound");
const wicketSound = document.getElementById("wicket-sound");

let selectedPlayers = [];
let score = 0;
let wickets = 0;
let balls = 0;

players.forEach(player => {
  const li = document.createElement("li");
  li.textContent = player;
  li.addEventListener("click", () => {
    if (selectedPlayers.includes(player)) {
      selectedPlayers = selectedPlayers.filter(p => p !== player);
      li.classList.remove("selected");
    } else if (selectedPlayers.length < 11) {
      selectedPlayers.push(player);
      li.classList.add("selected");
    }
    startButton.disabled = selectedPlayers.length !== 11;
  });
  playerList.appendChild(li);
});

startButton.addEventListener("click", () => {
  document.getElementById("player-selection").style.display = "none";
  gameplay.style.display = "block";
});

playBallBtn.addEventListener("click", () => {
  const outcomes = ["0", "1", "2", "3", "4", "6", "W"];
  const comments = {
    "0": "Dot ball. Good defense!",
    "1": "Quick single taken.",
    "2": "Nice running between the wickets!",
    "3": "Excellent placement!",
    "4": "That's a boundary! Beautiful shot!",
    "6": "SIX! That’s out of the park!",
    "W": "Oh no! Clean bowled!"
  };

  const result = outcomes[Math.floor(Math.random() * outcomes.length)];
  balls++;

  if (result === "W") {
    wickets++;
    ballResult.textContent = "Wicket!";
    commentary.textContent = comments["W"];
    wicketSound.play();
  } else {
    score += parseInt(result);
    ballResult.textContent = `${result} run(s)`;
    commentary.textContent = comments[result];
    if (result === "4" || result === "6") cheerSound.play();
  }

  const overs = Math.floor(balls / 6);
  const ballsInOver = balls % 6;
  liveScore.textContent = `Score: ${score}/${wickets}`;
  overInfo.textContent = `Over: ${overs}.${ballsInOver}`;

  if (balls >= 60 || wickets >= 10) {
    playBallBtn.disabled = true;
    gameplay.style.display = "none";
    matchEnd.style.display = "block";
    finalScore.textContent = `Final Score: ${score}/${wickets} in ${overs}.${ballsInOver} overs`;
    resultMessage.textContent = score > 100 ? "🏆 You Win!" : "😢 You Lose!";
    cheerSound.play();
  }
});
