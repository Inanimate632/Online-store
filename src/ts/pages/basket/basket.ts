import { createItems } from './createItems';
import { addRoutes } from './createRoute';
window.addEventListener('load', create);
window.addEventListener('hashchange', create);
window.addEventListener('load', checkHashLoad);
const hashLoad = window.location.hash;

function create() {
  let arrayProduct: number[] = JSON.parse(localStorage.getItem('basket') || '[]');
  const hash = window.location.hash;
  console.log(hash);
  if (hash === '#basket') {
    arrayProduct = arrayProduct.map((num) => num - 1);
    arrayProduct.forEach((item, index) => {
      createItems(item, index);
    });
    addRoutes();
    if (checkHashLoad()) {
      window.location.hash = checkHashLoad().toString();
    }
  }
}

function checkHashLoad() {
  let backHash = '';
  if (hashLoad.split('?')[0] === '#basket') {
    backHash = hashLoad;
    window.location.hash = '#basket';
  }
  if (backHash !== '') {
    return backHash;
  }
  return false;
}
