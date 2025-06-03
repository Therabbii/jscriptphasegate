const prompt = require('prompt-sync')();


function getBalance(balance){
	balance = 0.0;
};

function withdrawalAmount(balance , amountToWithdraw){
	if (amountToWithdraw < balance){	
		balance = balance - amountToWithdraw - 100
		return balance
	}
};

console.log("Welcome to TimChoco Microfinance Bank!")
let balance = Number(prompt("Enter your account balance(#100 and above): "))
while (balance < 100){
	balance = Number(prompt("Enter an amount above #100: "))
}

let program = true;
console.log("<><><><><><><><><><><><><><>");
while(program){

	console.log("What do you want to do?")
	console.log("1. Make withdrawal")
	console.log("2. Check transaction history")
	console.log("3. Exit")

	let userSelection = Number(prompt("Make a selection: "));
	
	switch (userSelection){
		case 1: 
			let amountToWithdraw = Number(prompt("Enter amount to withdraw in multiples of #500 && #1000(Fixed charge of #100): "))

			while(amountToWithdraw > balance){
				amountToWithdraw = Number(prompt("Insufficient funds. Enter an amount lesser than your balance: "));
			};
			while(amountToWithdraw > 20000){
				amountToWithdraw = Number(prompt("You cannot withdraw above #20,000. Enter an amount lesser: "));
				while(amountToWithdraw > balance){
					amountToWithdraw = Number(prompt("Insufficient funds. Enter an amount lesser than your balance: "));
				};
			};

			while (amountToWithdraw % 500 != 0 && amountToWithdraw % 1000 != 0){
				amountToWithdraw = Number(prompt("Enter amount in multiples of #500 and #1000: "))
				while(amountToWithdraw > balance){
					amountToWithdraw = Number(prompt("Insufficient funds. Enter an amount lesser than your balance: "))
				}
			};


			balance = withdrawalAmount(balance , amountToWithdraw)

			console.log("<><><><><><><><><><><><><><>");
			console.log("Transaction successful!")
			console.log("You withdrew #" + amountToWithdraw + ".")
			console.log("Withdrawal fee: #100") 
			console.log("Your balance is #" + balance + ".");
			console.log("<><><><><><><><><><><><><><>");
			break;
		 
		//case 2:
			
		case 3:
			program = false
			console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><><><>");
			console.log("Thank you for banking with us! For customer complaint, contact 09000011123.")		
			console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><><><>");
	
	}


}	
		
		
		
