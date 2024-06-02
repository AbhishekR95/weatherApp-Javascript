//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// a51784fb806e2531a86a358a5ec67328

const cityName = document.querySelector(".cityname");
const weatherdate = document.querySelector(".weatherdate");
const weatherinfo = document.querySelector(".weatherinfo");
const weatherIcon = document.querySelector(".weatherIcon");
const temperature = document.querySelector(".temperature");
const SearchCity = document.querySelector(".search");

// Search City
SearchCity.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityInput = document.querySelector(".cityInput");
  city = cityInput.value;
  getWeather();

  cityInput.value = "";
});

// Minmax
const min = document.querySelector(".min");
const max = document.querySelector(".max");

// WeatherCard
const feels = document.querySelector(".feels");
const humid = document.querySelector(".humid");
const windSpeed = document.querySelector(".wind");
const pressure = document.querySelector(".pressure");

let city = "mumbai";

// Search City

const getWeather = async () => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a51784fb806e2531a86a358a5ec67328`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);

    //   Destructure data
    const { name, sys, main, weather, wind } = data;

    cityName.innerHTML = `<h1>${name}, ${sys.country}</h1>`;

    // WeatherInfo
    weatherinfo.innerHTML = `${weather[0].main}`;
    weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png">`;
    temperature.innerHTML = `${main.temp.toFixed()} &#176C`;

    // Min max
    min.innerHTML = `Min ${main.temp_min} &#176C `;
    max.innerHTML = `Max ${main.temp_max} &#176C `;

    // weatherCard
    feels.innerHTML = `${main.feels_like.toFixed()} &#176C `;
    humid.innerHTML = `${main.humidity.toFixed()}%`;
    windSpeed.innerHTML = `${wind.speed} m/s`;
    pressure.innerHTML = `${main.pressure} hpa`;
  } catch (error) {
    console.log(error);
  }
};

getWeather();
