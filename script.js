// Meme logic + alert

document.addEventListener('DOMContentLoaded', () => {
  const memeSound = document.getElementById('alrightMemeSound');

  // "Pariez mainteant" alert
  const betNowBtn = document.querySelector('.btn-bet-now');
  if (betNowBtn) {
    betNowBtn.addEventListener('click', () => {
      Swal.fire({
        title: 'Let\'s gooo!',
        text: 'Vous devez etre connecté pour effectuer cette action...',
        icon: 'info',
      });
    });
  }

  // Meme when placing bet
  const betButtons = document.querySelectorAll('.match-card button');
  betButtons.forEach(button => {
    button.addEventListener('click', () => {
      Swal.fire({
        title: 'Desolé cette fonctionnalité nest pas encore disponible',
        text: "Revenez plus tard !",
        imageUrl: 'https://i.kym-cdn.com/entries/icons/facebook/000/044/064/alright.jpg',
        imageWidth: 400,
        imageHeight: 225,
        imageAlt: 'I mean its alright meme',
        showConfirmButton: false,
        timer: 3000,
        didOpen: () => {
          if (memeSound) {
            memeSound.currentTime = 0;
            memeSound.play();
          }
        }
      });
    });
  });
});
