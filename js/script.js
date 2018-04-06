

//Array that is storing all of the objects with quotes and sources
var quotes = [
	{
		quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
		source: "Steve Jobs",
		citation: "Steve Jobs' Stanford commencement speech",
		date: 2005
	},
	{
		quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
		source: "Amelia Earhart"
	},
	{
		quote: "Don't count the days, make the days count.",
		source: "Muhammad Ali"
	},
	{
		quote: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
		source: "Jamie Paolinetti"
	},
	{
		quote: "A person who never made a mistake never tried anything new.",
		source: "Albert Einstein"
	},
	{
		quote: "It is our choices...that show what we truly are, far more than our abilities.",
		source: "J. K. Rowling",
		citation: "Harry Potter and The Chamber of Secrets",
		date: 1999
	},
	{
		quote: "All that is gold does not glitter; not all those that wander are lost.",
		source: "J. R. R. Tolkien",
		citation: "The Fellowship of the Ring",
		date: 1954
	},
	{
		quote: "Let me not then die ingloriously and without a struggle, but let me first do some great thing that shall be told among men hereafter.",
		source: "Homer",
		citation: "The Iliad"
	},
	{
		quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
		source: "Michael Scott",
		citation: "The Office"
	},
	{
		quote: "Next time someone complains that you have made a mistake, tell him that may be a good thing. Because without imperfection, neither you nor I would exist.",
		source: "Stephen Hawking",
		citation: "Into the Universe",
		date: 2010
	}
]



//selects a random quote object from the quotes array
// returns the randomly selected quote object
function getRandomQuote() {
	var randomNum = Math.floor(Math.random() * quotes.length);
	return quotes[randomNum];
};

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// printQuote calls the getRandomQuote function and stores the returned quote object in a variable
// html variable builds an html string that is inserted in to the #quote-box div
function printQuote() {
	var randQuote = getRandomQuote();
	var html = "";
	html += '<p class="quote">' + randQuote.quote + '</p>';
	html += '<p class="source">' + randQuote.source ;
	if (randQuote.hasOwnProperty('citation')) {
		html += '<span class="citation">' + randQuote.citation + '</span>';
	}
	if (randQuote.hasOwnProperty('date') ) {
		html += '<span class="year">' + randQuote.date + '</span>';
	} else {
		html += '</p>';
	};
	document.getElementById('quote-box').innerHTML	= html;
};

//function that generates and returns random rgb colors
function getRandomColor() {
	function randomColor() {
		return Math.floor(Math.random() * 256);
	}
	return "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")";
}
//click event that calls the randomColor function and changes the body background color
document.getElementById('loadQuote').addEventListener("click", () => {
		document.body.style.backgroundColor = getRandomColor();
});

//Both the quote and the background color will refresh after 30 second intervals
window.setInterval('document.body.style.backgroundColor = getRandomColor()', 30000);
window.setInterval(printQuote, 30000);
