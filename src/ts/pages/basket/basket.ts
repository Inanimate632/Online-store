import { createItems } from './createItems';
window.addEventListener('load', create);
window.addEventListener('hashchange', create);
const arrayProduct: number[] = [0, 2, 12, 5, 10, 4, 6, 1]; // масив с local storage

function create() {
  const basket = document.querySelector('.basket');
  const hash = window.location.hash;
  if (basket !== null && hash === '#basket') {
    arrayProduct.forEach((item, index) => {
      createItems(item, index);
    });
  }
}
