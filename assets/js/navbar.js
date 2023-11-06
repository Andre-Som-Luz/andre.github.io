var lastScrollY = 0;
window.addEventListener("scroll", function () {
  var e = document.getElementById("navbar");
  if (window.scrollY >= 200) {
    e.style.backgroundColor = "#ffffff";
  } else {
    e.style.backgroundColor = "rgba(248,249,250,.75)";
  }
  lastScrollY = window.scrollY;
});