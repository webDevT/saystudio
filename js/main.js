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
$('.main-screen__background').html(" <img data-src="+image[a]+"> ");
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

$(function(){
$(elements).lazyLoadXT();



});

$.lazyLoadXT.onload.addClass = "animated fadeIn";



});

