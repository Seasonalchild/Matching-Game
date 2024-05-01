let game = document.querySelector(".game");
let nameDiv = document.querySelector(".nameDiv");
let nameButton = document.querySelector(".nameButton");
nameButton.onclick = function() {

    let Name = document.querySelector(".name").value;

    nameDiv.innerHTML = "Ready up " + Name + ".";
};
let counterdiv = document.querySelector(".counter");
let counter = 0;

let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/edbf3a8b-a39a-45e0-9b09-b4ed5f7c3fc7/";
let clickedIds = [];
let cards = [
    "apple%20juice.jpg?v=1710435432823",
    "coffee.jpg?v=1710435435050",
    "Horchata.jpg?v=1710435437501",
    "milkshake.jpg?v=1710435439734",
    "orange%20juice.jpg?v=1710435442692",
    "Sprite.jpg?v=1710435445883",
    "tea.jpg?v=1710435449145",
    "Water.jpg?v=1710435452050"

];


// Button to Show Deck
buttonShow.onclick = function() {
    if (cards.length !== 16) {
        // Log message
        console.log("Showing the deck...");
        // For of loop
        for (let card of cards) {
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image: url(" + url +
                card +
                ")' class='card'>");
        }
        buttonShow.style.color = "lightgreen";

    }

};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Doubling the deck...");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image: url(" + url +
                card +
                ")' class='card'>");
        }
    }
};
console.log("Now the deck has " + cards.length + " cards.");
buttonDouble.style.color = "silver";
// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    console.log("I'm shuffling the cards");
    let i = 0;
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' id='" + i + "' class='card'>");
        i = i + 1;
    }
    let counterText = document.querySelector("span");
    counterText = counter + 1;
    counterdiv.innerHTML = ("You have shuffled the deck " + counterText + " times ");

};
/* ---------------------------------------------------
DON'T CHANGE THE Fisher-Yates SHUFFLE FUNCTION BELOW!
--------------------------------------------------- */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style = "";
        i = i + 1;
    }

};




// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    //Get the id property of the cliked thing
    let clickedId = event.target.id;
    console.log(clickedId);
    //if a card was clicked, show it, and add it to an array.
    if (clickedId !== "") {
        //make the background images appear.
        document.getElementById(clickedId).style.backgroundImage =
            "url('" + url + cards[clickedId] + "')";
        clickedIds.push(clickedId);
        console.log(clickedIds);
        // if 1 card was clicked...
        if (clickedIds.length === 2) {
            //if 1 card was clicked...
            // check for a match
            let card1picture = document.getElementById(clickedIds[0]).style.backgroundImage;
            let card2picture = document.getElementById(clickedIds[1]).style.backgroundImage;
            console.log(card1picture);
            console.log(card2picture);
            if (card1picture === card2picture) {
                console.log("Match!");
                document.getElementById(clickedIds[0]).id = "";
                document.getElementById(clickedIds[1]).id = "";
                clickedIds = [];
                console.log(clickedIds);


            }
        } else if (clickedIds.length > 2) {
            document.getElementById(clickedIds[0]).style.backgroundImage = "";
            document.getElementById(clickedIds[1]).style.backgroundImage = "";
            clickedIds = [];
            clickedIds.push(clickedId);
            console.log(clickedIds);

        }

    }
});