document.addEventListener('DOMContentLoaded', () => {
  const liveMatchList = document.querySelector('.live-matches');
  const upcomingMatchList = document.querySelector('.upcoming-matches');
  const completedMatchList = document.querySelector('.completed-matches');
  const themeToggle = document.getElementById('theme-toggle');
  let isDarkMode = false;

  // Fonction pour charger les matchs
  const fetchMatches = () => {
    liveMatchList.innerHTML = '<p>Chargement des scores en direct...</p>';
    upcomingMatchList.innerHTML = '<p>Chargement des matchs à venir...</p>';
    completedMatchList.innerHTML = '<p>Chargement des matchs terminés...</p>';

    fetch('https://v3.football.api-sports.io/fixtures?live=all', {
      method: 'GET',
      headers: {
        'x-apisports-key': '72a513e931354e9769e2b1534c37c277'
      }
    })
      .then(response => response.json())
      .then(data => {
        const fixtures = data.response;

        // Filtrer les matchs selon leur état
        const liveMatches = fixtures.filter(fixture => fixture.fixture.status.long === 'Live');
        const upcomingMatches = fixtures.filter(fixture => fixture.fixture.status.long === 'Not Started');
        const completedMatches = fixtures.filter(fixture => fixture.fixture.status.long === 'Finished');

        // Affichage des matchs en direct
        liveMatchList.innerHTML = '';
        liveMatches.forEach((fixture, index) => {
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
          liveMatchList.appendChild(matchCard);
        });

        // Affichage des matchs à venir
        upcomingMatchList.innerHTML = '';
        upcomingMatches.forEach((fixture, index) => {
          const homeTeam = fixture.teams.home.name;
          const awayTeam = fixture.teams.away.name;
          const homeLogo = fixture.teams.home.logo;
          const awayLogo = fixture.teams.away.logo;
          const date = fixture.fixture.date;

          const matchCard = document.createElement('li');
          matchCard.classList.add('match-card');
          matchCard.style.animationDelay = `${index * 0.1}s`;

          matchCard.innerHTML = `
            <h3>
              <img src="${homeLogo}" alt="${homeTeam}" style="height: 20px; vertical-align: middle;"> ${homeTeam}
              vs
              ${awayTeam} <img src="${awayLogo}" alt="${awayTeam}" style="height: 20px; vertical-align: middle;">
            </h3>
            <p>Date: ${new Date(date).toLocaleString()}</p>
            <button>Placez votre pari</button>
          `;
          upcomingMatchList.appendChild(matchCard);
        });

        // Affichage des matchs terminés
        completedMatchList.innerHTML = '';
        completedMatches.forEach((fixture, index) => {
          const homeTeam = fixture.teams.home.name;
          const awayTeam = fixture.teams.away.name;
          const homeLogo = fixture.teams.home.logo;
          const awayLogo = fixture.teams.away.logo;
          const homeScore = fixture.goals.home;
          const awayScore = fixture.goals.away;

          const matchCard = document.createElement('li');
          matchCard.classList.add('match-card');
          matchCard.style.animationDelay = `${index * 0.1}s`;

          matchCard.innerHTML = `
            <h3>
              <img src="${homeLogo}" alt="${homeTeam}" style="height: 20px; vertical-align: middle;"> ${homeTeam}
              vs
              ${awayTeam} <img src="${awayLogo}" alt="${awayTeam}" style="height: 20px; vertical-align: middle;">
            </h3>
            <p>Score Final: ${homeScore} - ${awayScore}</p>
          `;
          completedMatchList.appendChild(matchCard);
        });
      })
      .catch(error => {
        console.error('Erreur lors du chargement des scores :', error);
        liveMatchList.innerHTML = '<p>Impossible de charger les scores en direct.</p>';
      });
  };

  fetchMatches(); // Chargement initial des matchs

  // Actualisation des matchs toutes les 30 secondes
  setInterval(fetchMatches, 15000);

  // Fonction de bascule entre le mode clair et sombre
  themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    themeToggle.textContent = isDarkMode ? 'Mode Clair' : 'Mode Sombre';
  });
});




