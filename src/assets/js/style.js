$(document).ready(function(){
    // $(".owl-carousel").owlCarousel(
    $("#owl-demo").owlCarousel(
        {
            items:4,
            loop:true,
            margin:20,
            autoplay:true,
            autoplayTimeout:4000
        }
    );

    $("#owl-testimonial").owlCarousel(
        {
            items:1,
            loop:true,
            dots: true
        }
    );

    $('.video').parent().click(function () {
        if($(this).children(".video").get(0).paused){
            $(this).children(".video").get(0).play();
            $(this).children(".play-pause").hide();
        }else{
            $(this).children(".video").get(0).pause();
            $(this).children(".play-pause").show();
        }
    });
});
