$(document).ready(function(){



	// VERTICAL SCROLL


	// This script will take all your sections and mark them up

	var myScrollingList = $('<ul/>').attr('class','sly-list'),
			myListContainer = $('<div/>').attr('class','sly-container');

	$('body > section').each(function(){
			$(this).appendTo(myScrollingList);
	});

	myListContainer.append(myScrollingList);
	$('body').append(myListContainer);

	// ^^ End of that




	// Call the function to set up sly

	setUpFullPageScrolling();


	// Sly global variable

	var sly;

	// Set up sly function, calls on page load, and then with a number to go to any slide

	function setUpFullPageScrolling(goToSlide){

			var windowHeight = $(window).height(),
					slides = $('.sly-list > li'),
					$sly = $('.sly-container'),
					$wrap = $sly.parent();


			var options = {
							itemNav: 'forceCentered',
							startAt: 0,
							smart: 1,
							scrollHijack: 0,
							mouseDragging: 1,
							releaseSwing: 1,
							swingSpeed: 1,
							elasticBounds: 1,
							scrollBy: 1,
							pagesBar: $wrap.find('.page-tabs'),
							pageBuilder:
									function(index){
											return '<li></li>';
									},

							activateOn: 'click',
							activatePageOn: 'click',
							speed: 300,
							easing: 'linear',

							clickBar: 1
					};

			slides.each(function(){
					$(this).css({
							'height': windowHeight
					});
			});

			$sly.css({
					'height': windowHeight
			});

			// If goToSlide is greater than 0, in other words, when we're going to a slide
			if(goToSlide>0){
					sly.activatePage(goToSlide, false);
			}else{
			// ELSE, goToSlide is 0, we're initialising on page load or window resize calls
					sly = new Sly($sly, options).init();
			}
	}

	// Resize and reinitiate everything when window resizes

	$(window).resize(function(){
			setUpFullPageScrolling();
	});

	// Get number from input field and go to slide

	$('body').on('submit','#slideNav',function(e){
			var index = $(this).find('input').val()-1;
			setUpFullPageScrolling(index);

			// Stop page reloading
			e.preventDefault();
	});

	// Let any link with class 'slideLink' go to a slide, remember to include data-slide="X"


$('a.arrow-wrap').click(function(e){
		var anything = $(this).attr('data-slide');
		console.log(anything);
		setUpFullPageScrolling(-1);
});




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


$('.sca-icon-play').click(function() {
    $('.video-container iframe').css({
        'display': 'inline-block',
				'z-index': '10',
    });
});

//chart//
$("#graph_card").mouseover(function() {
    $(".chart").css("display","inline-block");
});

});
