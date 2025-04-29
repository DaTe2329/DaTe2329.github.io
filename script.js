const API_URL = 'https://api.football-data.org/v4/matches';
const API_KEY = 'VOTRE_CLÉ_API'; // Remplacez par votre propre clé API Football-Data.org

// Récupérer les matchs en direct
function fetchLiveMatches() {
  fetch(API_URL, {
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
  .then(response => response.json())
  .then(data => {
    const matches = data.matches;
    const matchList = document.querySelector('.match-list');
    
    matches.forEach(match => {
      const matchCard = `
        <li class="match-card">
          <h3>${match.homeTeam.name} vs ${match.awayTeam.name}</h3>
          <p>Score: ${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}</p>
          <p>Stade: ${match.venue}</p>
          <button>Placer un pari</button>
        </li>
      `;
      matchList.innerHTML += matchCard;
    });
  })
  .catch(error => console.error('
