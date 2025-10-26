const players = [
  "Virat Blaze", "Mahi Storm", "Rohit Thunder", "Kane Ice", "Steve Fire",
  "Babar Swift", "Rashid Spin", "Bumrah Bolt", "Starc Blaze", "Shakib Shield", "Bravo Beat"
];

const playerList = document.getElementById("player-list");
const startButton = document.getElementById("start-match");
const scoreDisplay = document.getElementById("score");
const winnerDisplay = document.getElementById("winner");
const matchResult = document.getElementById("match-result");

let selectedPlayers = [];

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
  const score = Math.floor(Math.random() * 101) + 50;
  const opponentScore = Math.floor(Math.random() * 101) + 50;
  scoreDisplay.textContent = `Your Team: ${score} runs | Opponent: ${opponentScore} runs`;
  winnerDisplay.textContent = score > opponentScore ? "🏆 You Win!" : score < opponentScore ? "😢 You Lose!" : "🤝 It's a Tie!";
  matchResult.style.display = "block";
});
