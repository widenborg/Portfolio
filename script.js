const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

$("#navbar-toggler").click(function() {
    $("#navbarScroll").toggle("slide");
     return false;
  });
  
  $(window).click(function() {
    if ($("#navbarScroll").is(":visible")) {
      $("#navbarScroll").toggle("slide");
    }
  });