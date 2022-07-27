// import '../node_modules/sweetalert2';
import Swal from 'sweetalert2';

const API_KEY = 'c90dc97f4d736d5e5a5be1ef172ee464';
const URL = 'https://api.openweathermap.org/data/2.5/';

let elements = {};

const weather = async (location) => {
  try {
    const response = await fetch(
      `${URL}weather?q=${location}&APPID=${API_KEY}&units=metric`,
      // `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely&appid=${API_KEY}`,
      {
        mode: 'cors',
      }
    );
    const weatherData = await response.json();
    elements.temp = weatherData.main.temp;
    elements.temp_max = weatherData.main.temp_max;
    elements.temp_min = weatherData.main.temp_min;
    elements.name = weatherData.name;
    elements.country = weatherData.sys.country;
    elements.feels_like = weatherData.main.feels_like;
    elements.humidity = weatherData.main.humidity;
    elements.description = weatherData.weather[0].description;
    elements.icon = weatherData.weather[0].icon;
    elements.wind = weatherData.wind.speed;
    return elements;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `City ${location} was not found`,
    });
  }
};

export { weather };
