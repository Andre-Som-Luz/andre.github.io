window.addEventListener('DOMContentLoaded', function () {
  const clickableVideos = document.querySelectorAll('.clickable-video');
  const videos = document.querySelectorAll('.custom-video');

  clickableVideos.forEach((clickableVideo) => {
    const customVideo = clickableVideo.querySelector('.custom-video');

    clickableVideo.addEventListener('click', () => {
      videos.forEach((otherVideo) => {
        otherVideo.pause();
        clickableVideos.forEach((c) => c.classList.remove('playing'));
      });

      clickableVideo.classList.add('playing');
      customVideo.play();
    });

    customVideo.addEventListener('ended', () => {
      clickableVideo.classList.remove('playing');
    });
  });
});
