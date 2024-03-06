
const APIKey='e0e0b8854e4bee10ed0324f89bb0e134';

function fetchWeather(city){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
        .then(response => response.json())
        .then(weather=>{

            console.log(Math.floor(weather.main.temp- 273.15));

        })

}



function getWeather(e){

    e.preventDefault();

    let city=e.target.elements.city.value;

    fetchWeather(city);
}

