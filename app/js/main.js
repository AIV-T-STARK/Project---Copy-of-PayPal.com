$(document).ready(function(){
    $("#pypl-carousel-top").owlCarousel({
        loop:true,
        margin:0,
        items:1,
        autoplay:false,
    });

    //////
    $("a").click((event) => {
        event.preventDefault();
    });
  });