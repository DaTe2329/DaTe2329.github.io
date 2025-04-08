<!-- SweetAlert2 -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<!-- Optional: preload or hide the video file for smoother playback -->
<video id="alrightMemeVideo" width="0" height="0" style="display: none;">
  <source src="i-mean-its-alright-like.mp3" type="video/mp3">
</video>

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
        html: `
          <video width="100%" controls autoplay>
            <source src="i-mean-its-alright-like.mp3" type="video/mp3">
            Your browser does not support the video tag.
          </video>
        `,
        width: 700,
        showConfirmButton: false,
        background: '#fff',
      });
    });
  });
</script>
