console.log('app.js is running!');

$(document).ready (function () {

	$('.lead').toggleClass('animated bounceInDown');
	
	$('.btn-readmore').click(function () {
	console.log('You clicked the button.')
	alert('This page is not published yet');
	});

	$('.btn').hover(function () {
	$(this).toggleClass('animated jello');
	});
});
