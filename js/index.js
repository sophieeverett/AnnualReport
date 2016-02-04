$(document).ready(function(){
$("#nav-icon4").click(function(){
	$(this).toggleClass('open');
	$("#nav-icon4 li").toggleClass("menuAnimate");
	$("#nav-icon4 li").toggleClass("menuAnimate2");
	$(".menu_box").toggleClass("menu_box_animate");
	$("#menuClick").toggleClass("menuAnimate3");
});

$("#menuClick").click(function(){
	$(".menu_box").toggleClass("menu_box_animate");
	$("#nav-icon4 li").toggleClass("menuAnimate");
	$("#nav-icon4").toggleClass("open");
	$("#nav-icon4 li").toggleClass("menuAnimate2");
	$("#menuClick").toggleClass("menuAnimate3");

});

$(window).scroll( function(){
  var topWindow = $(window).scrollTop();
	var topWindow = topWindow * 1.5;
  var windowHeight = $(window).height();
  var position = topWindow / windowHeight;
  position = 1 - position;
  $('.arrow-wrap').css('opacity', position);
});


});
