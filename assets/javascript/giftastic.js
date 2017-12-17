$(document).ready(function() {

//Creation of an on-click event for the submit button, this will lead to the AJAX call being executed
$("#addAnimal").on("click", function(event) {

	//Ensuring that the page doesn't submit itself
	event.preventDefault();

//STEP 1: Making the submit button extract information from the Giphy API	


	//Grabbing the user's input text, and putting the information in a new varibale called animal
	var animal = $('#animal-input').val();

	//Creating the query URL, which is one of the parameters of the AJAX call. Limited to 10 results
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=AkFwbCSaIKXeFXXJc1BOIfByIy9ai35t&limit=10"

	//the AJAX call
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {

	//checking the response
	console.log(response);

	//displaying the JSON in the animal buttons div as a string
	$("#animalButtons").text(JSON.stringify(response));


	

	});//closing the AJAX call



});//closing the on-click function



});//closing the documnent.ready function