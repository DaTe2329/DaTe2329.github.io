let clickCount = 0;
document.querySelector('.logo').addEventListener('click', () => {
  clickCount++;
  if (clickCount >= 5) {
    document.getElementById('adminPanel').style.display = 'block';
    alert('Mode admin activé !');
    clickCount = 0
    if (clickCount >= 10) {
    alert('Never gonna give you up, never gonna let you down Never gonna run around and desert you Never gonna make you cry, never gonna say goodbye Never gonna tell a lie and hurt you')

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
