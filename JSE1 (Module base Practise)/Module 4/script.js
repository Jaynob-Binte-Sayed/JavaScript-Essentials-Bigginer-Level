
// let isUserReady = confirm("Are you ready?");
// console.log(isUserReady);
// if ( isUserReady ) {
//     alert ("I am ready");
// }

// let UnitPrice = 10;
// let pieces = prompt("How many pieces do you want?", 0);
// if ( pieces > 0 ) {
//     let total = UnitPrice * pieces;
//     console.log(total);
// } 

// console.log(total);
// "use strict";

// let isUserReady = confirm("Are you ready?");
// console.log(isUserReady);

// if (isUserReady) {
//     alert("User is ready!!");
// }


// let isUserReady = confirm("Are you ready?");

// if (isUserReady) {
//     console.log("User ready!");
//     alert("User ready!");
// }


// let unitPrice = 10;

// let pieces = prompt("How many pieces you want", 0);

// if( pieces > 0 ) {
    
// let total = unitPrice * pieces;
// console.log(total);

// }
// console.log(total);



// let userAge = 23;
// let isFemale = false;
// let points = 703;
// let cartValue = 299;
// let shippingCost = 9.99;

// if ( userAge > 21 ) {
//     if ( cartValue >= 300 || points >= 500 ) {
//         shippingCost = 0;
//     }
// }

// if ( userAge > 21 && ( cartValue >= 300 || points >= 500)) {
//     shippingCost = 0;
// }
// console.log(shippingCost);



// let isUserReady = confirm("Are you ready?");

// if ( isUserReady ) {
//     console.log("User is ready");
// }

// if ( isUserReady == false) {
//     console.log("User is not ready");
// }

// else {
//     console.log("User is not ready");
// }


// let price = 40;
// let shippingcost;

// if (price > 50) {
//     shippingcost = 0;
// }

// else {
//     shippingcost = 5;
// }

// console.log(`Price = ${price}, ShippingCost = ${shippingcost}` );


// let shippingcost = price > 50 ? 0 : 5;
// console.log(`Price = ${price}, ShippingCost = ${shippingcost}` );


// let start = confirm("Start?");

// start ? alert("Here you go !") : console.log("Aborted");

// let message = start ? "Here you go !" : "Aborted";
// alert(message);


let gate = prompt("Choose a gate: A, B or C");
let win = false;

switch (gate) {
    case "A" : {
        alert("Gate A : Empty");
        break;
    }

    case "B" : {
        alert("Gate B : Main Prize");
        win = true;
        break;
    }

    case "C" : {
        alert("Gate C : Empty");
        break;
    }

}

if(win) {
    alert("Winner!");
}