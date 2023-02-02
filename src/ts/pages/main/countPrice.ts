import products from '../../../products.json';
import { toPrice } from '../../helpers/helper';

export function countPrice() {
  const arrayItems: number[] = JSON.parse(localStorage.getItem('basket') as string);
  const sumWraper = document.querySelector('.cart__sum') as HTMLElement;
  if (arrayItems.length === 0 || arrayItems === null) {
    sumWraper.textContent = '€0.00';
  } else {
    let sum = 0;
    arrayItems.forEach((value) => {
      sum += products.products[value - 1].price;
    });
    sumWraper.textContent = `€${toPrice(sum)}`;
  }
}

export function coutnIntems() {
  const numItems = document.querySelector('.found__cards') as HTMLElement;
  if (numItems !== null) {
    const cards = document.querySelectorAll('.cards__item');
    numItems.textContent = `${cards.length} items`;
  }
}
