/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/

let quotes = [
      {
        quote: 'With great power comes great responsibility',
        source: 'Aunt May',
        citation: 'Spider Man',
        year: 2000
      },
      {
        quote: 'Say goodnight to the bad guy!',
        source: 'Tony Montana',
        citation: 'Scarface',
        year: 1983
      },
      {
        quote: 'Don\'t think, just do.',
        source: 'Pete "Maverick" Mitchell',
        citation: 'Top Gun',
        year: 1985
      },
      {
        quote: 'If you spend too much time thinking about a thing, you\'ll never get it done',
        source: 'Bruce Lee',
        citation: '',
        year: 1983
      },
      {
        quote: '“My mama always said life was like a box of chocolates.',
        source: 'Forrest Gump',
        citation: 'Forrest Gump',
        year: 1994
      }
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote(arr) {
  let ranInd = Math.floor(Math.random() * arr.length);
  return arr[ranInd];
}


/***
 * `printQuote` function
***/

/***
function printQuote(getRandomQuote(quotes)) {

}
***/


/*
document.querySelector('container').innerHTML = `<div id="quote-box" class="quote-box">
<p class="quote">${quotes.quote}</p>
<p class="source">${quotes.source}<span class="citation">${quotes.citation}</span><span class="year">${quotes.year}</span></p>
</div>`;
*/


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
