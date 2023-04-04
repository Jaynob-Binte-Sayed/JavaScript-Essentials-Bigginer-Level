"use strict";


// var height;
// console.log(height);
// console.log(weight);

// // use of let and var

// let height;
// let height;


// var height;
// var height;


// let height = 180;
// let anotherHeight = height;
// console.log(height);
// console.log(anotherHeight);
// let weight = 70;
// console.log(weight);

// height = 180;
// console.log(height);

// let steps = 100;
// console.log(steps);
// steps = 120;
// console.log(steps);
// steps = steps + 200;
// console.log(steps);




// const declaration 

// const greetings = "Hello!";
// const newGreetings;

// var globalGreeting = "Good";

// function testFunction() {
//     var localGreeting = "Morning";
//     console.log("function:");
//     console.log(globalGreeting);
//     console.log(localGreeting);
// }

// testFunction();

// console.log("Main function:");
// console.log(globalGreeting);
// console.log(localGreeting);


// const rosePrice = 8;
// const lilyPrice = 10;
// const tulipPrice = 2;

// let roseUnit = 70-20;
// let lilyUnit = 50-30;
// let tulipUnit = 120;

// let roseValue = rosePrice * roseUnit;
// let lilyValue = lilyPrice * lilyUnit;
// let tulipValue = tulipPrice * tulipUnit;

// let total = roseValue + lilyValue + tulipValue;

// console.log("Rose = unit price: " + rosePrice + ", quantity: " + roseUnit + ", value: " + roseValue);
// console.log("Lily = unit price: " + lilyPrice + ", quantity: " + lilyUnit + ", value: " + lilyValue);
// console.log("Tulip = unit price: " + tulipPrice + ", quantity: " + tulipUnit + ", value: " + tulipValue);
// console.log("Total: " + total);


// let firstName = "Maxwell Wright";
// let secondName = "Raja Villarreal";
// let thirdName = "Helen Richards";

// let firstNumber = "(0191) 719 6495";
// let secondNumber = "0866 398 2895";
// let thirdNumber = "0800 1111";

// let firstEmail = "Curabitur.egestas.nunc@nonummyac.co.uk";
// let secondEmain = "posuere.vulputate@sed.com";
// let thirdEmail = "libero@convallis.edu";

// console.log(firstName + "/" + firstNumber + "/" + firstEmail);
// console.log(thirdName + "/" + thirdNumber + "/" + thirdEmail);



// Data Types:


// let year = 2023;
// console.log(year);
// console.log(2022);
// console.log("Year");


// typeof Operator:

// let year = 2023;
// console.log(typeof year);
// console.log(typeof 2022);

// let name = "Year";
// console.log(typeof name);
// console.log(typeof "Jaynob");


// let TypeofYear = typeof year;
// console.log(TypeofYear);
// console.log(typeof TypeofYear);


// console.log(BigInt(11)); 
// console.log(BigInt(0x11)); 
// console.log(BigInt(11e2));

// console.log(BigInt(true));

// console.log(BigInt("11")); 
// console.log(BigInt("0x11"));

// console.log(BigInt(null));
// console.log(BigInt(undefined));

// console.log(BigInt(NaN)); 

// let bool = true;
// console.log(`${bool}[${typeof bool}]`);

// let num2 = 1n;
// console.log(`${num2}[${typeof num2}]`);


// let num = 56;
// console.log(`${num}[${typeof num}]`);

// let str = "Hey!";
// console.log(`${str}[${typeof str}]`);

// let und = undefined;
// console.log(`${und}[${typeof und}]`);

let givenNum = "1234";
console.log(typeof givenNum);

let convertNum = Number(givenNum);
console.log(typeof convertNum);

let convertBigint = BigInt(convertNum);
console.log(typeof convertBigint);

let convertBool = Boolean(convertBigint);
console.log(typeof convertBool);


const str1 = 42 + Number("1");
console.log(str1);
