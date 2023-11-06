document.addEventListener("DOMContentLoaded", function () {
  var e = document.getElementById("back-to-top");
  var t = document.getElementById("whatsapp");

  e.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", function () {
    window.scrollY > 100 ? e.style.display = "block" : e.style.display = "none";
  });

  window.addEventListener("scroll", function () {
    window.scrollY > 100 ? t.style.display = "block" : t.style.display = "none";
  });
});