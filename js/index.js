
"use strict";

window.onload = init;
function init() {
generateQuote()

}


function generateQuote() {
  let quoteSize = QUOTEBANK.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteData = QUOTEBANK[randomIndex];

  let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=";

 
  let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
      twitterLink += quoteInApiFormat;
    
      let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
      twitterLink += " - " + authorInApiFormat;

    

  

  

 
  document.getElementById("tweet-quote").href = twitterLink;
  document.getElementById("text").innerText = randomQuoteData.quote;
  document.getElementById("author").innerText = randomQuoteData.author;
}
