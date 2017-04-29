function sumOfSquares(num1, num2, num3){
	if(typeof(num1)!='number' || typeof(num2)!='number' || typeof(num3)!='number'){
		 throw "arguments are not numbers";
	}
	return num1 * num1 + num2 * num2 + num3 * num3;
}
console.log("***** function1 *****");
try{
var sum = sumOfSquares(5, 3, 10);
console.log(sum);
}catch(e){
console.log(e);
}

function sayHelloTo(firstName, lastName, title){
	if(firstName == null){
		throw "firstName can not be empty";
	}
	if(firstName != null && lastName == null && title == null){
		console.log('Hello, ' + firstName + '!');
	}else if(firstName != null && lastName != null && title == null){
		console.log('Hello, ' + firstName + ' ' + lastName + '. I hope you are having a good day!');
	}else if(firstName != null && lastName != null && title != null){
		console.log('Hello, Mr. ' + firstName + ' ' + lastName + '! Have a good evening!');
	}else{
		throw "there is no record!!";
	}
}
console.log("***** function2 *****");
try{
sayHelloTo('haowei', 'chen');
}catch(e){
console.log(e);
}

function cupsOfCoffee(howManyCups){
	if(typeof(howManyCups) != 'number' || howManyCups < 1){
		throw "Excuse me, you don't know HOW to answer how many cups of coffee on the table?!";
	}
	var str1 = '';
	for(var i = howManyCups; i > 1; i--){
		var str1 = str1 + `${i}` + ' cups of coffee on the desk! '
								+ `${i}` + ' cups of coffee!' + "\n" + 'Pick one up, drink the cup, ' + `${i-1}`
								 + ' cups of coffee on the desk!' + "\n";
	}
	var str2 = '1 cup of coffee on the desk! 1 cup of coffee!' + "\n" + 'Pick it up, drink the cup, no more coffee left on the desk!';
	return str1 + str2;
}
console.log("***** function3 *****");
try{
console.log(cupsOfCoffee(5));
}catch(e){
console.log(e);
}

function occurrencesOfSubstring(fullString, substring){
	if(typeof(fullString) != 'string' || typeof(substring) != 'string'){
		throw "A string describing an error!";
	}
	var count = 0;
	for(var i = 0; i <= fullString.length - substring.length; i++){
		var temp = fullString.substring(i, i + substring.length);
		if(temp === substring){
			count = count + 1;
		}
	}
	return count;
}
console.log("***** function4 *****");
try{
console.log(occurrencesOfSubstring("Hellllllo, class!", "ll"));
}catch(e){
console.log(e);
}

function randomizeSentences(paragraph){
	if(typeof(paragraph) != 'string'){
		throw "A string describing an error!";
	}
	//split by the full stop
	var sentenceArray = paragraph.split('.');
	//remove the empty element of the array
	sentenceArray = sentenceArray.slice(0, sentenceArray.length-1);
	//trim sentence
	for (var i = sentenceArray.length - 1; i >= 0; i--) {
		if(sentenceArray[i].substring(0,1) === ' '){
			sentenceArray[i] = sentenceArray[i].substring(1,sentenceArray[i].length);
		}
		sentenceArray[i] = sentenceArray[i] + '.';
	};
	//shuffle array
	var shuffleArray = sentenceArray.sort(function(){return Math.random()>0.5?-1:1;}); 
	return shuffleArray.join(' ');
}
var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
console.log("***** function5 *****");
try{
console.log(randomizeSentences(paragraph));
}catch(e){
console.log(e);
}

