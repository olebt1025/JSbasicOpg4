// function dSix(){
//     return Math.floor(Math.random() * 6) + 1;
// }
// console.log("you rolled: " + dSix());

document.getElementById("diceRoll").addEventListener("click", rollDice);

function rollDice(){
    const sides = parseInt(document.getElementById("dieType").value);

    const roll = Math.floor(Math.random() * sides) + 1;

    document.getElementById("result").textContent = `you rolled a ${roll} on a d${sides}`;
} 
