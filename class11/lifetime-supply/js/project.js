//Set variables for interactive elements
var age = document.getElementById('age');
var maxAge = document.getElementById('max-age');
var item = document.getElementById('item');
var numPerDay = document.getElementById('num-per-day');
var click_me = document.getElementById('click-me');
var solution = document.getElementById('solution');
var drink = document.getElementById('drink');

//Set up variables for chunks of data
var myAge;
var myMaxAge;
var mySolution;
var myDrink;
var myNumPerDay;

//Set up trigger
click_me.onclick = function (){
	//what happens
	myAge = age.value;
	myMaxAge = maxAge.value;
	myNumPerDay = numPerDay.value;
	mySolution = (myMaxAge - myAge) * 365 * myNumPerDay;
	myDrink = item.value;
	console.log(mySolution);
	solution.innerHTML = mySolution;
	drink.innerHTML = myDrink;

}


