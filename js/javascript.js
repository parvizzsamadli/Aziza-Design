let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
    menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})


let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


$(document).ready(function(){
    $("span").click(function(){
      if($("span").hasClass("night-mode"))
      {
        $("body").css("background-color", "black");
        $("span").removeClass("fa-sun-o","night-mode");
        $("span").removeClass("night-mode");
        $("span").addClass("fa-moon-o");
        $(".section-top").css("background-color", "#FAFAFA");
        $(".nav-link").css("color", "  #323232");
        $(".section-bottom").css("background-color", "#fff");
        $("#services").css("background-color", "#f2f4f6");
        $(".image-text").css("color", "#fff");
        $(".image-text-second").css("color", "#fff");
        $("#other-services").css("background-color", "#fff");
        $(".title").css("color", "#000");
        $("#about").css("background-color", "#fff");
        $(".wrapper").css("background-color", "#fff");
        $("#references").css("background-color", "#fff");
        $(".slogan-text h5").css("color", "#fff");
        $(".slogan-text p").css("color", "#fff");
        $(".service-info h5").css("color", "#fff");
        $(".service-info p").css("color", "#fff");
        $(".call-to-action h3").css("color", "#fff");
        $("footer").css("background-color", "#fff");
        $(".row h6").css("color", "#000");
        $(".row a").css("color", "#000");
        $(".row p").css("color", "#000");
        $(".footer-list a").css("color", "#000");
        $(".copyright-row span").css("color", "#000");
        $(".copyright-row p").css("color", "#000");
        $(".fa-sun-o").css("color", "#000");
        $(".active li").css("color", "#fff");
      }
      else
      {
        $("span").removeClass("fa-moon-o");
        $("span").addClass("fa-sun-o");
        $("span").addClass("night-mode");
        $("body").css("background-color", "#fff");
        $(".section-top").css("background-color", "#000");
        $(".nav-link").css("color", "#fff");
        $(".section-bottom").css("background-color", "#000");
        $("#services").css("background-color", "#000");
        $(".image-text").css("color", "#fff");
        $(".image-text-second").css("color", "#fff");
        $("#other-services").css("background-color", "#252323");
        $(".title").css("color", "#fff");
        $("#about").css("background-color", "#000");
        $(".wrapper").css("background-color", "#000");
        $("#references").css("background-color", "#000");
        $(".slogan-text h5").css("color", "#fff");
        $(".slogan-text p").css("color", "#fff");
        $(".service-info h5").css("color", "#fff");
        $(".service-info p").css("color", "#fff");
        $(".call-to-action h3").css("color", "#fff");
        $("footer").css("background-color", "#000");
        $(".row h6").css("color", "#fff");
        $(".row a").css("color", "#fff");
        $(".row p").css("color", "#fff");
        $(".footer-list a").css("color", "#fff");
        $(".copyright-row span").css("color", "#fff");
        $(".copyright-row p").css("color", "#fff");
        $(".fa-sun-o").css("color", "#000");
        $(".active li").css("color", "#fff");
      }
    });
  });








