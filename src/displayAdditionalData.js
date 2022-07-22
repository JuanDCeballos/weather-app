import { createElement } from './helperFunction';
import { weather } from './api';
import { additionalContent } from '.';

const displayAdditionalData = async (city) => {
  const result = await weather(city);

  const div = createElement('div', {
    class: ['additional-content-info'],
  });

  const tempMinContainer = createElement('div', {
    class: ['temp-min-container', 'info-card'],
  });

  const tempMin = createElement('h3', {
    textContent: `${Math.round(result.temp_min)}°`,
  });

  const tempMinIcon = createElement('span', {
    class: ['fa-solid', 'fa-temperature-quarter'],
  });

  const tempMinInfo = createElement('p', {
    textContent: 'Min',
  });

  tempMinContainer.appendChild(tempMin);
  tempMinContainer.appendChild(tempMinIcon);
  tempMinContainer.appendChild(tempMinInfo);

  const feelsLikeContainer = createElement('div', {
    class: ['feels-like-container', 'info-card'],
  });

  const feelsLike = createElement('h3', {
    textContent: `${Math.round(result.feels_like)}°`,
  });

  const feelsLikeIcon = createElement('span', {
    class: ['fa-solid', 'fa-temperature-half'],
  });

  const feelsLikeInfo = createElement('p', {
    textContent: 'Feels like',
  });

  feelsLikeContainer.appendChild(feelsLike);
  feelsLikeContainer.appendChild(feelsLikeIcon);
  feelsLikeContainer.appendChild(feelsLikeInfo);

  const tempMaxContainer = createElement('div', {
    class: ['temp-max-container', 'info-card'],
  });

  const tempMax = createElement('h3', {
    textContent: `${Math.round(result.temp_max)}°`,
  });

  const tempMaxIcon = createElement('span', {
    class: ['fa-solid', 'fa-temperature-full'],
  });

  const tempMaxInfo = createElement('p', {
    textContent: 'Max',
  });

  tempMaxContainer.appendChild(tempMax);
  tempMaxContainer.appendChild(tempMaxIcon);
  tempMaxContainer.appendChild(tempMaxInfo);

  div.appendChild(tempMinContainer);
  div.appendChild(feelsLikeContainer);
  div.appendChild(tempMaxContainer);

  if (additionalContent) {
    additionalContent.appendChild(div);
  }
};

export { displayAdditionalData };
