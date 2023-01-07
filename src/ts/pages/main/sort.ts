import { createHash } from '../../helpers/helper';
import products from '../../../products.json';
import { createCategory } from './category';

export function sort() {
  const sort = document.querySelector('.sort__main') as HTMLSelectElement;
  sort.addEventListener('change', switchSort);
  const hash = window.location.hash;
  const opts = sort.options;
  if (hash.slice(1).split('=')[0] === '?sort') {
    for (let i = 0; i < sort.length; i++) {
      if (opts[i].value === hash.slice(1).split('=')[1]) {
        sort.selectedIndex = i;
      }
    }
  } else if (hash.split('&')[1] !== undefined) {
    if (hash.split('&')[1].slice(1).split('=')[0] === '?sort') {
      for (let i = 0; i < sort.length; i++) {
        if (opts[i].value === hash.split('&')[1].slice(1).split('=')[1]) {
          sort.selectedIndex = i;
          break;
        }
      }
    }
  }
}

function switchSort() {
  const sort = document.querySelector('.sort__main') as HTMLSelectElement;
  const hash = createHash('sort', sort.options[sort.selectedIndex].value, true);
  const sortMass = sortCards(sort.options[sort.selectedIndex].value);
  createCategory(sortMass, hash, false);
}

export function sortCards(sortName: string, massNumber?: number[]) {
  let mass: number[] = [];
  if (massNumber === undefined) {
    const cards = document.querySelectorAll('.cards__item');
    cards.forEach((card) => {
      mass.push(+card.id.slice(11));
    });
  } else {
    mass = massNumber.map((num) => num - 1);
  }
  if (sortName === 'price-ASC') {
    mass.sort((a, b) => products.products[a].price - products.products[b].price);
  } else if (sortName === 'price-DESC') {
    mass.sort((a, b) => products.products[b].price - products.products[a].price);
  } else if (sortName === 'rating-ASC') {
    mass.sort((a, b) => products.products[a].rating - products.products[b].rating);
  } else if (sortName === 'rating-DESC') {
    mass.sort((a, b) => products.products[b].rating - products.products[a].rating);
  }
  mass = mass.map((num) => num + 1);
  return mass;
}
