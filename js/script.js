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
      }
      ];


/***
 * `getRandomQuote` function
***/

function getRandomQuote(arr) {
  let ranInd = Math.floor(Math.random() * arr.length);
  return quotes[ranInd];
}

let message = getRandomQuote(quotes)

console.log(message);


/***
 * `printQuote` function
***/


function printQuote() {
  document.querySelector('p').innerHTML = `<div class="container">
  <div id="quote-box" class="quote-box">
    <p class="quote">${message.quote}</p>
    <p class="source">${message.source}<span class="citation">${message.citation}</span><span class="year">${message.year}</span></p>
  </div>
</div>`;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
