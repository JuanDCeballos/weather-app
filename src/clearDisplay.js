import { headerContent } from '.';
import { additionalContent } from '.';

const clearDisplay = () => {
  headerContent.innerHTML = '';
  additionalContent.innerHTML = '';
};

export { clearDisplay };
