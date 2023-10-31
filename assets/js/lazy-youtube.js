  var videoContainers = document.querySelectorAll(".video-container");

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var videoId = entry.target.getAttribute("data-video-id");
        var iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube-nocookie.com/embed/" + videoId;
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "true");
        entry.target.appendChild(iframe);
        observer.unobserve(entry.target);
      }
    });
  });

  videoContainers.forEach(function(container) {
    observer.observe(container);
  });


//   const videoThumbnails = document.querySelectorAll(".video-thumbnail");
//   const videoContainer = document.getElementById("video-container");

//   videoThumbnails.forEach(thumbnail => {
//     thumbnail.addEventListener("click", function() {
//       const videoId = this.getAttribute("data-video-id");
//       embedVideo(videoId);
//     });
//   });

//   function embedVideo(videoId) {
//     videoThumbnails.forEach(thumbnail => {
//       thumbnail.style.display = "inline-block";
//     });

//     videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>`;
//     videoContainer.style.display = "block";
//   }