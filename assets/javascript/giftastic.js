$(document).ready(function() {



//***STEP 1: Displaying existing topics as buttons

//Creating an Array which holds the subjects for the GIFs
var topics = ["cat", "hamster", "pigeon", "goat", "flamingo", "alligator", "turtle", "dog", "dolphin", "shark"];

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

	};//closing the for loop

};//closing the renderButtons function



//***STEP 2: Creating the on-click Function for the submit button

//Creation of an on-click event for the submit button, this will lead to the AJAX call being executed
$("#addAnimal").on("click", function(event) {

	//Ensuring that the page doesn't submit itself
	event.preventDefault();



//***STEP 3: Making the submit button convert user input to a button 


	//Grabbing the user's input text, trimming white space and putting the information in a new variable called animal
	var animal = $('#animal-input').val().trim();

	//pushing the user input that (from the div animal-input, which is now othe new variable defined above) into the topics array
	topics.push(animal);

	//calling the renderButtons function. This will ensure that the code for creating a new button runs
	renderButtons();


});//closing the on-click function for the submit button



//***STEP 4: Making the topic buttons extract information from the Giphy API	

//Creating a function that will transfer the info gathered from the API onto the div animalButtons
function gifsInfo() {

	//creating a variable that will be the user's input
	var animal = $(this).attr("data-name");

	//Creating the query URL, which is one of the parameters of the AJAX call. Limited to 10 results
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=AkFwbCSaIKXeFXXJc1BOIfByIy9ai35t&limit=10";

	//the AJAX call
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {

		console.log(queryURL);
		//checking the response
		console.log(response);

		// //displaying the JSON in the animal buttons div as a string
		// $("#animals").text(JSON.stringify(response));



//STEP 5: ***displaying the gif image and rating

		// storing the data from the AJAX request in the results variable
        var results = response.data;

        // The result variable needs to be looped since its an array
        for (var i = 0; i < results.length; i++) {

	        // Dynamically creating a div, in a new variable whihc will hold the image and rating
	        var animalDiv = $("<div>");

	        // Creating an html paragraph which will hold the rating
	        var gifP = $("<p>").text("Rating: " + results[i].rating);

	        // Creating an image tag which will hold the gif image
	        var gifImage = $("<img>");

	        // The source of the image will be obtained from the JSON
	        gifImage.attr("src", results[i].images.fixed_height_still.url);

	        //giving each image a data-state of still
	        gifImage.attr("data-state", "still");

	        //giving each image a data still attribute
            gifImage.attr("data-still", results[i].images.fixed_height_still.url);

            //givin each image a data animate attribute
            gifImage.attr("data-animate", results[i].images.fixed_height.url);

            //giving each image a class of gif
            gifImage.attr("class", "gif");

            
            // Appending the paragraph and image are appended to the animalDiv created above
            animalDiv.append(gifP);
            animalDiv.append(gifImage);

            // Prependng ensures that the latest animal clicked appears above
            $("#animals").prepend(animalDiv);

		};//closing the for loop




//STEP 6: ***PAUSING & PLAYING GIFS

		 //Creating a new on-click function, when images are clicked
			$(".gif").on("click", function() {

					//creating a variable called state which will use the data-state to define the condition in an if/else statement
					var state = $(this).attr("data-state");
				
					//creation of the if/else statment
					if (state === "still") {
						$(this).attr("src", $(this).attr("data-animate"));
				        $(this).attr("data-state", "animate");
					}
					else {
				       $(this).attr("src", $(this).attr("data-still"));
				       $(this).attr("data-state", "still");
					}
				    
			});//closing the image on click 
   			
		//***
		renderButtons();

	});//closing the AJAX call

};//closing gifsInfo function


//creating the on-click for the topic buttons whihc will run gifsInfo function. Note the class 'singleTopic' was assigned when dynamically generating the button***
$(document).on("click", ".singleTopic", gifsInfo);



//this function is called so that the strings already present in the array are displayed
renderButtons();

});//closing the document.ready function