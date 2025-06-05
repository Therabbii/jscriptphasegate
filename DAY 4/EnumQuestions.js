const prompt = require('prompt-sync')();


console.log("~~~~~~~~~~~||`````````````||~~~~~~~~~~~~")
console.log("ENUM! How intelligent are you? Let's see!")
console.log("~~~~~~~~~~~||`````````````||~~~~~~~~~~~~")

let program = true
let count = 0
let attempt = 0

while(program){

console.log("Pick a question numbered from [1-10] and 0 to exit")

let userChoice = Number(prompt())

switch (userChoice){

	case 1:
		console.log("  Q1. Who was the first to get to the moon?")
		console.log("A. Herbert Macaulay")
		console.log("B. James D. Collins")
		console.log("C. Spinf Heizer")
		console.log("D. Neil Armstrong")
		

		let q1Answer = prompt()
			if(q1Answer == "D" || q1Answer == "d"){
				console.log("Correct!")
				count++
				
			} else{
				console.log("Wrong answer. 1 more try: ")
				 q1Answer = prompt()
			}
			attempt++
	break;

	case 2:
		console.log("  Q2. How many months are in two and a half years?")
		console.log("A. 20")
		console.log("B. 14")
		console.log("C. 29")
		console.log("D. 30")
		
		let q2Answer = prompt()
			if(q2Answer == "D" || q2Answer == "d"){
				console.log("Correct!")
				count++
			} else{
				console.log("Wrong answer. 1 more try: ")
				 q2Answer = prompt()
			}
			attempt++
	break;

	case 3:
		console.log("  Q3. 200 +1324 = ?")
		console.log("A. 1524")
		console.log("B. 1440")
		console.log("C. 2930")
		console.log("D. 3014")
		
		let q3Answer = prompt()
			if(q3Answer == "A" || q3Answer == "a"){
				console.log("Correct!")
				count++
			} else{
				console.log("Wrong answer. 1 more try: ")
				 q3Answer = prompt()
			}
			attempt++
		break;

	case 4:
		console.log("  Q4. Who betrayed Jesus?")
		console.log("A. Thomas")
		console.log("B. Zacheus")
		console.log("C. Judas")
		console.log("D. Barnabas")
		
		let q4Answer = prompt()
			if(q4Answer == "C" || q4Answer == "c"){
				console.log("Correct!")
				count++
			} else{
				console.log("Wrong answer. 1 more try: ")
				 q4Answer = prompt()
			}
			attempt++
		break;


	case 5:
		console.log("  Q5. Which of the following is not a fruit?")
		console.log("A. Cucumber")
		console.log("B. Carrot")
		console.log("C. Cashew")
		console.log("D. Coconut")
		
		let q5Answer = prompt()
			if(q5Answer == "B" || q5Answer == "b"){
				console.log("Correct!")
				count++
			} else{
				console.log("Wrong answer. 1 more try: ")
				 q5Answer =prompt()
			}
			attempt++
		break;


	case 6:
		console.log("  Q6. How long does it take for the earth to revolve round the sun ?")
		console.log("A. 365 days")
		console.log("B. 72hours")
		console.log("C. 24hours")
		console.log("D. 50 days")
		
		let q6Answer = prompt()
			if(q6Answer == "C" || q6Answer == "c"){
				console.log("Correct!")
				count++
			} else{
				console.log("Wrong answer. 1 more try: ")
				 q6Answer = prompt()
			}
			attempt++
		break;


	case 7:
		console.log("  Q7. What is 24 in roman numerals?")
		console.log("A. XIV")
		console.log("B. IVX")
		console.log("C. XXIV")
		console.log("D. VIXX")
		
		let q7Answer = prompt()
			if(q7Answer == "C" || q7Answer == "c"){
				console.log("Correct!")
				count++
			} else{
				console.log("Wrong answer. 1 more try: ")
				 q7Answer = prompt()
			}
			attempt++
		break;


	case 8:
		console.log("  Q3. 200 +1324 = ?")
		console.log("A. 1524")
		console.log("B. 1440")
		console.log("C. 2930")
		console.log("D. 3014")
		
		let q8Answer = prompt()
			if(q8Answer == "A" || q8Answer == "a"){
				console.log("Correct!")
				count++
			} else{
				console.log("Wrong answer. 1 more try: ")
				 q8Answer = prompt()
			}
			attempt++
		break;


	case 9:
		console.log("  Q9. How many trimester does a preganant woman go through?")
		console.log("A. 5")
		console.log("B. 3")
		console.log("C. 2")
		console.log("D. 9")
		
		let q9Answer = prompt()
			if(q9Answer == "B" || q9Answer == "b"){
				console.log("Correct!")
				count++
			} else{
				console.log("Wrong answer. 1 more try: ")
				 q9Answer = prompt()
			}
			attempt++
		break;


	case 10:
		console.log("  Q10. In what year did Nigeria gain her independence?")
		console.log("A. 1950")
		console.log("B. 1930")
		console.log("C. 1960")
		console.log("D. 1984")
		
		let q10Answer = prompt()
			if(q10Answer == "C" || q10Answer == "c"){
				console.log("Correct!")
				count++
			} else{
				console.log("Wrong answer. 1 more try: ")
				 q10Answer = prompt()
			}
			attempt++
		break;

	case 0:
		program = false
		console.log("Exiting... Thank you!");

		break;

	default:
		console.log("Invalid input. Enter number 1-10")
	
	
	
			}


}

console.log("You scored " + count + "/" + attempt + ".")