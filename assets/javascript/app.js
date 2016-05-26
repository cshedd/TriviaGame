// Setting Variables

var questions = [{
	question: "What is the rank of Australia in the largest countries in the world by total area?",
	choices: ["second", "fourth", "sixth", "eighth"]
	correctAnswer: 2
}, {
	question: "What is the name of the world's largest coral reef system located in Australia?",
	choices: ["The Palancar Reef", "Andaman Sea Reefs", "Raja Ampats", "Great Barrier Reef"]
	correctAnswer: 3
}, {
	question: "Out of any country and with 755 species, Australia has the greatest number of types of _____?",
	choices: ["reptiles", "mammals", "birds", "amphibians"]
	correctAnswer: 0
}, {
	question: "Which of these Australian creatures lives in water and on land, and the males have a pair of spurs behind the leg which can produce venom?"
	choices: ["platypus", "sea otter", "crocodile", "unicorn"]
	correctAnswer: 0
}, {
	question: "Which of these animals is an Austalian icon and when startled will pop out frills around its head?"
	choices: ["goanna", "komodo dragon", "frilled neck lizard", "flying fish"]
	correctAnswer: 2
}];

var currectQuestion: 0;
var correctAnswers = 0;
var triviaOver = false;

// Beginning the trivia

$(document).ready(function(){

	displayCurrentQuestion();
	$(this).find(".triviaGame")
	})
