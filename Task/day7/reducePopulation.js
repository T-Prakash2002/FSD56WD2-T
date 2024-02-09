//4.Print the total population of countries using reduce function


let XMLHttpRequest =require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload=function(){

    let countries =  JSON.parse(xhr.responseText);

    function population(acc,cv){
        return acc+cv.population
    }

    let populationcount=countries.reduce(population,0);


    console.log(populationcount);

}

//output:

//  7777721563

