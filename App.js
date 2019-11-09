/* MEMORY MATCH: Created By Jonathan Norris

The game uses eight cards. To win the player must match all eight cards with their 
corresponding value. For example: when the player clicks on a Jack card, they must 
then click on another Jack card on their next turn for the cards to match and remain flipped. */



//Gets 8 card images and stores in variables;
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");
var card8 = document.getElementById("card8");

var attempts = 0;

//Gets attempts ID and fills html with number of attempts;
var numAttempts = document.getElementById("attempts");

//URLs for cards that appear when clicked;
var src1 = "https://previews.123rf.com/images/mannaggia/mannaggia1409/mannaggia140900007/32651169-jack-of-hearts-playing-card.jpg";
var src2 = "https://previews.123rf.com/images/mannaggia/mannaggia1409/mannaggia140900007/32651169-jack-of-hearts-playing-card.jpg";
var src3 = "https://previews.123rf.com/images/henningmarquardt/henningmarquardt1703/henningmarquardt170300249/74712944-large-index-playing-card-queen-of-hearts.jpg";
var src4 = "https://previews.123rf.com/images/henningmarquardt/henningmarquardt1703/henningmarquardt170300249/74712944-large-index-playing-card-queen-of-hearts.jpg";
var src5 = "https://previews.123rf.com/images/rbwinston/rbwinston1203/rbwinston120300001/12586605-king-of-spades-individual-playing-card-an-isolated-vector-illustration-of-a-classic-face-card.jpg";
var src6 = "https://previews.123rf.com/images/rbwinston/rbwinston1203/rbwinston120300001/12586605-king-of-spades-individual-playing-card-an-isolated-vector-illustration-of-a-classic-face-card.jpg";
var src7 = "https://qph.fs.quoracdn.net/main-qimg-f65b1844a0b5682c64f364785ad506b0";
var src8 = "https://qph.fs.quoracdn.net/main-qimg-f65b1844a0b5682c64f364785ad506b0";


//Image of back of card;
var backOfCard = "https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_1024x1024.png?v=1535755695"

//Array of URLs used to randomly choose an image in Memory Match;
var arr = [src1,src2,src3,src4,src5,src6,src7,src8];

randArray = [0,1,2,3,4,5,6,7];

var attempts = 1;

//Shuffles numbers: Not my code taken from stackoverflow post;
function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

shuffle(randArray);

/*Holds random Url so it doesn't always change when clicked; holds value for memory match;
var randArray = [];
while (randArray.length < 8) {
    randArray.push(Math.floor(Math.random() * 8));
    new Set(randArray);
};
console.log(randArray);*/



url1 = randArray[0];
url2 = randArray[1];
url3 = randArray[2];
url4 = randArray[3];
url5 = randArray[4];
url6 = randArray[5];
url7 = randArray[6];
url8 = randArray[7];


//Count is used tell if 1 or 2 cards have been clicked. matchsrc holds the value of the clicked cards to compare.
 var count = 0;
 var matchSrc;
 


//Back of card changes to Jack,Queen,King or Joker when clicked;
card1.addEventListener('click', () => {
    card1.src= arr[url1];
    count++;
    if (count === 1) {
        matchSrc = card1.src;
    } else if (count === 2) {
        if (card1.src !== matchSrc) {
            count = 0;
            reset();
            numAttempts.innerHTML = 'Attempts: ' + attempts;
        }
        count = 0;
    }
    numAttempts.innerHTML = 'Attempts: ' + attempts;
})

card2.addEventListener('click', () => {
    card2.src= arr[url2];
    count++;
    if (count === 1) {
        matchSrc = card2.src;
    } else if (count === 2) {
        if (card2.src !== matchSrc) {
            count = 0;
            reset();
            numAttempts.innerHTML = 'Attempts: ' + attempts;
        }
        count = 0;
    }
    numAttempts.innerHTML = 'Attempts: ' + attempts;
})

card3.addEventListener('click', () => {
    card3.src= arr[url3];
    count++;
    if (count === 1) {
        matchSrc = card3.src;
    } else if (count === 2) {
        if (card3.src !== matchSrc) {
            count = 0;
            reset();
            numAttempts.innerHTML = 'Attempts: ' + attempts;
        }
        count = 0;
    }
    numAttempts.innerHTML = 'Attempts: ' + attempts;
})

card4.addEventListener('click', () => {
    card4.src= arr[url4];
    count++;
    if (count === 1) {
        matchSrc = card4.src;
    } else if (count === 2) {
        if (card4.src !== matchSrc) {
            count = 0;
            reset();
            numAttempts.innerHTML = 'Attempts: ' + attempts;
        }
        count = 0;
    }
    numAttempts.innerHTML = 'Attempts: ' + attempts;
})

card5.addEventListener('click', () => {
    card5.src= arr[url5];
    count++;
    if (count === 1) {
        matchSrc = card5.src;
    } else if (count === 2) {
        if (card5.src !== matchSrc) {
            count = 0;
            reset();
            numAttempts.innerHTML = 'Attempts: ' + attempts;
        }
        count = 0;
    }
    numAttempts.innerHTML = 'Attempts: ' + attempts;
})

card6.addEventListener('click', () => {
    card6.src= arr[url6];
    count++;
    if (count === 1) {
        matchSrc = card6.src;
    } else if (count === 2) {
        if (card6.src !== matchSrc) {
            count = 0;
            reset();
            numAttempts.innerHTML = 'Attempts: ' + attempts;
        }
        count = 0;
    }
    numAttempts.innerHTML = 'Attempts: ' + attempts;
})

card7.addEventListener('click', () => {
    card7.src= arr[url7];
    count++;
    if (count === 1) {
        matchSrc = card7.src;
    } else if (count === 2) {
        if (card7.src !== matchSrc) {
            count = 0;
            reset();
            numAttempts.innerHTML = 'Attempts: ' + attempts;
        }
        count = 0;
    }
    numAttempts.innerHTML = 'Attempts: ' + attempts;
})

card8.addEventListener('click', () => {
    card8.src= arr[url8];
    count++;
    if (count === 1) {
        matchSrc = card8.src;
    } else if (count === 2) {
        if (card8.src !== matchSrc) {
            count = 0;
            reset();
            numAttempts.innerHTML = 'Attempts: ' + attempts;
        }
        count = 0;
    }
    numAttempts.innerHTML = 'Attempts: ' + attempts;
})



//reset() changes all card urls back to image back of card;
function reset() {
    card1.src= backOfCard;
    card2.src= backOfCard;
    card3.src= backOfCard;
    card4.src= backOfCard;
    card5.src= backOfCard;
    card5.src= backOfCard;
    card6.src= backOfCard;
    card7.src= backOfCard;
    card8.src= backOfCard;
    attempts++;
}
