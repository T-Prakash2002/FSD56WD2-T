
let XMLHttpRequest =require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload=function(){

    let country =  JSON.parse(xhr.responseText);

    
    for (let i in country){
        console.log(country[i].flags);
    }
   

}