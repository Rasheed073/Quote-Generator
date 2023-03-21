const btnEl = document.getElementById("btn")

const authorEl = document.getElementById("author")

const quoteEl = document.getElementById("quote")

const apiURL = "https://api.quotable.io/random"

async function getQuote() {

    try {

        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        quoteEl.innerText = "Updating.."
        authorEl.innerText = "Updating"
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~ " + quoteAuthor;
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
        
    } catch (error) {
        
        console.log(error);

        quoteEl.innerHTML = "An error happened, try again later"  

        authorEl.innerHTML = "An error happened"  
         
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
        
    }
   
}
getQuote()

btnEl.addEventListener("click",getQuote())