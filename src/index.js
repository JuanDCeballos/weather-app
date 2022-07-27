import { displayHeaderData } from './displayHeaderData';
import { clearDisplay } from './clearDisplay';
import { displayAdditionalData } from './displayAdditionalData';

const input = document.querySelector('#city');
const cta = document.querySelector('#cta');

export const headerContent = document.querySelector('#main-content');
export const additionalContent = document.querySelector('#info-content');

cta.addEventListener('click', () => {
  clearDisplay();
  displayHeaderData(input.value);
  displayAdditionalData(input.value);
});

// input.addEventListener('click', (e) => {
//   if (e.keyCode == 13) {
//     console.log('funciona el enter');
//   }
//   // console.log('eee');
// });

// if (input.activeElement) {
//   console.log('a');
// } else {
//   console.log('b');
// }

// const keyPressed = () => {
//   if (e.keyCode == 13) {

//   }
// }

// const keyPressed = (el) => {
//   console.log(el.activeElement);
// };

// keyPressed(input);
// console.log(input === document.activeElement);
