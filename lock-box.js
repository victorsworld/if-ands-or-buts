const prompt = require 
("prompt-sync")({sigint: true})

let pinCode = 1234;
let userInput = Number(prompt("Enter in a 4 digit numerical passcode to unlock the LockBox: "));

if(userInput === pinCode){
console.log("Succes!")
}
else{
    console.log("Failure")
}
