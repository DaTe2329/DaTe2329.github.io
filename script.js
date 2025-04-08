// script.js

const apiKey = 

fetch('https://v3.football.api-sports.io/fixtures?next=2', {
  method: 'GET',
  headers: {
    'x-apisports-key': apiKey
  }
})
.then(response => response.json())
.then(data => {
  const matchList = document.querySelector('.match-list');
  matchList.innerHTML = ''; // vide la liste de base

  data.response.forEach(match => {
    const homeTeam = match.teams.home.name;
    const awayTeam = match.teams.away.name;
    const date = new Date(match.fixture.date).toLocaleString();
    const matchCard = `
      <li class="match-card">
        <h3>${homeTeam} vs ${awayTeam}</h3>
        <p>Date : ${date}</p>
        <p>Cote : 2.5</p> 
        <button>Placez votre pari</button>
      </li>
    `;
    matchList.innerHTML += matchCard;
  });
})
.catch(error => console.error('Erreur lors du chargement des matchs:', error));

