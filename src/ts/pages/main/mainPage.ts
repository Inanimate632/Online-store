import { createItems } from './createItems';
import products from '../../../products.json';
import { addListener } from './toCart';
import { checkBtn } from './checkBtn';
window.addEventListener('load', create);
window.addEventListener('hashchange', create);

function create() {
  const hash = window.location.hash;
  if (hash === '') {
    products.products.forEach((item, index) => {
      createItems(index);
    });
    addListener();
    checkBtn();
  }
}
