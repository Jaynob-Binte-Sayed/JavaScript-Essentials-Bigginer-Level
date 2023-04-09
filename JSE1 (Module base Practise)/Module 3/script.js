"use strict";

let year = 1990;
let newYear = year = 1991;

// console.log(year);

// console.log(2+2*2);
// console.log(2+(2*2));
// console.log((2+2)*2);

const x = 5;
const y = 2;

// console.log( x + y );
// console.log( x - y );
// console.log( x * y );
// console.log( x / y );
// console.log( x % y );
// console.log( x ** y );

let str = "123";

let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";

// console.log(`${str} : ${typeof str}`);
// console.log(`${n1} : ${typeof n1}`);
// console.log(`${n2} : ${typeof n2}`);
// console.log(`${n3} : ${typeof n3}`);
// console.log(`${n4} : ${typeof n4}`);



let p1 = 10;
let p2 = 20;

// console.log(p1);
// console.log(p1++);
// console.log(p1);



// console.log(p2);
// console.log(++p2);
// console.log(p2);


let p3 = 30;
let p4 = 40;

// console.log(p3);
// console.log(p3--);/
// console.log(p3);


// console.log(p4);
// console.log(--p4);
// console.log(p4);


let q = 10;

q += 2;
// console.log(q);

q -= 4;
// console.log(q);


q *= 3;
// console.log(q);

q /= 6;
// console.log(q);

q **=3;
// console.log(q);


q %= 10;
// console.log(q);



let anr = 0;
let ayear = 1996;
let aname = "Alice";
let empty = "";

// console.log(!anr);
// console.log(!aname);
// console.log(!ayear);
// console.log(!empty);

// console.log(!!anr);
// console.log(!!aname);



// console.log(true && 1996);
// console.log(false && 1996);
// console.log(2 && 6);
// console.log(0 && 6);
// console.log("Alice" && "Bob");
// console.log("" && "Bob");



// console.log(true || 1996);
// console.log(false || 1996);
// console.log(2 || 6);
// console.log(0 || 6);
// console.log("Alice" || "Bob");
// console.log("" || "Bob");



// console.log(2 * 3 + 1); // expected 7  
// console.log(2 ** 4);  // expected 16  
// console.log(5 * 1);  // expected 5  
// console.log(8 ** 2 - 5 ** 2); // expected 39



// console.log(4 * 5 == 20);
// console.log(6 * 5 == "30");
// console.log(-17 < 0);  
// console.log(25 > 1);  
// console.log(2 + 2 * 2 > 4);



// console.log(true || false);  
// console.log(false || false);  
// console.log(false && false && true);  
// console.log(true || false || false && true);


let greetings = "Hi";
let sen = "Alice";
// let newSentence = greetings + " " + sen;
// console.log(newSentence);

// let sentence = "Happy New Year";
// let sentenceNew = sentence + " 1996";
// console.log(sentenceNew);

let sentence = "Happy New ";
sentence += "Year";
// console.log(sentence);
sentence += " 2023"
// console.log(sentence);


// alert("Hey! Ramjam Mubarak");
// alert(4*7);
// alert(true);
// alert("text 1", "text 2");



// let declaration = window.confirm("Is it ok?");
// console.log(declaration);


// let rmv = confirm("Remove All the daya");
// let message = rmv ? "Deleting Data" : "Cancelled operation";

// console.log(message);


// let name = window.prompt("What is your name?", "John Doe");
// name = name ? name : "anonymous";

// let age = prompt("What is your age " + name);
// alert(name + " is " +  age + " years old");



// let length = prompt("Enter the length:");
// console.log(length);

// let width = prompt("Enter the width:");
// console.log(width);

// let height = prompt("Enter the height:");
// console.log(height);


// console.log(length * width * height);



// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
//     }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
//     }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
//     }];
    
//     // write your code here

//     let newName = prompt("Enter your name:");

//     let newPhone = prompt("Enter your phone:");
    
//     let newEmail = prompt("Enter your email:");

// contacts[2] = {
//     name: newName,
//     phone: newPhone, 
//     email: newEmail

// };

    
// let last = contacts.length - 1;
    
// console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
// console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);


// let test = prompt("Hello", "World");
// console.log(test);

// let n = 10;
// let m = ++n;

// console.log(n);
// console.log(m);


// let strg = "12";
// strg = +strg;

// console.log(strg);

let n = 2 * 3 ** 3 -1 ;
// n **= 3;
console.log(n);


let nr = "1";

let g = (nr === 1);
console.log(g);
let h = (nr == 1);
console.log(h);

let i = (nr = 1);
console.log(i);


let z = false || "false";

// console.log(z);

let f = 20|| 5;
console.log(f);
