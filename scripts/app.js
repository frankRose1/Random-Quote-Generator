/**
 * Random Quote Generator
 *  Pull a random quote from the quotes array(scripts/quotes.js) and insert it in to the DOM
 * 	Refresh the quote and page's background color after 30 seconds of inactivity
 */

let intervalId;

const getRandomQuote = () => {
	const randomNum = Math.floor(Math.random() * quotes.length);
	return quotes[randomNum];
};


const configQuoteHtml = () => {
	const randomQuote = getRandomQuote();
	let html = `<p class="quote">${randomQuote.quote}</p>
				<p class="source">${randomQuote.source}`;
				
	if (randomQuote.hasOwnProperty('citation')) {
		html += `<span class="citation">${randomQuote.citation}</span>`;
	}
	if (randomQuote.hasOwnProperty('date') ) {
		html += `<span class="year">${randomQuote.date}</span>`;
	}
	
	html += `</p>`;
	return html;
};


const randomRGBValue = () => {
	return Math.floor(Math.random() * 256);
}


const getRandomColor = () => {
	return `rgb(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()})`;
}

const startInterval = () => {
	//clear the interval if the button is clicked
	clearInterval(intervalId);
	//Both the quote and the background color will refresh after 30 second intervals
	intervalId = setInterval(printRandomQuote, 30000);
};

const printRandomQuote = () => {
	startInterval();
	//get a random color and a random quote
	const randomColor = getRandomColor();
	document.body.style.backgroundColor = randomColor;
	document.querySelector('#loadQuote').style.backgroundColor = randomColor;
	document.getElementById('quote-box').innerHTML	= configQuoteHtml();
}

document.getElementById('loadQuote').addEventListener("click", printRandomQuote, false);

//init the app
printRandomQuote();
