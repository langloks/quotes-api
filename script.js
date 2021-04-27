const quoteTag = document.querySelector("h1");
const authorTag =  document.querySelector("p");
const randomTag = document.querySelector("footer img");

let data = []

//lets load in the real data
fetch("quotes.json")
    .then(response => response.json()
)
    .then(jsonData => {
        data = jsonData
        getQuote()
})

const getQuote = function(){
    if (data.lenght >0) {
//get a random quote and put it in the site
const randomNumber = Math.floor(Math.random()* data.length);
const randomQuote = data[randomNumber];
// or randomQuote["quote"]
quoteTag.innerHTML = randomQuote.quote;
//or randomQuote["author"]
authorTag.innerHTML = randomQuote.author;
    }
}

getQuote();

//run getQuote onclick of random image
randomTag.addEventListener("click", () => {
    getQuote();
});

