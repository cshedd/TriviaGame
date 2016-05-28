// $(document).ready(function(){

// Setting Variables & Objects (Advised divs inside object,  opposed to value of answer in array)----------------------------------------------------------------------

var questions = [{
	question: "What is the rank of Australia in the largest countries in the world by total area?",
	choices: ["<div class = 'row incorrect'><p>Second</p></div>","<div class = 'row incorrect'><p>Fourth</p></div>","<div id = 'correct' class = 'row'><p>Sixth</p></div>","<div class = 'row incorrect'><p>Eighth</p></div>"],
	answer: "<div id = 'correct' class = 'row'><p>Sixth</p></div>",
}, {
	question: "What is the name of the world's largest coral reef system located in Australia?",
	choices: ["<div class = 'row incorrect'><p>The Palancar Reef</p></div>","<div class = 'row incorrect'><p>Andaman Sea Reefs</p></div>","<div class = 'row incorrect'><p>Raja Ampats</p></div>""<div id = 'correct' class = 'row'><p>Great Barrier Reef</p></div>"],	
	answer: "<div id = 'correct' class = 'row'><p>Great Barrier Reef</p></div>",
}, {
	question: "Out of any country and with 755 species, Australia has the greatest number of types of _____?",
	choices: ["<div id = 'correct' class = 'row'><p>Reptiles</p></div>","<div class = 'row incorrect'><p>Mammals</p></div>","<div class = 'row incorrect'><p>Birds</p></div>","<div class = 'row incorrect'><p>Amphibians</p></div>"],	
	answer: "<div id = 'correct' class = 'row'><p>Reptiles</p></div>",
}, {
	question: "Which of these Australian creatures lives in water and on land, and the males have a pair of spurs behind the leg which can produce venom?",
	choices: ["<div id = 'correct' class = 'row'><p>Platypus</p></div>","<div class = 'row incorrect'><p>Sea Otter</p></div>","<div class = 'row incorrect'><p>Crocodile</p></div>","<div class = 'row incorrect'><p>Unicorn</p></div>"],	
	answer: "<div id = 'correct' class = 'row'><p>Platypus</p></div>",
}, {
	question: "Which of these animals is an Austalian icon and when startled will pop out frills around its head?",
	choices: ["<div class = 'row incorrect'><p>Goanna</p></div>","<div class = 'row incorrect'><p>Komodo Dragon</p></div>","<div id = 'correct' class = 'row'><p>Frilled Neck Lizard</p></div>","<div class = 'row incorrect'><p>Flying Fish</p></div>"],
	answer: "<div id = 'correct' class = 'row'><p>Frilled Neck Lizard</p></div>",
}];


var questionCounter = [];
var correctAnswer = 0;
var wrongAnswer = 0;
var noAnswer = 0;
var timeInterval;

$(document).ready(function(){

// Starts the game --------------------------------------------------------------------------------

	function startScreen() {
		$("#question").html(questions[questionCounter].question);
		$("#choices").html(questions[questionCounter].choices);
	}
	startScreen();


	function startGame () {
		$('#answer').html('<div class= "row results" id= "startGame">Get ready, mate!</div>');
		$('')
		clicks();

	}	
	startGame();	

// Starting the timer ------------------------------------------------------------------------------

	function countDown() {
		var i = 20;
		timeInterval = setInterval(function() {
			$("#timer").html("<p>Seconds Left: " + i + "</p>");

			if (i===0) {
				clearInterval(timeInterval)
					noAnswer++;
					showAnswer();
					$("#timer").empty();
					questionCounter++;
					setTimeout(nextQuestion, 4*1000);
				}
				else {
					i--;
				}
			}, 1000);
		}
		countDown();


// Show the correct answer --------------------------------------------------------------------------

	function showAnswer() {
		$('#question').append("<p>The answer is: </p>");
		$('#answer').html(questions[questionCounter].correct);
	}

// To end the trivia ---------------------------------------------------------------------

	function endGame() {
		$('#choices').append('<div class= "row results">Correct: '+correctAnswer+'</div>');
		$('#choices').append('<div class= "row results">Wrong: '+wrongAnswer+'</div>');
		$('#choices').append('<div class= "row results">Unanswered: '+noAnswer+'</div>');
		$('#choices').append('<div class= "row results" id="reset">Retry</div>');
		$('#reset').on("click", function(){
			questionCounter = 0;
			correctAnswer = 0;
			wrongAnswer = 0;
			noAnswer = 0;
			$('question').empty();  // Clears out
			start();
		});
	}


// To move on to the next question ------------------------------------------------------------

	function nextQuestion() {
		clearInterval(timeInterval);
		$('timer').empty();

		if(questionCounter < 5) {
		startScreen();
		countDown();
		clicks;
		}

		else {
			$('#answer').empty();
			if(correctAnswer >= 3) {
				$('#question').html("Good on'ya, mate!");
				endGame();
			}
		else {
			$('#question').html("Eh, not quite there, mate.");
			endGame();
			}	
		}
	}

	// Click Events for questions -------------------------------------------------------------------------------

	function clicks() {
		$('.incorrect').on("click", function(){
			$('#timer').empty();  // Clear out 
		showAnswer();
		questionCounter++;
		wrongAnswer++;
		clearInterval(timeInterval);
		setTimeout(nextQuestion, 4*1000);	
		});

		$('#startGame').on("click",function(){
			nextQuestion();
		});
	}


}); //closes jquery
