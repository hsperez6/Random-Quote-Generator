/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


/***
 * `quotes` array
 * array of objects
 * each object containing properties including: quote, source, citation, year, and tag
***/
let quotes = [
  {
    quote: 'With great power comes great responsibility',
    source: 'Aunt May',
    citation: 'Spider Man',
    year: 2000,
    tag: '-Movies'
  },
  {
    quote: 'Say goodnight to the bad guy!',
    source: 'Tony Montana',
    citation: 'Scarface',
    year: 1983,
    tag: '-Movies'
  },
  {
    quote: 'Don\'t think, just do.',
    source: 'Pete "Maverick" Mitchell',
    citation: 'Top Gun',
    year: 1985,
    tag: '-Movies'
  },
  {
    quote: 'If you spend too much time thinking about a thing, you\'ll never get it done',
    source: 'Bruce Lee',
    year: 1983,
    tag: '-Wisdom'

  },
  {
    quote: 'My mama always said life was like a box of chocolates.',
    source: 'Forrest Gump',
    citation: 'Forrest Gump',
    year: 1994,
    tag: '-Movies'
  }, 
  {
    quote: 'He that would live in peace & ease, must not speak all he knows or judge all he sees.',
    source: 'Benjamin Franklin',
    citation: 'Poor Richard\'s Almanac',
    year: 1736,
    tag: '-Wisdom'
  },
  {
    quote: 'No man has a good enough memory to be a successful liar.',
    source: 'Abraham Lincoln',
    tag: '-Wisdom'
  }, 
  {
    quote: 'Stay hungry, stay foolish.',
    source: 'Steve Jobs',
    citation: 'Stanford University commencement address',
    year: 2005,
    tag: '-Business'
  } 
];


/***
 * `getRandomQuote` function
 * function that accepts an argument 'arr'
 * generates a random index number 'ranInd' 
 * returns a random object from argument 'arr' using the random index number 'ranInd'
***/
function getRandomQuote(quotes) {
  let ranInd = Math.floor(Math.random() * quotes.length);
  return quotes[ranInd];
}


/***
 * `printQuote` function
 * inserts the quotes array as an argument into the getRandomQuote() function 
   and stores the object selected into a new variable ranQuote
 * ranQuote is used to generate a new string using string interpolation, with <p> tags
   including a class attribute, and stores the string into a new variable stringTemp, 
   closing </p> tag intentionally left out
 * a conditional statement is used to check if a citation property exists in the object stored 
   in ranQuote, if a citation property exists, an additional string (using string interpolation and
   nested between <span> tags with class attribute "citation") with the value in the citation property 
   is concatenated to the string stored in the stringTemp variable
 * a second conditional statement is used to check if a year property exists in the object stored 
   in ranQuote, if a year property exists, an additional string (using string interpolation and
   nested between <span> tags with class attribute "year") with the value in the year property 
   is concatenated to the string stored in the stringTemp variable
 * a third conditional statement is used to check if a tag property exists in the object stored 
   in ranQuote, if a tag property exists, an additional string (using string interpolation and
   nested between <span> tags) with the value in the tag property is concatenated to the string 
   stored in the stringTemp variable
 * the closing </p> tag is concatenated to the end of the string stored in the stringTemp variable
 * string in stringTemp is inserted into 'quote-box' element using .innerHTML     
***/
function printQuote() {
  let ranQuote = getRandomQuote(quotes);
  let stringTemp = `<p class="quote">${ranQuote.quote}</p> 
  <p class="source">${ranQuote.source}
  `;
  if('citation' in ranQuote) {
    stringTemp +=  `<span class="citation">${ranQuote.citation}</span>`;
  };
  if('year' in ranQuote) {
    stringTemp += `<span class="year">${ranQuote.year}</span> `;
  };
  if('tag' in ranQuote) {
    stringTemp += `<span>${ranQuote.tag}</span>`;
  };
  stringTemp += `</p>`;
  document.getElementById('quote-box').innerHTML = stringTemp;
}


/***
 * `changeBgColor` function
 * generates a random color using hex and saves that color in variable randomColor
 * applies the color stored in randomColor to the background  
 ***/
function changeBgColor() {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.background = randomColor;
}

/***
 * setInterval method is used to automatically refresh the quote printed on the page every 5 seconds
 * a second setInterval method is used to change the background color every 5 seconds
***/
setInterval(printQuote, 5000)
setInterval(changeBgColor, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
