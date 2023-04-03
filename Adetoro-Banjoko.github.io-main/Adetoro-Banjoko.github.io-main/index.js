// scroll functions
var mainNav = document.querySelector('.navbar');
window.addEventListener("scroll", (e) => {

   

    // add/remove class to navbar when scrolling to hide/show
    var scroll = window.scrollTop();
    if (scroll >= 150) {
        mainNav.classList.add("navbar-hide");
    } else {
       mainNav.classList.remove("navbar-hide");
    }

});

// document.querySelector(window).scroll(function(e) {
  