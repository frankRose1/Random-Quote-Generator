//Array that is storing all of the objects with quotes and sources
const quotes = [
	{
		quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
		source: "Steve Jobs",
		citation: "Steve Jobs' Stanford commencement speech",
		date: 2005,
        tags : [
                "Motivation",
                "Business"
               ]
	},
	{
		quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
		source: "Amelia Earhart",
        tags : [
                "Inspiration",
                "Perserverance"
               ]
	},
	{
		quote: "Don't count the days, make the days count.",
		source: "Muhammad Ali",
         tags : [
                "Motivation",
                "Athletics",
                "Famous Athlete"
               ]
	},
	{
		quote: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
		source: "Jamie Paolinetti",
        tags : [
                "Inspiration",
                "Imagination"
               ]
	},
	{
		quote: "A person who never made a mistake never tried anything new.",
		source: "Albert Einstein",
        tags : [
                "Historical Figures",
                "Scientest",
                "Motivation"
               ]
	},
	{
		quote: "It is our choices...that show what we truly are, far more than our abilities.",
		source: "J. K. Rowling",
		citation: "Harry Potter and The Chamber of Secrets",
		date: 1999,
        tags : [
                "Literature",
                "Fiction"
               ]
	},
	{
		quote: "All that is gold does not glitter; not all those that wander are lost.",
		source: "J. R. R. Tolkien",
		citation: "The Fellowship of the Ring",
		date: 1954,
        tags : [
                "Literature",
                "Fiction"
               ]
	},
	{
		quote: "Let me not then die ingloriously and without a struggle, but let me first do some great thing that shall be told among men hereafter.",
		source: "Homer",
		citation: "The Iliad",
        tags : [
                "Literature",
                "Epic Poetry",
                "Ancient Greek Culture"
               ]
	},
	{
		quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
		source: "Michael Scott",
		citation: "The Office",
        tags : [
                "Comedy",
                "T.V."
               ]
	},
	{
		quote: "Next time someone complains that you have made a mistake, tell him that may be a good thing. Because without imperfection, neither you nor I would exist.",
		source: "Stephen Hawking",
		citation: "Into the Universe",
		date: 2010,
        tags : [
                "Historical Figures",
                "Scientest",
                "Inspiration"
               ]
	}
]

//pulls a random quote object from the quotes array
 const getRandomQuote = function() {
	const randomNum = Math.floor(Math.random() * quotes.length);
	return quotes[randomNum];
};

// printQuote calls the getRandomQuote function and stores the returned quote object in a variable
// html variable builds an html string that is inserted in to the #quote-box div
const printQuote = function() {
	const randQuote = getRandomQuote();
	let html = "";
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

const randomRGBValue = function() {
		return Math.floor(Math.random() * 256);
	}

//function that generates and returns random rgb colors
const getRandomColor = function() {
	return "rgb(" + randomRGBValue() + "," + randomRGBValue() + "," + randomRGBValue() + ")";
}

//Both the quote and the background color will refresh after 30 second intervals
window.setInterval('document.body.style.backgroundColor = getRandomColor()', 30000);
window.setInterval(printQuote, 30000);

// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//click event that calls the getRandomColor function and changes the body background color
document.getElementById('loadQuote').addEventListener("click", () => {
		document.body.style.backgroundColor = getRandomColor();
});