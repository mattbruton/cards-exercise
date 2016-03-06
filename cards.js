//Create an HTML page that contains a text area and a button labeled Create. --DONE

var cardHolder = document.getElementById('cardHolder');
var cardBtn = document.getElementById('cardButton');
var inputGrabber = document.getElementById('wordsForCards');
var wordValue;

//When the user enters in text into the text area and then clicks the create button,
// create a new card element in the DOM. You decide the height/width of the card.

inputGrabber.addEventListener("keyup", function() {
  wordValue = inputGrabber.value;
});

cardBtn.addEventListener("click", function() {
  cardHolder.innerHTML += "<div class= " + '"card"' + '"' + ">" +"<p>" +
   wordValue + "</p>" + "<button id=" +'"' + "remover" + '"' + ">" + "delete" + "</button>" + "</div>"; 
   inputGrabber.value = "";
});

//When the user clicks the Delete button, the containing card, and no other cards,
// should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

cardHolder.addEventListener("click", function(event) {
  if (event.target.id === "remover") {
    card = event.target.parentNode;
    cardHolder.removeChild(card);
  };
});
