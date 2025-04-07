<!-- Add this in your HTML <head> or before </body> -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<audio id="alrightMemeSound" src="https://www.myinstants.com/media/sounds/its-alright.mp3"></audio>

<script>
  // Show alert when "Start Betting Now" is clicked
  document.querySelector('.btn-bet-now').addEventListener('click', function () {
    Swal.fire({
      title: 'Let\'s gooo!',
      text: 'Redirecting you to the betting page...',
      icon: 'info',
    });
  });

  // Show meme alert when "Place Bet" is clicked
  const betButtons = document.querySelectorAll('.match-card button');
  betButtons.forEach(button => {
    button.addEventListener('click', function () {
      Swal.fire({
        title: 'I mean…',
        text: "It's alright 😐",
        imageUrl: 'https://i.kym-cdn.com/entries/icons/facebook/000/044/064/alright.jpg',
        imageWidth: 400,
        imageHeight: 225,
        imageAlt: 'I mean its alright meme',
        didOpen: () => {
          const sound = document.getElementById('alrightMemeSound');
          sound.play();
        }
      });
    });
  });
</script>
