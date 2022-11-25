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
  let ranQuoIndx = Math.floor(Math.random() * arr.length);
  let items = '';
  for ( let i=0; i<4; i++) {
    <h2>${arr[i].name}</h2>
<h3>${arr[i].type} | ${arr[i].breed}</h3>
<p>Age: ${arr[i].age}</p>
<img src="${arr[i].photo}" alt="${arr[i].breed}">`
    quotes[ranQuoIndx]

    }
    
}


function createListItems (arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<h2>${arr[i].name}</h2>
<h3>${arr[i].type} | ${arr[i].breed}</h3>
<p>Age: ${arr[i].age}</p>
<img src="${arr[i].photo}" alt="${arr[i].breed}">`;
  };
  return items;
};




/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
