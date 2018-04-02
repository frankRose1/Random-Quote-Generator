

//Array that is storing all of the quotes and sources
var quotes = [
	{
		quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
		source: "Steve Jobs",
		citation: "Steve Jobs' Stanford commencement speech",
		year: 2005		
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
	}
]


//selects a random quote object from the quotes array
// returns the randomly selected quote object
function getRandomQuote() {
	var randomNum = Math.floor(Math.random() * quotes.length);
	for (var i = 0; i < quotes.length; i++ ) {
		if (quotes[i] == quotes[randomNum]) {
			return quotes[i];
		}
	}
};

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// printQuote calls the getRandomQuote function and stores the returned quote object in a variable
// html variable builds an html string that is inserted in to the 	#quote-box div
function printQuote() {
	var randQuote = getRandomQuote();
	var html = "";
	html += '<p class="quote">' + randQuote.quote + '</p>';
	html += '<p class="source">' + randQuote.source ;
	if (randQuote.hasOwnProperty('citation')) {
		html += '<span class="citation">' + randQuote.citation + '</span>';
	}
	if (randQuote.hasOwnProperty('year') ) {
		html += '<span class="year">' + randQuote.year + '</span>';
	} else {
		html += '</p>';
	};
	document.getElementById('quote-box').innerHTML	= html;
};

