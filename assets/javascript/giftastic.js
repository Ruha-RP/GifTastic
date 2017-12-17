$(document).ready(function() {

//Creation of an on-click event for the submit button, this will lead to the AJAX call being executed
$("#addAnimal").on("click", function(event) {

	//Ensuring that the page doesn't submit itself
	event.preventDefault();

	


});

//closing the on-click function


//Creating the query URL
var queryURL = "";
//the AJAX call
$.ajax({
	url: queryURL,
	method: "GET"
}).done(function(response) {
	//checking the response
	console.log(response);

});







});//closing the documnent.ready function