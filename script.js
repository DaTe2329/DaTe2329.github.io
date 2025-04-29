const API_URL = 'https://api.football-data.org/v4/matches';
const API_KEY = 'ea35b83b5e5e472bb5b09512025aa953';

function fetchLiveMatches() {
  console.log("Requête en cours...");

  fetch(API_URL, {
    headers: {
      'X-Auth-Token': API_KEY
    }
  })
  .then(response => {
    console.log('Réponse reçue:', response); // Log de la réponse
    return response.json();
  })
  .then(data => {
    console.log('Données récupérées:', data); // Log des données reçues
    const matches = data.matches; // Récupération des matchs
    const matchList = document.querySelector('.match-list');

    // Si il n'y a pas de matchs
    if (matches.length === 0) {
      matchList.innerHTML = "<li>Aucun match en cours.</li>";
      return;
    }

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

