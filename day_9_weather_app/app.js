const input = document.querySelector('.input-search');

function changeWeatherUI(weather) {
    const city = document.querySelector('.city');
    const country = document.querySelector('.country');
    const time = document.querySelector('.time');
    const temperature = document.querySelector('.temperature .value');
    const short_desc = document.querySelector('.short-desc');

    const visibility = document.querySelector('.visibility div');
    const wind = document.querySelector('.wind div');
    const cloud = document.querySelector('.cloud div');

    city.innerHTML = weather.name;
    country.innerHTML = weather.sys.country;
    time.innerHTML = new Date().toLocaleString();
    temperature.innerHTML = Math.round(weather.main.temp);
    short_desc.innerHTML = weather.weather[0].description;
    visibility.innerHTML = weather.visibility + ' (m)';
    wind.innerHTML = weather.wind.speed + ' (m/s)';
    cloud.innerHTML = weather.clouds.all + ' (%)';

    temperature.innerHTML >= 26 ? (document.body.className = 'hot') : (document.body.className = 'cold');
}

input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        getWeather(e.target.value);
    }    
});

async function getWeather(input) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=90bf63c218a02d111dfd7e3f6db5222f`;
    const res = await fetch(url);
    const weather = await res.json();
    console.log(weather);

    changeWeatherUI(weather);
}

getWeather('Ha Noi');