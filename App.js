//Gets 8 card images and stores in variables;
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");
var card8 = document.getElementById("card8");

//Urls for cards that appear when clicked;
var src1 = "https://previews.123rf.com/images/mannaggia/mannaggia1409/mannaggia140900007/32651169-jack-of-hearts-playing-card.jpg";
var src2 = "https://previews.123rf.com/images/mannaggia/mannaggia1409/mannaggia140900007/32651169-jack-of-hearts-playing-card.jpg";
var src3 = "https://previews.123rf.com/images/henningmarquardt/henningmarquardt1703/henningmarquardt170300249/74712944-large-index-playing-card-queen-of-hearts.jpg";

var arr = [card1,card2,card3,card4,card5,card6,card7,card8];

var rand = Math.floor(Math.random() * 8);

card1.addEventListener('click', () => {
    card1.src="https://previews.123rf.com/images/mannaggia/mannaggia1409/mannaggia140900007/32651169-jack-of-hearts-playing-card.jpg";
})

card2.addEventListener('click', () => {
    card2.src= src3;
})



/*function reset () {
    card1.src=
}*/
