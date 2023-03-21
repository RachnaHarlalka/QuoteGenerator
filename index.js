const btn = document.querySelector('.btn')
const quotePara = document.querySelector('#quote')
const author = document.querySelector('#author')
let quoteData=[];

const fetchApi=async function(){
   const response= await fetch("https://type.fit/api/quotes");
   const data = await response.json();
   quoteData=data.filter((q)=>{
        return q.author!=null
   });
}
fetchApi();

btn.addEventListener("click",(e)=>{
    console.log(quoteData)

    const random = Math.floor(Math.random()*quoteData.length)
    console.log(quoteData[random].text);
    quotePara.innerText=quoteData[random].text;
    author.innerText=quoteData[random].author

    
})