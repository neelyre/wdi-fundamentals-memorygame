
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[1];
var cardTwo = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
   
   if (cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a Match!");
}
else {
	alert("Sorry, try again!");
}
}
console.log("User flipped " + cardsInPlay);

