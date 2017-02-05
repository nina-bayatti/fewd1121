console.log('app.js is running!');

$(document).ready (function () {

	$('.lead').toggleClass('animated bounceInDown');

	$('.contactForm').click(function () {
	console.log('A contact was requested.')
	alert('Unfortunately, our web developer has not learned back-end development yet. Please contact us by sending an email to nbayatti@gmail.com');
	});

	$('.btn').hover(function () {
	$(this).toggleClass('animated jello');
	});

	$('.parallax-window').parallax({imageSrc: '../NinaFinalProject/assets/images/stretch-view.jpg'});

});
