$(window).scroll(function() {
    if ($(window).scrollTop() > 20) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });
  
    document.querySelector('.navbar-toggler').addEventListener('click', function() {
    var navbarCollapse = document.querySelector('.navbar-collapse');
    var toggleIcon = document.querySelector('#toggle-icon');
  
    if (navbarCollapse.style.display === 'block') {
      toggleIcon.classList.remove('bi-x');
      toggleIcon.classList.add('bi-list');
    } else {
      toggleIcon.classList.remove('bi-list');
      toggleIcon.classList.add('bi-x');
    }
  });
  window.onload = function() {
  
  };