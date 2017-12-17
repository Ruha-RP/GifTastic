$(document).ready(function() {

//Creation of an on-click event for the submit button, this will lead to the AJAX call being executed
$("#addAnimal").on("click", function(event) {

	//Ensuring that the page doesn't submit itself
	event.preventDefault();




//STEP 1: Making the submit button extract information from the Giphy API	


	//Grabbing the user's input text, and putting the information in a new varibale called animal
	var animal = $('#animal-input').val().trim();

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


//STEP 2: Creating buttons based on user's input (to be linked to AJAZ call later on)

	//Creation of an array, that will hold related strings**add more later on
	var topics = ["hamster", "rabbit", "cat"];

	//Creation of a function that will ensure every topic in the array becomes a button
	function renderButtons() {

		//Emptying the animalButtons div so that the buttons aren't duplicated
		$("#animalButtons").empty();

		//Looping through the topics array
		for (var i = 0; i < topics.length; i++) {

			//Dynamic generation of button, for each string in the topics array
			var newButton = $("<button>");

			//giving it a class of topic
			newButton.addClass("topic");

			//giving it a data-attribute which will give it one of the strings in the topics array, based on the index
			newButton.("data-name", topics[i]);

			//giving the new button a text of the string value, based on the index
			newButton.text(topics[i]);

			//the button is added to the HTML div was emptied earlier on
			$("#animalButtons").append(newButton);

		};//closing the for loop

	};//closing the renderButtons function




});//closing the on-click function



});//closing the documnent.ready function