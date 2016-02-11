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
											return '<li id="nav' +  index + '"></li>';
									},

							activateOn: 'click',
							activatePageOn: 'click',
							speed: 300,
							easing: 'linear',

							clickBar: 1

					};




					// To Start button
					$wrap.find('.toStart').on('click', function () {
						var item = $(this).data('item');
						// Animate a particular item to the start of the frame.
						// If no item is provided, the whole content will be animated.
						$frame.sly('toStart', item);
					});

					// To Center button
					$wrap.find('.toCenter').on('click', function () {
						var item = $(this).data('item');
						// Animate a particular item to the center of the frame.
						// If no item is provided, the whole content will be animated.
						$frame.sly('toCenter', item);
					});

					// To End button
					$wrap.find('.toEnd').on('click', function () {
						var item = $(this).data('item');
						// Animate a particular item to the end of the frame.
						// If no item is provided, the whole content will be animated.
						$frame.sly('toEnd', item);
					});

					// Add item
					$wrap.find('.add').on('click', function () {
						$frame.sly('add', '<li>' + $slidee.children().length + '</li>');
					});

					// Remove item
					$wrap.find('.remove').on('click', function () {
						$frame.sly('remove', -1);
					});


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

/*
	$('body').on('submit','#slideNav',function(e){
			var index = $(this).find('input').val()-1;
			setUpFullPageScrolling(index);

			// Stop page reloading
			e.preventDefault();
	});
	*/

	// Let any link with class 'slideLink' go to a slide, remember to include data-slide="X"

/*
$('a.arrow-wrap').click(function(e){
		var anything = $(this).attr('data-slide');
		setUpFullPageScrolling(2);
});
*/


	$( ".arrow-wrap" ).click(function(e) {
		//sly.toStart does not work if the sly frame is set to 'centered'.
		// we are using --> itemNav: 'forceCentered'
		//sly.toStart($('#foofoo'));

		//We cant just call $('.page-tabs li')[1].click(); because we are currently in
		//the event loop (we are handeling a click event on the arrow button).
		//So, use setTimeout to wait for the event loop to finish before faking the click
		//on the sly nav item.
		setTimeout(function() {
			$('.page-tabs li')[1].click();
		}, 100);
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

$(".sca-icon-play").click(function(){
	$("#iconPlay").toggleClass("sca-icon-play-invisible");

	$('.video-container iframe').css({
			'display': 'inline-block',
			'z-index': '10',
	});
});


//chart//
//$("#graph_card").mouseover(function() {
  //  $(".chart").css("display","block");
//});

//animating graph
sly.on('moveEnd', function() {
	if ($('#graph_card').visible(true)) {
		$(".chart").css("display","block");
	}
})

//animating h1
sly.on('moveEnd', function() {
	if ($('#video_card').visible(true)) {

		$(".animate1").css({
			opacity: 1
		});

	}
})

});
