

function atmCard(arrayOfCards){

let output = true;

let cardNumber = [6,3,2,3,5,6,7,3,8,4,9,5,8,2,3,7]; 

let cardIssuer = ["visa" , "master" , "discovery" , "AmericaExpress"];
console.log(cardNumber.length);

	for(let index = 0;  index < cardNumber.length; index++){
		if(cardNumber.length == 16 && cardNumber[0] == 4){
				console.log("{valid: true , issuer:" , cardIssuer[0] , "}");break;
			return output;
		}
		else if(cardNumber.length == 16 && cardNumber[0] == 5){
				console.log("{valid: true , issuer:" , cardIssuer[1] , "}");break;
			return output;
		}
		else if(cardNumber.length == 16 && cardNumber[0] == 6){
				console.log("{valid: true , issuer:" , cardIssuer[2] , "}");break;
			return output;
		}
		else if(cardNumber.length == 15 && cardNumber[0] == 3){
				console.log("{valid: true , issuer:" , cardIssuer[3] , "}");break;
			return output;
		}else{
			console.log("{valid: false , issuer: invalid}");
			return false;
		}


	}
}