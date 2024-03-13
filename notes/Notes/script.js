const url=`https://api.adviceslip.com/advice`

const display=document.querySelector('.display');


// Fetch The Data in URL 
function fetchurl(){

    return fetch(url)
        .then(response=>response.json())
        .catch(()=>{
            console.log("Fetch Advice data Error");
        })
        
}

//To Display the Advice..

function setquery(quotes){

    let word=`
    <h3>
    <p class=" rounded-2 p-3 text-center">
    
        ${quotes.slip.advice}
    </p>
    </h3>
    `;

    alert(quotes.slip.advice);
    display.innerHTML=word;
}

// To get Action when button clicked event..

function generateQuotes(){

    fetchurl().then((quotes)=>{
        setquery(quotes);
    })
    

}

