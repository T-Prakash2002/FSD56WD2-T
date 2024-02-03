let XMLHttpRequest =require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload=function(){

    let country =  JSON.parse(xhr.responseText);
    //console.log(country[0].name['common']);
   // console.log(country[0].region);
   // console.log(country[0].subregion);
   // console.log(country[0].population);



    for (let i in country){
        console.log(country[i].name['common']," |",
        country[i].region," |",country[i].subregion," |",country[i].population);
        
    }
   

}