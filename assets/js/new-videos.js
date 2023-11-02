// window.addEventListener('DOMContentLoaded', function () {
//   const clickableVideos = document.querySelectorAll('.clickable-video');
//   const videos = document.querySelectorAll('.custom-video');

//   clickableVideos.forEach((clickableVideo) => {
//     const customVideo = clickableVideo.querySelector('.custom-video');

//     clickableVideo.addEventListener('click', () => {
//       videos.forEach((otherVideo) => {
//         otherVideo.pause();
//         clickableVideos.forEach((c) => c.classList.remove('playing'));
//       });

//       clickableVideo.classList.add('playing');
//       customVideo.play();
//     });

//     customVideo.addEventListener('ended', () => {
//       clickableVideo.classList.remove('playing');
//     });
//   });
// });


window.addEventListener('DOMContentLoaded', function () {
  const clickableVideos = document.querySelectorAll('.clickable-video');
  const videos = document.querySelectorAll('.custom-video');
  // const thumbnails = document.querySelectorAll('.thumbnail');

  clickableVideos.forEach((clickableVideo) => {
    // const thumbnail = clickableVideo.querySelector('.thumbnail');
    const customVideo = clickableVideo.querySelector('.custom-video');

    clickableVideo.addEventListener('click', () => {
      videos.forEach((otherVideo) => {
        otherVideo.pause();
        clickableVideos.forEach((c) => c.classList.remove('playing'));
        // thumbnails.forEach((tn) => (tn.style.display = 'block'));
      });

      clickableVideo.classList.add('playing');
      customVideo.play();
      // thumbnail.style.display = 'none';
    });

    customVideo.addEventListener('ended', () => {
      clickableVideo.classList.remove('playing');
      // thumbnail.style.display = 'block';
    });
  });
});