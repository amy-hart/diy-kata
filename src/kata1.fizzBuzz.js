const fizzBuzz = (number) => {
	if(number % 3 === 0 && number % 5 === 0){
		return "FizzBuzz";
	}else if(number % 3 === 0){
		// If there is no remainder when the number is divided by 3, it must be a multiple of 3
		//returns Fizz when passed a multiple of 3
		return "Fizz";
	}else if(number % 5 === 0){
		// If there is no remainder when the number is divided by 5, it must be a multiple of 5
		//returns Buzz when passed a multiple of 5
		return "Buzz";
	}else{
		return number;
	}
}

module.exports = fizzBuzz;
