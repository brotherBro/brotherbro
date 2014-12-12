'use strict'


function window_resize(){
	var page_h = $(window).height();
	var page_w = $(window).width();
	
	if (page_w < 800) {
		$('.left').css('height', 'auto');
		$('.right').css('height', 'auto');
	} 

	$('.left').css('height', page_h + 'px');
	$('.right').css('height', page_h + 'px');
}

$(document).ready(function(){
	var nav = $('.nav');
	var li = $('.nav li');

	nav.bind('click', function(event){
		var target = $(event.target);
		if (target[0].nodeName === 'LI') {
			li.removeClass('selected');
			target.addClass('selected');
		}

	});

	window_resize();
	$(window).resize(window_resize);
});