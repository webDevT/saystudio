$(function(){


// ------start sticky header------

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.header').addClass("sticky");
}
else{
$('.header').removeClass("sticky");
}
});

//-------end sticky header--------

//-------start mobil menu----------

$('.menu__btn').click(function(){
		$(this).toggleClass('active');
		$('.header__menu ul').slideToggle();
	})


//-------end mobil menu------------

//-------start main-screen img change-------
var a=Math.round(Math.random()*2) 
image = new Array();
image[0]="img/homepage-bg.jpg"
image[1]="img/homepage-bg.jpg"
image[2]="img/homepage-bg.jpg"
$('.main-screen__background').html(" <img src="+image[a]+"> ");
//-------end main-screen img change-------

//-------start projects change-------
$('.projects-list').each(function(){
var numberBlock = sluchay();
$(this).children('div').eq(numberBlock).css('display','flex');
});
 
 
function sluchay(){
var MyRND  = Math.random() * 5;
var MyRND = Math.round (MyRND);
return MyRND;
 
}
//-------end projects change-------

$.lazyLoadXT.onload.addClass = "animated fadeIn";


$('.slider').slick({
prevArrow: $('.prev'),
nextArrow: $('.next'),
fade: true,

});


$('.slider2').slick({

slidesToShow: 4,
infinite: true,
nextArrow: $('.next-gallery'),
prevArrow: $('.prev-gallery'),
responsive: [
    {
        breakpoint: 768,
        settings: {
      slidesToShow: 3
    }

    }

]

});




});


$(document).ready(function () {
   $(function () {
   items=18;
    x=6;

    $('#project-list a').slice(0, 6).show();
    $('#loadMore').on('click', function (e) {
        e.preventDefault();
        x = x+6;
        $('#project-list a').slice(0, x).slideDown();

         if(x < items) {$('#project-list a:lt('+x+')').show();}
        else {$('#project-list a:lt('+items+')').show();
             $('#loadMore').hide();
             }

    });
});
});


 $('[data-fancybox="gallery1"]').fancybox({
  transitionEffect: "fade",
  transitionDuration: 0,
  mobile : {
    clickContent : "close",
    clickSlide : "close",
    clickOutside : 'close'
}

});