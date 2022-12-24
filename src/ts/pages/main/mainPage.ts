import { createItems } from './createItems';
import products from '../../../products.json';
window.addEventListener('load', create);
window.addEventListener('hashchange', create);

function create() {
  products.products.forEach((item, index) => {
    createItems(index);
  });
}
