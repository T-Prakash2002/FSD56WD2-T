//1.Get all the countries from Asia continent /region using Filter function


let XMLHttpRequest =require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload=function(){

    let countries =  JSON.parse(xhr.responseText);

    function a(country){

        if(country.region === "Asia"){
            return true;
        }
    }

    function asiancon(country){
        i++;
        console.log(i,".",country.name['common']);
    }

    let i=0;
    const asianCountries = countries.filter(a);

    asianCountries.map(asiancon);

}

/**
 * Output
 * 
1 . Laos
2 . Kuwait
3 . Sri Lanka
4 . China
5 . Bangladesh
6 . Turkey
7 . Singapore
8 . Iraq
9 . Brunei
10 . North Korea
11 . Iran
12 . Tajikistan
13 . Myanmar
14 . Afghanistan
15 . Cambodia
16 . India
17 . Saudi Arabia
18 . Qatar
19 . Syria
20 . Timor-Leste
21 . South Korea
22 . Maldives
23 . Kyrgyzstan
24 . Yemen
25 . Israel
26 . Hong Kong
27 . Bhutan
28 . Nepal
29 . United Arab Emirates
30 . Azerbaijan
31 . Palestine
32 . Taiwan
33 . Jordan
34 . Indonesia
35 . Lebanon
36 . Malaysia
37 . Armenia
38 . Mongolia
39 . Japan
40 . Philippines
41 . Macau
42 . Kazakhstan
43 . Oman
44 . Turkmenistan
45 . Georgia
46 . Thailand
47 . Bahrain
48 . Vietnam
49 . Uzbekistan
50 . Pakistan
 */