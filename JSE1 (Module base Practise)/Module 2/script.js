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

// let givenNum = "1234";
// console.log(typeof givenNum);

// let convertNum = Number(givenNum);
// console.log(typeof convertNum);

// let convertBigint = BigInt(convertNum);
// console.log(typeof convertBigint);

// let convertBool = Boolean(convertBigint);
// console.log(typeof convertBool);


// const str1 = 42 + Number("1");
// console.log(str1);


// Objects:

// let testObj = {
//     nr : 100,
//     str : "Test"
// }

// console.log(testObj.nr);
// console.log(testObj.str);


// let user1 = {
//     name : "Calvin",
//     surName : "Hart",
//     age : 44,
//     email : "CalvinMHart@teleworm.us"
// };

// let user2 = {
//     name : "Mateus",
//     surName : "Pinto",
//     age : 21,
//     email : "MateusPinto@dayrep.com"
// }


// console.log(user1.name);
// console.log(user2.name);


// console.log(user1.age);
// console.log(user2.age);

// user2.age = 25;
// console.log(user2.age);


// console.log(user2.number);
// user2.number = 15965236699;
// console.log(user2.number);


// delete user2.number;
// console.log(user2.number);


// let days = ["Sun", "Mon", "Tues", "Wed", "Thurs"];

// console.log(days[2]);

// days[0]= "Sat";
// console.log(days[0]);

// let emptyArray = [];
// console.log(emptyArray[0]);


let names = ["Olivia", "Emma", "Mateo", "Samuel"];



names.push("Amelia");


// let name = names.pop();
// console.log(name);
// console.log(names);


// let name = names.shift();
// console.log(name);
// console.log(names);


// names.reverse();
// console.log(names);

let n1 = names.slice(2);
// console.log(n1);

let n2 = names.slice(1,3);
// console.log(n2);

let n3 = names.slice(0,-1);
// console.log(n3);

let n4 = names.slice(-1);
// console.log(n4);


// let otherNames = ["Babni", "Tasnim", "Mahiba"];

// let allNames = names.concat(otherNames);

// console.log(allNames);
// console.log(names);
// console.log(otherNames);



// Task:

let tickets = {
    from : "Kamalapur",
    to : "Cumilla",
    price : 100
}

// console.log(tickets);

let person = {

};

person.firstName = "Sidratul";
person.lastName = "Muntaha";

// console.log(person);



// let allBooks = ["firstBook", "secondBook", "thirdBook"];

let allBooks = [ 
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },

    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        pages: 254
    },

    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352
    }

]


let fourthBook = {
    title: " Learning JavaScript Design Patterns",
    author: " Addy Osmani",
    pages: 254
}

allBooks.push(fourthBook);
// console.log(allBooks);
// console.log(allBooks.length);

let twoBooks = allBooks.slice(2);
// console.log(twoBooks);

allBooks.shift();
// console.log(allBooks);
// console.log(allBooks.length);
// console.log(allBooks[2].title)

let sumofPages = allBooks[0].pages + allBooks[1].pages + allBooks[2].pages;
// console.log(sumofPages);


let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];

let fourthcontact = {
    name: "Maisie Haley",
    phone: " 0913 531 3030 ",
    email: "risus.Quisque@urna.ca"
}

contacts.push(fourthcontact);
// console.log(contacts[0].name + "/" + contacts[0].phone + "/" + contacts[0].email);
// console.log(contacts[3].name + "/" + contacts[3].phone + "/" + contacts[3].email);


"use strict"; 
 
const prefix = "username_"; 
 
let userName = "Jack"; 
// const userName = "Adam"; 
 
let prefixedUserName; 
// const prefixedUserName; 
 
userName = "John"; 
prefixedUserName = prefix + userName; 
 
console.log(prefixedUserName /*+  prefixedUserName2 */); 
// console.log(prefixedUserName2);

let x = 0x21;
// x = x+1
console.log(x);

let counter = 100;
// let counter = 200;
counter = 300;
console.log(counter)