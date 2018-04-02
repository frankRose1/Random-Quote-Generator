

//Array that is storing all of the quotes and sources
var quotes = [
	{
		quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
		source: "Steve Jobs",
		citation:"Steve Jobs' Stanford commencement speech",
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
	var randomNum = Math.floor(Math.random() * 5);
	for (var i = 0; i < quotes.length; i++ ) {
		if (quotes[i] == quotes[randomNum]) {
			return quotes[i];
		}
	}
};

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//printQuote calls the getRandomQuote function and stores the returned quote object in a variable
//innerHTML changes the selected elements and replaces the content with the randomly generated quote
function printQuote() {
	var randQuote = getRandomQuote();
	document.querySelector('.quote').innerHTML = randQuote.quote;
	document.querySelector('.source').innerHTML = randQuote.source;
};
	