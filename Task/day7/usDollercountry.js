//5.Print the country that uses US dollars as currency.


let XMLHttpRequest =require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload=function(){

    let countries =  JSON.parse(xhr.responseText);

    const countryUSD = countries.filter(country =>
        country.currencies && country.currencies.USD
      );

    const c=countryUSD.map(country => country.name['common']);

    console.log(c);
    
}

/**
 * Output
 
[
  'United States Virgin Islands',
  'United States Minor Outlying Islands',
  'Marshall Islands',
  'Cambodia',
  'Bahamas',
  'United States',
  'Northern Mariana Islands',
  'British Indian Ocean Territory',
  'Timor-Leste',
  'Ecuador',
  'Guam',
  'Palau',
  'Caribbean Netherlands',
  'Micronesia',
  'El Salvador',
  'British Virgin Islands',
  'Panama',
  'Turks and Caicos Islands',
  'American Samoa',
  'Puerto Rico'
]

 */