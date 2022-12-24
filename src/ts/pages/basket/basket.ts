import { createItems } from './createItems';
import { addRoutes } from './createRoute';
window.addEventListener('load', create);
window.addEventListener('hashchange', create);

function create() {
  const arrayProduct: number[] = JSON.parse(localStorage.getItem('basket') || '[]');
  const basket = document.querySelector('.basket');
  const hash = window.location.hash;
  if (basket !== null && hash === '#basket') {
    arrayProduct.forEach((item, index) => {
      createItems(item, index);
    });
    addRoutes();
  }
}
