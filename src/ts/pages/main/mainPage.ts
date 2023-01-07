import { createItems } from './createItems';
import products from '../../../products.json';
import { addListener } from './toCart';
import { checkBtn } from './checkBtn';
import { countPrice, coutnIntems } from './countPrice';
import { Categoty } from './category';
import { checkCategory } from './categoryHelper';
import { sort } from './sort';
window.addEventListener('load', create);
window.addEventListener('hashchange', create);
window.addEventListener('load', Categoty);
window.addEventListener('load', sort);

function create() {
  const hash = window.location.hash;
  if (hash === '') {
    products.products.forEach((item, index) => {
      createItems(index);
    });
  }
  addListener();
  checkBtn();
  countPrice();
  checkCategory();
  coutnIntems();
}
