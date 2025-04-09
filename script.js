 let clickCount = 0;
 document.querySelector('.logo').addEventListener('click', () => {
   clickCount++;
   if (clickCount >= 5) {
     document.getElementById('adminPanel').style.display = 'block';
     alert('Mode admin activé !');
     clickCount = 0
   }
 });

document.getElementById('addMatchForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const teamA = document.getElementById('teamA').value;
  const teamB = document.getElementById('teamB').value;
  const date = new Date(document.getElementById('matchDate').value).toLocaleString();
  const odds = document.getElementById('matchOdds').value;

  const matchList = document.querySelector('.match-list');

  const matchCard = `
    <li class="match-card">
      <h3>${teamA} vs ${teamB}</h3>
      <p>Date: ${date}</p>
      <p>Cote: ${odds}</p>
      <button>Placez votre pari</button>
    </li>
  `;

  matchList.innerHTML += matchCard;

  this.reset(); // Vide le formulaire
});
// 🔥 Fetch real matches from the backend
fetch('http://localhost:3000/matches')
  .then(res => res.json())
  .then(data => {
    const matchList = document.querySelector('.match-list');
    matchList.innerHTML = ''; // Remove hardcoded matches

    data.matches.forEach(match => {
      const home = match.homeTeam.name;
      const away = match.awayTeam.name;
      const date = new Date(match.utcDate).toLocaleString();

      const matchCard = document.createElement('li');
      matchCard.className = 'match-card';
      matchCard.innerHTML = `
        <h3>${home} vs ${away}</h3>
        <p>Date: ${date}</p>
        <p>Cote: ${(Math.random() * 3 + 1).toFixed(2)}</p>
        <button>Placez votre pari</button>
      `;

      matchCard.querySelector('button').addEventListener('click', () => {
        Swal.fire({
          title: 'Désolé cette fonctionnalité n\'est pas encore disponible',
          text: "Revenez plus tard !",
          imageUrl: 'https://i.kym-cdn.com/entries/icons/facebook/000/044/064/alright.jpg',
          imageWidth: 400,
          imageHeight: 225,
          imageAlt: 'I mean its alright meme',
          didOpen: () => {
            const sound = document.getElementById('alrightMemeSound');
            sound.currentTime = 0;
            sound.play();
          }
        });
      });

      matchList.appendChild(matchCard);
    });
  })
  .catch(err => {
    console.error('Erreur lors du chargement des matchs :', err);
  });
