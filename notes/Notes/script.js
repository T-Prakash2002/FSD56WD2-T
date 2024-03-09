const url=`https://api.adviceslip.com/advice`

const display=document.getElementById('display');

function setquery(query){

    let a=`
    <h3>
    <p class=" rounded-2 p-3 text-center">
    
        ${query.slip.advice}
    </p>
    </h3>
    `
    display.innerHTML=a;
}


async function a(){
    let response=await fetch(url,{method:'GET'});
    let queries=await response.json();
    
    setquery(queries);

}


//console.log('');