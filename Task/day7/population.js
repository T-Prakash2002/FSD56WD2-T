//2.Get all the countries with a population of less than 2 lakhs using Filter function

let XMLHttpRequest =require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload=function(){

    let countries =  JSON.parse(xhr.responseText);

    function a(country){

        if(country.population <= 200000){
            return true;
        }
    }

    function population(country){
        i++;
        console.log(i,".",country.name['common'],":",country.population);
    }
    let i=0;
    const CountriesPopulation = countries.filter(a);
    CountriesPopulation.map(population);

}
/**
 * 
 * Output
 * 
1 . Andorra : 77265
2 . French Southern and Antarctic Lands : 400
3 . Saint Vincent and the Grenadines : 110947
4 . Bermuda : 63903
5 . Dominica : 71991
6 . United States Virgin Islands : 106290
7 . Grenada : 112519
8 . Saint Barthélemy : 4255
9 . Isle of Man : 85032
10 . Curaçao : 155014
11 . Saint Kitts and Nevis : 53192
12 . United States Minor Outlying Islands : 300
13 . Marshall Islands : 59194
14 . Anguilla : 13452
15 . Cook Islands : 18100
16 . Norfolk Island : 2302
17 . Tuvalu : 11792
18 . South Georgia : 30
19 . Niue : 1470
20 . Tonga : 105697
21 . Saint Helena, Ascension and Tristan da Cunha : 53192
22 . Gibraltar : 33691
23 . Northern Mariana Islands : 57557
24 . British Indian Ocean Territory : 3000
25 . Kiribati : 119446
26 . Liechtenstein : 38137
27 . Antarctica : 1000
28 . Montserrat : 4922
29 . Åland Islands : 29458
30 . Guam : 168783
31 . Vatican City : 451
32 . Palau : 18092
33 . Saint Martin : 38659
34 . Antigua and Barbuda : 97928
35 . Sint Maarten : 40812
36 . Monaco : 39244
37 . Guernsey : 62999
38 . Saint Lucia : 183629
39 . Caribbean Netherlands : 25987
40 . Pitcairn Islands : 56
41 . San Marino : 33938
42 . Svalbard and Jan Mayen : 2562
43 . Wallis and Futuna : 11750
44 . Bouvet Island : 0
45 . Tokelau : 1411
46 . Cocos (Keeling) Islands : 544
47 . Greenland : 56367
48 . Cayman Islands : 65720
49 . Christmas Island : 2072
50 . Saint Pierre and Miquelon : 6069
51 . Micronesia : 115021
52 . Nauru : 10834
53 . Faroe Islands : 48865
54 . Aruba : 106766
55 . Samoa : 198410
56 . Heard Island and McDonald Islands : 0
57 . Falkland Islands : 2563
58 . Jersey : 100800
59 . British Virgin Islands : 30237
60 . Turks and Caicos Islands : 38718
61 . American Samoa : 55197
62 . Seychelles : 98462
 */
