const apiurl = "https://api.quotable.io/random";
const btn = document.querySelector("button");
const blockquote = document.querySelector("blockquote");
const spn = document.querySelector("span");

async function getquote(url)
{
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    blockquote.innerHTML = data.content;
    spn.innerHTML = data.author;
}

btn.addEventListener("click",()=>
{
    getquote(apiurl);
})

function tweet()
{
    window.open("https://twitter.com/intent/tweet?text=" + blockquote.innerHTML + " --- by " +spn.innerHTML);
}