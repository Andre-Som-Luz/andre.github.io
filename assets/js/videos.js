window.addEventListener('DOMContentLoaded', function () {
  const clickableVideos = document.querySelectorAll('.clickable-video');
  const videos = document.querySelectorAll('.custom-video');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const overlayImages = document.querySelectorAll('.overlay-image');

  clickableVideos.forEach((clickableVideo, index) => {
    const thumbnail = clickableVideo.querySelector('.thumbnail');
    const customVideo = clickableVideo.querySelector('.custom-video');
    const overlayImage = overlayImages[index];

    clickableVideo.addEventListener('click', () => {
      videos.forEach((otherVideo) => {
        otherVideo.pause();
        clickableVideos.forEach((c) => c.classList.remove('playing'));
        thumbnails.forEach((tn) => (tn.style.display = 'block'));
        overlayImages.forEach((img) => (img.style.display = 'none')); // Esconde todas as imagens de sobreposição
      });

      clickableVideo.classList.add('playing');
      customVideo.play();
      thumbnail.style.display = 'none';
      overlayImage.style.display = 'block'; // Exibe a imagem de sobreposição
    });

    customVideo.addEventListener('ended', () => {
      clickableVideo.classList.remove('playing');
      thumbnail.style.display = 'block';
      overlayImage.style.display = 'none'; // Esconde a imagem de sobreposição quando o vídeo terminar
    });
  });
});
