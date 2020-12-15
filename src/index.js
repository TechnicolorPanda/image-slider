import { loadImageSlider } from './modules/slider';

(function initiatePage() {
  // set content
  const contentSection = document.querySelector('#content');
  loadImageSlider(contentSection);
}());
