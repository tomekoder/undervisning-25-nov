// a constant variable that holds an array with name fruitBowl
//a log viewing the whole array and a log viewing the first element in the array
const fruitBowl = ["apple", "pear", "grapes"];
console.log(fruitBowl);
console.log(fruitBowl[0]);

const businessCard = ["Julie", "Hauge", "Veileder", "27"];
console.log(businessCard);
console.log(businessCard[0]);

// 1. lag en variabel som lager visittkort informasjon
// 2. lag html-elementer med IDer som kan hentes til JS
// 3. lag variabler som henter HTMLelementer
// 4. fyll variablene med textContent fra visittkort array

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const title = document.querySelector("#title");
const age = document.querySelector("#age");

console.log(firstName, lastName, title, age);

firstName.textContent = businessCard[0];
lastName.textContent = businessCard[1];
title.textContent = businessCard[2];
age.textContent = businessCard[3];

//

// array with objects
const advanceBusinessCard = [{"firstName": "Julie"}, {"lastName": "Hauges"}, {"title": "veileder"}, {"age": 27}];
console.log(advanceBusinessCard);
console.log(advanceBusinessCard[2]);
console.log(advanceBusinessCard[2].title);

const advancedFruitBowl = [{"firstFruit": "Apple"}, {"secondFruit": "Lemon"}, {"thirdFruit": "Banana"}]
console.log(advancedFruitBowl);

//

// objects with arrays
const biggerFruitBowl = {"fruit": [{"Apple": ["Red apple", "Yellow apple", "Green apple"]}, "Pear", "Grapes", "Lime"], "berries": ["Blueberry", "Strawberry"]};
console.log(biggerFruitBowl);
console.log(biggerFruitBowl.fruit);
console.log(biggerFruitBowl.fruit[0]);

