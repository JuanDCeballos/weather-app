import { weather } from './api';
import { createElement } from './helperFunction';
import { headerContent } from '.';
import { currentDate } from './currentDate';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

const displayHeaderData = async (city) => {
  const result = await weather(city);

  const div = createElement('div', {
    class: ['header-content-info'],
  });

  const location = createElement('p', {
    class: ['location'],
    textContent: `${result.name}, ${result.country}`,
  });

  const img = createElement('img', {
    src: `http://openweathermap.org/img/wn/${result.icon}.png`,
  });

  const temp = createElement('h1', {
    class: ['temp'],
    textContent: `${Math.round(result.temp)}°`,
  });

  const weatherDesc = createElement('p', {
    class: ['weather-description'],
    textContent: `${result.description}`,
  });

  const weatherDate = createElement('p', {
    textContent: currentDate(),
  });

  const weatherAdditionalInfo = createElement('div', {
    class: ['additional-info'],
  });

  const weatherWindContainer = createElement('div', {
    class: ['weather-wind-container'],
  });

  const windIcon = createElement('span', {
    class: ['fa-solid', 'fa-wind'],
  });

  const windText = createElement('p', {
    textContent: `${result.wind} km/h`,
  });

  const windTitle = createElement('p', {
    textContent: 'Wind',
  });

  weatherWindContainer.appendChild(windIcon);
  weatherWindContainer.appendChild(windText);
  weatherWindContainer.appendChild(windTitle);

  const weatherHumidityContainer = createElement('div', {
    class: ['weather-humidity-container'],
  });

  const humidityIcon = createElement('span', {
    class: ['fa-solid', 'fa-droplet'],
  });

  const humidityText = createElement('p', {
    textContent: `${result.humidity}%`,
  });

  const humidityTitle = createElement('p', {
    textContent: 'Humidity',
  });

  weatherHumidityContainer.appendChild(humidityIcon);
  weatherHumidityContainer.appendChild(humidityText);
  weatherHumidityContainer.appendChild(humidityTitle);

  weatherAdditionalInfo.appendChild(weatherWindContainer);
  weatherAdditionalInfo.appendChild(weatherHumidityContainer);

  div.appendChild(location);
  div.appendChild(img);
  div.appendChild(temp);
  div.appendChild(weatherDesc);
  div.appendChild(weatherDate);
  div.appendChild(weatherAdditionalInfo);

  if (headerContent) {
    headerContent.appendChild(div);
  }
};

export { displayHeaderData };
