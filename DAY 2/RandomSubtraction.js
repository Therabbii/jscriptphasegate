const prompt = require('prompt-sync')();


function randomGenerator(number1 , number2){
	number1 = Math.floor(Math.random() * 100);
	number2 = Math.floor(Math.random() * 100);

	let subtraction = 0;

	
	if(number1 > number2){
		subtraction = number1 - number2;
	console.log(number1 + "-" + number2)
	}
	else if  (number1 < number2){
		let numberLow = number1
		subtraction = number2 - numberLow;
	console.log(number2 + "-" + numberLow)
	}
	return subtraction;
};


let count = 0;

for (let attempt = 1; attempt <= 10; attempt++){
	console.log("Question [" + attempt + "]:")
	let equationAnswer = randomGenerator()
	let userInput = prompt("What is the answer? ")
		if (userInput == equationAnswer){
		count++
		}
		else if (userInput != equationAnswer){
		console.log("Incorrect. Second try: ")
		userInput = prompt("What is the answer? ")
		}
}

	console.log("==== You scored " + count + "/10 ====")

