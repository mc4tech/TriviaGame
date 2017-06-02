$(document).ready(function() {
	
    //Hides the next button when page is loaded.
    $("#next").hide();
	//set number counter to 30 for timer
	var number = 31;

	//  Variable that will hold our interval ID when we execute
    //  the "startGame" function
    var intervalId;

    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
    
    //Trivia Questions
	var questions = [{
		question: "Which NFL team has the most Superbowl Championships?",
		choices: ["Green Bay", "Pittsburgh", "Dallas", "New England"],
		correctAnswer: "Pittsburgh"
	}, {
		question: "What's the record for passing touchdowns in a season?",
		choices: [52, 65, 55, 48],
		correctAnswer: 55
	}, {
		question: "What's the season record for rushing touchdowns in a season?",
		choices: [21, 28, 25, 26],
		correctAnswer: 28
	}, {
		question: "Which MLB team has won the most World Series?",
		choices: ["Yankees", "Braves", "Giants", "Cardinals"],
		correctAnswer: "Yankees"
	}, {
		question: "What's the record for homeruns in a season?",
		choices: [65, 66, 73, 75],
		correctAnswer: 73
	}, {
		question: "How many championships has Michael Jordan won?",
		choices: [5, 6, 8, 4],
		correctAnswer: 6
	}, {
		question: "How many Superbowls have the Cowboys won?",
		choices: [3, 5, 4, 6],
		correctAnswer: 5
	}, {
		question: "Which NFL quarterback set a record of 6109 rushing yards?",
		choices: ["John Elway", "Donovan Mcnabb", "Steve McNair", "Michael Vick"],
		correctAnswer: "Michael Vick"
	}];


	



    //when the start button gets clicked run the "startGame" function
	$("#start").click(function() {
		//Hides the #firstPage div after start button is clicked.
		$("#firstPage").hide();
		$("#next").show();
		startGame();
		displayNext();
		// createQuestionElement(0);
		// createRadios(0);
	});

	 //  The run function sets an interval
    //  that runs the decrement function once a second.
	function startGame() {
		intervalId = setInterval(decrement, 1000);
	}

	function decrement() {

		//Decrease number by one.
		number--;

		//Show the number in the #showTimer tag.
		$("#showTimer").html("<h2>Time Remaining: " + number + "</h2>");

		//If the number reaches zero...
		if (number === -1) {

			//...run the stop function.
			stop();

			//Tell user the time is up.
			$("#showTimer").html("<h2> Time Is Up!!! <h2>");
		}
	}

	//The stop function.
	function stop() {
		clearInterval(intervalId);
	}
	// Creates and returns the div that contains the questions and 
	// the answer selections
	function createQuestionElement(index) {
	    for(var i = 0; i < questions.length; i++) {
		    var qElement = $('<div>', {
		        id: 'question'+ index
		    });
		    
		    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
		    qElement.append(header);
		    
		    var question = $('<p>').append(questions[index].question);
		    qElement.append(question);
		    
		    var radioButtons = createRadios(index);
		    qElement.append(radioButtons);
		    // quiz.append(qElement);
		    
		    return qElement;
		}
	  }
	  
	// Creates a list of the answer choices as radio inputs
	function createRadios(index) {
	    var radioList = $('<ul>');
	    var item;
	    var input = '';
	    
	    for (var i = 0; i < questions[i].choices.length; i++) {
	      item = $('<li>');
	      input = '<input id="choices[i] "type="radio" name="answer" value=' + i + ' />';
	      input += questions[index].choices[i];
	      item.append(input);
	      radioList.append(item);
	    }
	    return radioList;
	  }

	// Displays next requested element
	function displayNext() {
	    quiz.fadeOut(function() {
	    // $('#question').remove();
	    for (var i = 0; i < questions.length; i++) {
		    if(questionCounter < questions.length){
		        var nextQuestion = createQuestionElement(i);
		        quiz.append(nextQuestion).fadeIn();
		        if (!(isNaN(selections[questionCounter]))) {
		          $('input[value='+selections[questionCounter]+']').prop('checked', true);
	        	}
	        }
	    }
	    });
	}

});