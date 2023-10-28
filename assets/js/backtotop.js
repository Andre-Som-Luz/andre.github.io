document.addEventListener('DOMContentLoaded', function() {
  var backToTop = document.getElementById('back-to-top');
  var whatsApp = document.getElementById('whatsapp');  // Corrigido para 'whatsApp'

  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      whatsApp.style.display = 'block';  // Corrigido para 'whatsApp'
    } else {
      whatsApp.style.display = 'none';  // Corrigido para 'whatsApp'
    }
  });
});
