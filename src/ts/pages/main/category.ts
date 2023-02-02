import { createHash } from '../../helpers/helper';
import { component, routesObj } from '../../Intarface/IntarfaceRoutes';
import { appRoutes } from '../../routes/app.routes';
import { createObjCategory } from './categoryHelper';
import { createItems } from './createItems';
import { sortCards } from './sort';
const NUMBER_OF_DIFFERENT_CATEGORY = 2;

export function Categoty() {
  const brand: NodeListOf<HTMLInputElement> = document.querySelectorAll('.checkbox-category');
  const categorys: NodeListOf<HTMLInputElement> = document.querySelectorAll('.checkbox');
  brand.forEach((el) => {
    el.addEventListener('click', () => {
      switchCategoryHash(el, 'Brand');
    });
  });
  categorys.forEach((el) => {
    el.addEventListener('click', () => {
      switchCategoryHash(el, 'Category');
    });
  });
}

function switchCategoryHash(el: HTMLInputElement, blockCategory: string) {
  const div = document.createElement('div') as HTMLElement;
  ((el.parentElement || div).parentElement || div).classList.toggle('fieldset__item_active');

  const arrayCategory: number[] = createObjCategory(
    (el.nextElementSibling as HTMLElement).textContent || '',
    el.checked,
    blockCategory
  );
  const hash = createHash('category', (el.nextElementSibling as HTMLElement).textContent as string, el.checked);
  createCategory(arrayCategory, hash);
}

export function createCategory(array: number[], hash: string, bool?: boolean) {
  const PathMass: string[] = [];
  appRoutes.forEach((value) => {
    PathMass.push(value.path);
  });
  const obj: routesObj = {
    component: createComponentCategory(array, bool),
    path: hash,
  };
  if (!PathMass.includes(hash)) {
    appRoutes.push(obj);
  } else {
    let indexCategory = 0;
    appRoutes.forEach((value, index) => {
      if (value.path === obj.path) {
        indexCategory = index;
      }
    });
    appRoutes[indexCategory] = obj;
  }
  window.location.hash = hash;
}

function createComponentCategory(array: number[], bool?: boolean) {
  const hashMass = window.location.hash.slice(1).split('=');
  if (bool !== false) {
    if (hashMass.length === NUMBER_OF_DIFFERENT_CATEGORY) {
      if (hashMass[0] === '?sort') {
        array = sortCards(hashMass[1], array);
      }
    } else if (hashMass.length > NUMBER_OF_DIFFERENT_CATEGORY) {
      if (hashMass[1].split('&')[1] === '?sort') {
        array = sortCards(hashMass[2], array);
      }
    }
  }
  const page = (document.querySelector('app-cards-wrap') as HTMLElement).cloneNode(true) as HTMLElement;
  const wrapPage = document.querySelector('app-cards-wrap') as HTMLElement;
  const card = page.querySelector('.cards') as HTMLElement;
  card.innerHTML = '';
  array.forEach((num) => {
    createItems(num - 1, card);
  });
  const obj: component = {
    selector: `app-cards-wrap`,
    template: page.innerHTML,
    wrap: wrapPage,
  };
  return obj;
}
