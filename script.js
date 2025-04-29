const API_URL = 'https://api.football-data.org/v4/matches';
const API_KEY = 'ea35b83b5e5e472bb5b09512025aa953';

function fetchLiveMatches() {
  fetch(API_URL, {
    headers: {
      'X-Auth-Token': API_KEY  // Tu ajoutes le header avec la clé API
    }
  })
  .then(response => response.json())
  .then(data => {
    const matches = data.matches; // Récupération des matchs
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
  .catch(error => console.error('Erreur lors de la récupération des matchs:', error));
}

document.addEventListener('DOMContentLoaded', () => {
  fetchLiveMatches();
});
