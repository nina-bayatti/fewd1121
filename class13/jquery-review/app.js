// Change the boxes' background-color (hint: use the .css() function)
$("div.box").css({"background-color": "pink"});
// Add some text to the boxes (hint: use either the .text() or .html() functions)
$("div.box").html("Hello, World.");
// Clicking on either box changes that PARTICULAR box's height and width each to 500px
// $("#box-1").click(function(){
// 	$("#box-1").css({"height":"500px", "width":"500px"});
// });

// $("#box-2").click(function(){
// 	$("#box-2").css({"height":"500px", "width":"500px"});
// });

// Can you figure out another way to build your solution to question #4 WITHOUT relying on the boxes' HTML ID's?
$("div.box").click(function(){
	$(this).css({"height":"500px", "width":"500px"})
});