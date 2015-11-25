/**
 * Created by srit-dev4 on 11/22/2015.
 */


//-- for counter up

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//--- For Google Map
var map = new GMaps({
    el: '#map',
    lat: 23.780602,
    lng: 90.4061084,
    scrollwheel: false

});
map.addMarker({
    lat: 23.780602,
    lng: 90.4061084,
    infoWindow: {
        content: '<p>Tarek Raihan</p><p><i class="fa fa-phone"></i> +8801911222952 </p>'
    }
});

//---Scroll top---
$(window).scroll(function () {
    if($(this).scrollTop() > 200){
        $('.scroll-top').fadeIn();
    }else{
        $('.scroll-top').fadeOut();
    }
});

$('.scroll-top').click(function(){
   $('html,body').animate({
       scrollTop : 0
   },600);
    return false;
});

//--menu background color change

$(window).on('scroll', function(){
    if($(window).scrollTop() > 550){
        $('#menu').addClass('menu-bg');
        $('#menu').removeClass('menu-padding');
        $('.navbar').css('margin-bottom','0');
    }else{
        $('#menu').removeClass('menu-bg');
        $('#menu').addClass('menu-padding');
        $('.navbar').css('margin-bottom','20px');
    }
});