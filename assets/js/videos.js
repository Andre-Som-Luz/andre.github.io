window.addEventListener('DOMContentLoaded', function () {
    const clickableVideos = document.querySelectorAll('.clickable-video');
    const videos = document.querySelectorAll('.custom-video');
    const videosLg = document.querySelectorAll('.custom-video-lg');
    const thumbnails = document.querySelectorAll('.thumbnail');

    clickableVideos.forEach((clickableVideo) => {
        const thumbnail = clickableVideo.querySelector('.thumbnail');
        const customVideo = clickableVideo.querySelector('.custom-video');
        const customVideoLg = clickableVideo.querySelector('.custom-video-lg');

        clickableVideo.addEventListener('click', () => {
            videos.forEach((otherVideo) => {
                otherVideo.pause();
                clickableVideos.forEach((c) => c.classList.remove('playing'));
                thumbnails.forEach((tn) => (tn.style.display = 'block'));
            });

            clickableVideo.classList.add('playing');
            if (window.innerWidth >= 769) {
                customVideoLg.play();
                customVideoLg.style.display = 'block';
                customVideo.style.display = 'none';
            } else {
                customVideo.play();
                customVideo.style.display = 'block';
                customVideoLg.style.display = 'none';
            }
            thumbnail.style.display = 'none';
        });

        customVideo.addEventListener('ended', () => {
            clickableVideo.classList.remove('playing');
            thumbnail.style.display = 'block';
            customVideo.style.display = 'block';
            customVideoLg.style.display = 'none';
        });
        customVideoLg.addEventListener('ended', () => {
            clickableVideo.classList.remove('playing');
            thumbnail.style.display = 'block';
            customVideoLg.style.display = 'block';
            customVideo.style.display = 'none';
        });
    });
});
