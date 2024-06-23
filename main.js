//task 1

console.log("My name is Murad");

//task 2

let firstName = "Elkin";

console.log(firstName);

//task 3

/* person, $add */

//task 4

let bookPrice = 750;
let bookAmount = 14;

let totalPrice = bookPrice * bookAmount;

console.log(totalPrice);

//task 5

let kmhSpeed = 75;
let msSpeed = Math.floor(kmhSpeed * 1000 / 3600);

console.log(`${kmhSpeed} saatda kilometrlərlə => ${msSpeed} saniyədə metrə`);

//task 6

let userAge = new Date(prompt("When were you born? Right it down as: YYYY-MM-DD"));

let userAgeDay = Math.floor((Date.now() - userAge.valueOf()) / 1000 / 3600 / 24);

console.log(`You have lived ${userAgeDay} days`);

//task 7

let num = prompt("choose a number");

num = num ** 5 % 3;

console.log(`Here is a new number: ${num}`);

//task 8

let firstNome = "Eddie";
let lastNome = "Fornmon";

console.log(`We are glad to see you ${firstNome} ${lastNome}. Welcome to our webstie`);

// task 9: use task 8-> firstNome and lastNome

console.log(`Sizi bir daha görməyimizə şadıq, ${firstNome} ${lastNome}`);

// task 10

let nome = prompt("Please, write your full name");

console.log(`You have ${nome.length-1} letters in your full name`);

//task 11

let fullName = prompt("Write your fullname");

console.log(`your initials: ${fullName.slice(0,1)}.${fullName.slice(fullName.indexOf(" "),fullName.indexOf(" ")+2)}.`);

//task 12: use task 11-> fullName

console.log(`${fullName.slice(fullName.indexOf(" "))} ${fullName.slice(0, fullName.indexOf(" "))}`);

//task 13

let namu = prompt("What is your name?");

console.log(`Hello, ${namu}`);

//task 14

let number1 = prompt("Give me a number");
let number2 = prompt("Give me another number");

console.log(`Here is their sum:`, number1 + number2);
console.log(`Here is their deduction:`, number1 - number2);
console.log(`Here is their multiplication:`, number1 * number2);
console.log(`Here is their division:`, number1 / number2);

//task 15

let number = 12345 * 98765;

number = number.toString();

console.log(`This number ${number[5]} goes sixth in this ${number} sequence`);