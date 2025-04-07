// Array of users with their usernames and betCoins
const users = [
  { username: "User1", betCoins: 100 },
  { username: "User2", betCoins: 150 },
  { username: "User3", betCoins: 50 },
  { username: "User4", betCoins: 200 },
  { username: "User5", betCoins: 120 },
  { username: "User6", betCoins: 180 },
  { username: "User7", betCoins: 130 },
  { username: "User8", betCoins: 170 },
  { username: "User9", betCoins: 90 },
  { username: "User10", betCoins: 110 },
  { username: "User11", betCoins: 210 },
];

// Sort users by BetCoin balance in descending order
users.sort((a, b) => b.betCoins - a.betCoins);

// Function to render the leaderboard dynamically
function renderLeaderboard() {
  // Get the container where the leaderboard will be inserted
  const leaderboardContainer = document.querySelector(".leaderboard ul");
  
  // Clear any existing leaderboard content before rendering new data
  leaderboardContainer.innerHTML = ""; 

  // Iterate over each user and create a list item for each
  users.forEach((user, index) => {
    // Create a new <li> element for each user
    const li = document.createElement("li");

    // Add the user's data to the <li> element
    li.innerHTML = `
      <span class="rank">${index + 1}</span>
      <span class="username">${user.username}</span>
      <span class="betcoins">${user.betCoins} BetCoins</span>
    `;

    // Append the new <li> to the leaderboard
    leaderboardContainer.appendChild(li);
  });
}

// Call the renderLeaderboard function to display the leaderboard
renderLeaderboard();
