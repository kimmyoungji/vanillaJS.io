const quotes = [
    {
        quote: "the way to get started is to quit talking and begin",
        author: "/ walt Disney1",
    },
    {
        quote: "the way to get started is to quit talking and begin",
        author: "/ walt Disney2",
    },
    {
        quote: "the way to get started is to quit talking and begin",
        author: "/ walt Disney3",
    },
    {
        quote: "the way to get started is to quit talking and begin",
        author: "/ walt Disney4",
    },
    {
        quote: "the way to get started is to quit talking and begin",
        author: "/ walt Disney5",
    },
    {
        quote: "the way to get started is to quit talking and begin",
        author: "/ walt Disney6",
    },

]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

//console.log(quotes[10-1])
const randomNum = Math.floor( Math.random()*quotes.length );
quote.innerText = quotes[randomNum].quote;
author.innerText = quotes[randomNum].author;
