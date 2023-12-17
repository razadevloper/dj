// document.addEventListener('DOMContentLoaded', function () {
//     var navbar = document.getElementById('navbar');
//     var navbarOffset = navbar.offsetTop;

//     window.addEventListener('scroll', function () {
//          var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

//          if (scrollPosition >= navbarOffset) {
//              navbar.classList.add('sticky');
//          } else {
//              navbar.classList.remove('sticky');
//          }
//          if (scrollPosition > 100) {
//              navbar.style.backgroundColor = '#30307b';
//          } else {
//              navbar.style.backgroundColor = '#30307b';
//          }
//     });
//     });


window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar.style.backgroundColor = "#100726";
    } else {
      navbar.style.backgroundColor = "";
    }
  };