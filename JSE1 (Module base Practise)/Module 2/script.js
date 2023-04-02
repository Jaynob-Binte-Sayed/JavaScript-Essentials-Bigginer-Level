"use strict";


const declaration 

const greetings = "Hello!";
const newGreetings;

var globalGreeting = "Good";

function testFunction() {
    var localGreeting = "Morning";
    console.log("function:");
    console.log(globalGreeting);
    console.log(localGreeting);
}

testFunction();

console.log("Main function:");
console.log(globalGreeting);
console.log(localGreeting);


const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let roseUnit = 70-20;
let lilyUnit = 50-30;
let tulipUnit = 120;

let roseValue = rosePrice * roseUnit;
let lilyValue = lilyPrice * lilyUnit;
let tulipValue = tulipPrice * tulipUnit;

let total = roseValue + lilyValue + tulipValue;

console.log("Rose = unit price: " + rosePrice + ", quantity: " + roseUnit + ", value: " + roseValue);
console.log("Lily = unit price: " + lilyPrice + ", quantity: " + lilyUnit + ", value: " + lilyValue);
console.log("Tulip = unit price: " + tulipPrice + ", quantity: " + tulipUnit + ", value: " + tulipValue);
console.log("Total: " + total);


let firstName = "Maxwell Wright";
let secondName = "Raja Villarreal";
let thirdName = "Helen Richards";

let firstNumber = "(0191) 719 6495";
let secondNumber = "0866 398 2895";
let thirdNumber = "0800 1111";

let firstEmail = "Curabitur.egestas.nunc@nonummyac.co.uk";
let secondEmain = "posuere.vulputate@sed.com";
let thirdEmail = "libero@convallis.edu";

console.log(firstName + "/" + firstNumber + "/" + firstEmail);
console.log(thirdName + "/" + thirdNumber + "/" + thirdEmail);