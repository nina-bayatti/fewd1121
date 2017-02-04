console.log('app.js is running!');

$(document).ready (function () {
	$('.btn-success').click(function () {
	console.log('You clicked the button.')
	alert('This page is not published yet');
	});

	$('#rumble-element').hover(function () {
	$('#rumble-element').trigger('startRumble');
	console.log('The rumble plugin is working.')
	});
});

