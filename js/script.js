var heading = "Hello World";

document.getElementById('head').textContent += heading;

//Conditional Statement

// to find the bigger number amoung two values
var firstNumber = 12;
var secondNumber = 27;

if (firstNumber > secondNumber) {
	document.getElementById ('result').innerHTML = firstNumber + ' is bigger than ' + secondNumber;
} else {
	document.getElementById ('result').innerHTML = firstNumber + ' is smaller than ' + secondNumber;
}

var age1 = 45;
var age2 = 66;
var age3 = 24;

// My Attempt
/*
if (age1 + age2 < age3) {
	document.getElementById ('age').innerHTML = age3 + ' is bigger than ' + age1 + ' ' + age2;
} else if (age2 + age3 < age1) {
	document.getElementById ('age').innerHTML = age1 + ' is bigger than ' + age2 + ' ' + age3;
} else{
	document.getElementById ('age').innerHTML = age2 + ' is bigger than ' + age3 + ' ' + age1;
}
*/

//Beula's Example
if ((age1 > age2) && (age1 > age3)) {
	document.getElementById('age').innerHTML = age1 + ' is the biggest <br>';
} else if (age2 > age3) {
	document.getElementById ('age').innerHTML = age2 + ' is bigger than ' + age3 + ' ' + age1;
} else {
	document.getElementById ('age').innerHTML = age3 + ' is bigger than ' + age1 + ' ' + age2;
}
// Both render the same result

// caluculate coffee price, consider discount... condition 5 coffees
var coffeePrice = 3.5;
var quantityCoffee = prompt('how many coffee(s)?');
var coffeeType = prompt('What coffee - espresso or flatwhite?');
var cost = coffeePrice * quantityCoffee;
var discountedCost = (coffeePrice * (85 / 100)) * quantityCoffee;

document.getElementById ('priceOfCoffee').textContent = "The bill is $" + cost;
if (quantityCoffee >= 10) {
	document.getElementById('priceOfCoffee').innerHTML = 'The bill is $' + discountedCost + ' <br>amount of coffee(s) ' + quantityCoffee;
} else {
	document.getElementById('priceOfCoffee').innerHTML = 'The bill is $' + cost + ' <br>amount of coffee(s) ' + quantityCoffee;
}

if (coffeeType === 'espresso') {
	document.getElementById('coffeeImage').innerHTML = '<img class="food" src="images/coffee.jpg" alt="a delicious warm cup of coffee">'
} else if (coffeeType === 'flatwhite') {
	document.getElementById('coffeeImage').innerHTML = '<img class="food" src="images/flatWhite.jpg" alt="a delicious looking muffin on a winters day">'
}

// Calculate the price of muffins - My attempt
/*
// Fixed variables
var muffinPrice = 2.3;

// User input variables
var quantityMuffin = prompt('how many muffin(s)?');

// Discounts added
var costMuffin = quantityMuffin * muffinPrice;
var muffinDiscount1 = (muffinPrice * (91.4 / 100) * quantityMuffin);
var muffinDiscount2 = (muffinPrice * (80 / 100) * quantityMuffin);

// Calculations
if (quantityMuffin >= 10) {
	document.getElementById('priceOfMuffin').innerHTML = 'The bill for muffins is $' + muffinDiscount1 + '<br> amount of muffins ' + quantityMuffin;
} else if (quantityMuffin >= 25) {
	document.getElementById('priceOfMuffin').innerHTML = 'The bill for muffins is $' + muffinDiscount2 + '<br> amount of muffins ' + quantityMuffin;
} else{
	document.getElementById('priceOfMuffin').innerHTML = 'The bill for muffins is $' + costMuffin + '<br> amount of muffins ' + quantityMuffin;
}
*/

// Calculate the price of muffins - answer

var quantityMuffin = prompt('how many muffin(s)?');

// Creating the price
if (quantityMuffin < 9){
	var muffinPrice = 2.35;
} else if (quantityMuffin < 25) {
	var muffinPrice = 2.10;
} else {
	muffinPrice = 1.90;
}

var costMuffin = muffinPrice * quantityMuffin;
document.getElementById('priceOfMuffin').innerHTML = 'The bill for muffins is $' + costMuffin + '<br> amount of muffin(s) ' + quantityMuffin;

// Calculate the priceof a steak dinner - my attempt

// The parseInt is to turn a string into an interger
var quanitySteakDinner = parseInt(prompt('How many people are dining?'));

if (quanitySteakDinner < 2){
	var freeSteakDinner = 0;
	// document.getElementById('numberOfFreeSteaks').innerHTML = 'You will get ' + freeSteakDinner + ' free steak';
	// == to check for equivalence or === to check for type as well
} else if (quanitySteakDinner < 4) {
	var freeSteakDinner = 1;
} else if (quanitySteakDinner < 6) {
	var freeSteakDinner = 2;
} else if (quanitySteakDinner < 8) {
	var freeSteakDinner = 3;
} else if (quanitySteakDinner < 10) {
	var freeSteakDinner = 4;
} else {
	var freeSteakDinner = 5;
}

var sauce = prompt ('Do you want sauce?');
if (sauce === 'yes') {
		var sauceQuantity = parseInt(prompt('how many suace?'))
} else {
		var sauceQuantity = 0;
}

var steakCost = (quanitySteakDinner * 25.60) + (sauceQuantity * 2);

document.getElementById('priceOfSteak').innerHTML = 'The bill for steak(s) is $' + steakCost + '<br>' + quanitySteakDinner + ' Steak Dinners' + ' and ' + freeSteakDinner + (' free steak dinner(s)');




















