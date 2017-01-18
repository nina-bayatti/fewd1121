// 1. Besure to write your code within the $(document).ready(...)
$(document).ready(function(){
//define interactive variables
var count = 0;
// 2. Add .click() event handlers for each of the boxes:
$('#a10').click(function(){
	count = count + 10;
	$('#out').html(count);
});

$('#a20').click(function(){
	count = count + 20;
	$('#out').html(count);
});

$('#a30').click(function(){
	count = count + 30;
	$('#out').html(count);
});

$('#n10').click(function(){
	count = count - 10;
	$('#out').html(count);
});

$('#n20').click(function(){
	count = count - 20;
	$('#out').html(count);
});

$('#n30').click(function(){
	count = count - 30;
	$('#out').html(count);
});

$('#red').click(function(){
	$('#out').css('background-color', 'red');
});

$('#blue').click(function(){
	$('#out').css('background-color', 'blue');
});

$('#out').click(function(){
		// reset count to 0
		count = 0;
		$('#out')
		.css('background-color', 'white')
		.html(count);
	});

});
