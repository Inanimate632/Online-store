import products from '../../../products.json';
import { toPrice } from '../../helpers/helper';

export function countPrice() {
  const massItems: number[] = JSON.parse(localStorage.getItem('basket') || '[]');
  const sumWraper = document.querySelector('.cart__sum') as HTMLElement;
  if (massItems.length === 0 || massItems === null) {
    sumWraper.textContent = '€0.00';
  } else {
    let sum = 0;
    massItems.forEach((value) => {
      sum += products.products[value - 1].price;
    });
    sumWraper.textContent = `€${toPrice(sum)}`;
  }
}
