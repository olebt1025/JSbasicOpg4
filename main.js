// function dSix(){
//     return Math.floor(Math.random() * 6) + 1;
// }
// console.log("you rolled: " + dSix());

document.getElementById("diceRoll").addEventListener("click", rollDice);


// this determines the vlue of the diceroll and sides is decided by the type of die selected in the selector.
function rollDice(){

    //parseInt converts the number in the string to a number
    const sides = parseInt(document.getElementById("dieType").value);

    const roll = Math.floor(Math.random() * sides) + 1;


    //this puts the textcontent into the <p> element in the HTML
    document.getElementById("result").textContent = `You rolled a ${roll} on a d${sides}`;

    addToHistory(roll, sides);
} 

function addToHistory(roll, sides) {

    //takes the list element from html and 
    const list = document.getElementById("rollHistory");

    //creates a new list item for every roll
    const item = document.createElement("li");

    item.textContent = ` You have rolled d${sides}: ${roll}`;


    //take the newly created list item and puts it in the list
    list.appendChild(item);
}