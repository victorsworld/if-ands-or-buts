const prompt = require
("prompt-sync")({sigint: true})

console.log(`Players 1 and 2 This Is "Rock" "Paper" "Scissors" Enter your Choice Below!`)
let player1 = prompt("Player 1 Enter Your Choice: ")
let player2 = prompt("Player 2 Enter Your Choice: ")

if(player1 === "Rock" && player2 === "Scissors" || player1 === "Scissors" && player2 === "Paper" || player1 === "Paper" && player2 === "Rock"){
    console.log("Player 1 Winner, Winner, Chicken Dinner!")
}

else if(player2 === "Rock" && player1 === "Scissors" || player2 === "Scissors" && player1 === "Paper" || player2 === "Paper" && player1 === "Rock"){
    console.log("Player 2 Winner, Winner, Chicken Dinner!")
}

else if(player1 === "Scissors" && player2 === "Sciccors" || player1 === "Rock" && player2 === "Rock" || player1 === "Paper" && player2 === "Paper"){
    console.log("Its A Draw!")
} else{
    console.log(`Inavild Input please enter "Rock" "Scissors" "Paper" `)
}