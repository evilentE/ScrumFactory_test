//task1
var myObject = {
	name: 'Dima',
	age: 34,
	hair: 'brown'
}

//tast2
function getProp(obj) {
	return obj.name;
}

//task3
var myArray = [1, 2, 3, 4, 5]

//task4
var myArray = [1, 2, 3, 4, 5];
for (var i = 0; i < myArray.length; i++) {
	console.log(myArray[i]);
}

//task5
for (var i = 1; i < 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log('FizzBuzz');
	} else if (i % 3 == 0) {
		console.log('Fizz');
	} else if (i % 5 == 0) {
		console.log('Buzz');
	} else {
		console.log(i);	
	}
}