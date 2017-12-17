$(document).ready(function() {



//***STEP 1: Displaying existing topics as buttons

//Creating an Array which holds the subjects for the GIFs
var topics = ["cat", "hamster", "pigeon"];

//Creating the renderButtons function for displaying the topics in the array as buttons. 3 steps involved: (a)emptying the div, (b)for loop, (c)button creation
function renderButtons() {

	//emptying the div that will hold the contents, so as to prevent duplicates
	$("#animalButtons").empty();

	//Looping through each string in the array
	for (i = 0; i < topics.length; i++) {

		//dynamically creating a button for each string in the array
		var x = $("<button>");

		//giving the button a few properties: class, data-attribute and text based on the index
		x.addClass("singleTopic");
		x.attr("data-name", topics[i]);
		x.text(topics[i]);

		//adding the button to the div that was cleared earlier
		$("#animalButtons").append(x);

	};//closing th for loop

};//closing the renderButton function



//***STEP 2: Creating the on-click Function

//Creation of an on-click event for the submit button, this will lead to the AJAX call being executed
$("#addAnimal").on("click", function(event) {

	//Ensuring that the page doesn't submit itself
	event.preventDefault();



//***STEP 3: Making the submit button: (a)convert user input to a button, (b)extract information from the Giphy API	


	//Grabbing the user's input text, trimming white space and putting the information in a new variable called animal
	var animal = $('#animal-input').val().trim();

	//pushing the user input that (from the div animal-input, which is now othe new variable defined above) into the topics array
	topics.push(animal);

	//calling the renderButtons function. This will ensure that the code for creating a new button runs
	renderButtons();


	// //Creating the query URL, which is one of the parameters of the AJAX call. Limited to 10 results
	// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=AkFwbCSaIKXeFXXJc1BOIfByIy9ai35t&limit=10"

	// //the AJAX call
	// $.ajax({
	// 	url: queryURL,
	// 	method: "GET"
	// }).done(function(response) {

	// //checking the response
	// console.log(response);

	// //displaying the JSON in the animal buttons div as a string
	// $("#animalButtons").text(JSON.stringify(response));


	
	// });//closing the AJAX call


});//closing the on-click function

//this function is called so that the strings already present in the array are displayed
renderButtons();

});//closing the documnent.ready function