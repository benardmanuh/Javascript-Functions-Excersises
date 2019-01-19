// Make an keyless car EVEN BETTER!
// We are improving our car from previous exercise now. 



//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
function checkDriverAge() {
	var age = prompt("What is your age?");
	if (age < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (age > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (age === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

// I have written a function with a argument called name. this function returns the name value on the console log.
function writeName(name) {
	 return console.log(name);
}

writeName("Benard"); 



// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?


//2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.
var checkDriverAge2 = function() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
} 

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

 /* the argument is used as a input field so if you type checkDriverAge3(15) it will return "Sorry, you are too young to drive this car. Powering off" 
 */


 function checkDriverAge3(age) {
	if (age < 18) {
		return "Sorry, you are too young to drive this car. Powering off";
	} else if (age > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (age === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	} 
} 



function checkDriverAge4(age) {
	//make sure to put 'age < 18' inside brackets
	if (age < 18) {
		//unlike the 'alert()' feature, a string after 'return' should not be written inside brackets.
		return "Sorry, you are too young to drive this car. Powering off";
	} else if (age > 18) {
		return "Powering on. Enjoy the ride!";
	} else if (age === 18)
		return "Congratulations on your first year of driving. Enjoy the ride!";
}

