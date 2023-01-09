import { createItems } from './createItems';
import products from '../../../products.json';
import { addListener } from './toCart';
import { checkBtn } from './checkBtn';
import { countPrice, coutnIntems } from './countPrice';
import { Categoty } from './category';
import { checkCategory } from './categoryHelper';
import { sort } from './sort';
let hash = window.location.hash;
if (hash !== '#basket' || hash.split('?')[0] !== '#basket') {
  window.addEventListener('load', create);
  window.addEventListener('hashchange', create);
  window.addEventListener('load', Categoty);
  window.addEventListener('load', sort);
}

function create() {
  hash = window.location.hash;
  if (hash !== '#basket' || hash.split('?')[0] !== '#basket') {
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
}
