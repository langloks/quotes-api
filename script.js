const quoteTag = document.querySelector("h1");
const authorTag =  document.querySelector("p");
const randomTag = document.querySelector("footer img");
const bodyTag = document.querySelector("body");
// let data = []

// //lets load in the real data
// fetch("quotes.json")
//     .then(response => response.json()
// )
//     .then(jsonData => {
//         data = jsonData
//         getQuote()
// })

const getQuote = function(){
//     if (data.length > 0) {
// //get a random quote and put it in the site
// const randomNumber = Math.floor(Math.random()* data.length);
// const randomQuote = data[randomNumber];
// // or randomQuote["quote"]
// quoteTag.innerHTML = randomQuote.quote;
// //or randomQuote["author"]
// authorTag.innerHTML = randomQuote.author;
//     }

fetch("https://api.superhi.com/api/test/quotes/random")
    .then(response => response.json())
    .then(jsonData => {
        quoteTag.innerHTML = "&ldquo;" + jsonData.quote + "&rdquo;"
        authorTag.innerHTML = "&mdash;"+ jsonData.author

        if (jsonData.quote.length > 100) {
            quoteTag.classList.add("long");
        }
        else {
            quoteTag.classList.remove("long");
        }

bodyTag.style.backgroundColor = `hsl(${Math.random()* 360}, 100%, 90%)`
    })
}

getQuote();

//run getQuote onclick of random image
randomTag.addEventListener("click", () => {
    getQuote();
});

