// 3.Print the following details name, capital, flag, using forEach function

let XMLHttpRequest =require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload=function(){

    let countries =  JSON.parse(xhr.responseText);
    let  i=1;
    
    countries.forEach(country => {

        console.log("S.no: ",i++);
        console.log("Country Name:",country.name['common']);
        console.log("Country Capital:",country.capital);
        console.log("Country Flag:",country.flag);
        console.log('-------------------------------')
  });

}

