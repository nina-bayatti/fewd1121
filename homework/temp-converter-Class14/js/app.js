//Set variables
var button = $('#button');
var outputUnit = $('#outputUnit');
var outputValue = $('#outputValue');


//define function and trigger
button.click(function(){
	// console.log('This works so far.');
	var inputValue = $('#inputValue').val();
	inputValue = parseInt(inputValue);
	var inputUnit = $('#inputUnit');
	console.log(inputUnit.val());

	if (inputUnit === "F") {
		console.log('Units === F');
		$('#outputValue').html((inputValue - 32)/1.8);
		$('#outputUnit').html('&deg;F');
	}else{
		console.log('Units === C');
		$('#outputValue').html((inputValue * 1.8)+32);
		$('#outputUnit').html('&deg;C');
	}
});

// $('#button').click(function(){
// 	console.log('this is working');
// });