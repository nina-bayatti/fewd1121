//Begin function when page loads
$(document).ready(function () {

	//Create global variable for name, because you will need to reuse it
	var name;
	console.log('This works so far.')

	//Upon clicking the submit button begin the function
	$('form').submit(function(event){

		//Prevents redirect
		event.preventDefault();

		
		//set the variable name equal to the name input value
		name = $('#name-input').val();
		console.log(name)
		$('#target').html(name);

	});
});
