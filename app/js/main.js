$(document).ready(function(){
    $("#pypl-carousel-top").owlCarousel({
        loop:true,
        margin:0,
        items:1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
    });

    //////
    $("a").click((event) => {
        event.preventDefault();
    });
  });