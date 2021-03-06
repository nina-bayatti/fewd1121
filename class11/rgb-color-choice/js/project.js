// 1. Use document.getElementById() and assign the .onclick event to #color-button
// 2. Write a function, named changeColor, that is called when #color-button is clicked
// 3. Inside of the function changeColor, use variables to store the <input> values from #red, #green, and #blue
// - Use .value to get the values from the inputs
// HINT: var red = document.getElementById('red').value;
// 4. Create a variable, named colorStr, which concatenates the above red, green, and blue variables into the format:
// rgb(x, y, z)
// - If the user enters: 100, 150, and 200, colorStr should be: rgb(100, 150, 200)
// 5. Use .innerHTML to change the text inside of #colorful-text to colorStr
// 6. Use .style.background to change the background of #wrapper to colorStr


//SET VARIABLES FIRST
var submit = document.getElementById('submit');
var red = document.getElementById('red');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var red_val;
var green_val;
var blue_val;
var wrapper = document.getElementById('wrapper');
var colorfulText = document.getElementById('colorful-text');

//Make the submit button clickable
submit.onclick = function () {
	var red_val = red.value;
	var green_val = green.value;
	var blue_val = blue.value;
	console.log(red_val + " " + green_val + " " + blue_val);
	wrapper.style.backgroundColor = "rgb(" + red_val + "," + green_val + "," + blue_val + ")";
	colorfulText.innerHTML = "rgb(" + red_val + "," + green_val + "," + blue_val + ")";
}
