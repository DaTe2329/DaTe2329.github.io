// Basic script to show an alert when "Bet Now" button is clicked
document.querySelector('.btn-bet-now').addEventListener('click', function() {
  alert('Redirecting you to the betting page...');
});

// Basic script to show alert when "Place Bet" is clicked on any match
const betButtons = document.querySelectorAll('.match-card button');
betButtons.forEach(button => {
  button.addEventListener('click', function() {
    alert('You placed a bet on this match!');
  });
});
