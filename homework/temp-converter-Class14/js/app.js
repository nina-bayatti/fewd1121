//Set variables
var tempValue = parseInt(document.getElementById('#tempValue')).value;
var tempUnit = document.getElementById('#tempValue');
var tempConvert = document.getElementById('#tempConvert');
var unitConvert = document.getElementById('#unitConvert');
var calculatorButton = document.getElementById('#calculatorButton');

function calculateTemp(){
	if (tempUnit === "&deg;F") {
		console.log('Units === F');
		$('input#tempConvert').val((tempValue - 32)/1.8);
	}else{
		console.log('Units === C');
		$('input#tempConvert').val((tempValue * 1.8)+32);
	}
};

$('calculatorButton').click(function(){
	calculateTemp();
});

