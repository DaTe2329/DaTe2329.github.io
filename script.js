const themeToggleButton = document.getElementById('theme-toggle');
let isDarkMode = false;

themeToggleButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  themeToggleButton.textContent = isDarkMode ? 'Mode Clair' : 'Mode Sombre';
});

document.addEventListener('DOMContentLoaded', () => {
  const liveMatchesList = document.querySelector('.live-matches');
  const upcomingMatchesList = document.querySelector('.upcoming-matches');
  const completedMatchesList = document.querySelector('.completed-matches');

  const fetchMatches = () => {
    liveMatchesList.innerHTML = '<p>Chargement des scores en direct...</p>';
    upcomingMatchesList.innerHTML = '<p>Chargement des prochains matchs...</p>';
    completedMatchesList.innerHTML = '<p>Chargement des matchs terminés...</p>';

    fetch('https://v3.football.api-sports.io/fixtures?live=all', {
      method: 'GET',
      headers: {
        'x-apisports-key': '72a513e931354e9769e2b1534c37c277'
      }
    })
    .then(response => response.json())
    .then(data => {
      const fixtures = data.response;

      if (fixtures.length === 0) {
        liveMatchesList.innerHTML = '<p>Aucun match en direct pour le moment.</p>';
        upcomingMatchesList.innerHTML = '<p>Aucun match à venir pour le moment.</p>';
        completedMatchesList.innerHTML = '<p>Aucun match terminé pour le moment.</p>';
        return;
      }

      const filteredMatches = fixtures.filter(fixture => {
        const competitionName = fixture.league.name.toLowerCase();
        return competitionName.includes('serie a') || competitionName.includes('ligue 1') || competitionName.includes('champions league');
      });

      filteredMatches.forEach(fixture => {
        const homeTeam = fixture.teams.home.name;
        const awayTeam = fixture.teams.away.name;
        const homeLogo = fixture.teams.home.logo;
        const awayLogo = fixture.teams.away.logo;
        const homeScore = fixture.goals.home;
        const awayScore = fixture.goals.away;
        const time = fixture.fixture.status.elapsed;
        const status = fixture.fixture.status.short;

        const matchCard = document.createElement('li');
        matchCard.classList.add('match-card');
        matchCard.innerHTML = `
          <h3>
            <img src="${homeLogo}" alt="${homeTeam}" style="height: 20px; vertical-align: middle;"> ${homeTeam}
            vs
            ${awayTeam} <img src="${awayLogo}" alt="${awayTeam}" style="height: 20px; vertical-align: middle;">
          </h3>
          <p>Score: ${homeScore} - ${awayScore}</p>
          <p>Minute: ${time ? time + "'" : "N/A"}</p>
          <p>Status: ${status}</p>
          <button>Placez votre pari</button>
        `;

        if (status === 'LIVE') {
          liveMatchesList.appendChild(matchCard);
        } else if (status === 'POSTPONED' || status === 'SCHEDULED') {
          upcomingMatchesList.appendChild(matchCard);
        } else {
          completedMatchesList.appendChild(matchCard);
        }
      });
    })
    .catch(error => {
      console.error('Erreur lors du chargement des scores :', error);
      liveMatchesList.innerHTML = '<p>Impossible de charger les scores en direct.</p>';
    });
  };

  fetchMatches();
  setInterval(fetchMatches, 30000);
});


