document.addEventListener('DOMContentLoaded', () => {
  const matchList = document.querySelector('.match-list');
  matchList.innerHTML = '<p>Chargement des scores en direct...</p>';

  fetch('https://v3.football.api-sports.io/fixtures?live=all', {
    method: 'GET',
    headers: {
      'x-apisports-key': '72a513e931354e9769e2b1534c37c277'
    }
  })
    .then(response => response.json())
    .then(data => {
      matchList.innerHTML = '';

      const fixtures = data.response;

      if (fixtures.length === 0) {
        matchList.innerHTML = '<p>Aucun match en direct pour le moment.</p>';
        return;
      }

      fixtures.forEach((fixture, index) => {
        const homeTeam = fixture.teams.home.name;
        const awayTeam = fixture.teams.away.name;
        const homeLogo = fixture.teams.home.logo;
        const awayLogo = fixture.teams.away.logo;
        const homeScore = fixture.goals.home;
        const awayScore = fixture.goals.away;
        const time = fixture.fixture.status.elapsed;

        const matchCard = document.createElement('li');
        matchCard.classList.add('match-card');
        matchCard.style.animationDelay = `${index * 0.1}s`; 
        matchCard.innerHTML = `
          <h3>
            <img src="${homeLogo}" alt="${homeTeam}" style="height: 20px; vertical-align: middle;"> ${homeTeam}
            vs
            ${awayTeam} <img src="${awayLogo}" alt="${awayTeam}" style="height: 20px; vertical-align: middle;">
          </h3>
          <p>Score: ${homeScore} - ${awayScore}</p>
          <p>Minute: ${time ? time + "'" : "N/A"}</p>
          <button>Placez votre pari</button>
        `;

        matchList.appendChild(matchCard);
      });
    })
    .catch(error => {
      console.error('Erreur lors du chargement des scores :', error);
      matchList.innerHTML = '<p>Impossible de charger les scores en direct.</p>';
    });
});


