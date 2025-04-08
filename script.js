<!-- SweetAlert2 -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<!-- Audio préchargé pour le son du meme -->
<audio id="alrightMemeSound" src="i-mean-its-alright-like.mp3" preload="auto"></audio>

<script>
  // Alert when "Start Betting Now" is clicked
  document.querySelector('.btn-bet-now').addEventListener('click', function () {
    Swal.fire({
      title: 'Let\'s gooo!',
      text: 'Redirecting you to the betting page...',
      icon: 'info',
    });
  });

  // Alert with meme + sound when "Place Bet" is clicked
  const betButtons = document.querySelectorAll('.match-card button');
  betButtons.forEach(button => {
    button.addEventListener('click', function () {
      const sound = document.getElementById('alrightMemeSound');
      sound.currentTime = 0;
      sound.play();

      Swal.fire({
        title: 'We are',
        text: "Working on that",
        imageUrl: 'https://i.kym-cdn.com/entries/icons/facebook/000/044/064/alright.jpg',
        imageWidth: 400,
        imageHeight: 225,
        imageAlt: 'I mean its alright meme',
        showConfirmButton: false,
        timer: 3500,
        background: '#fff',
      });
    });
  });
</script>
