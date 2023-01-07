import { createHash } from '../../helpers/helper';
import { component, routesObj } from '../../Intarface/IntarfaceRoutes';
import { appRoutes } from '../../routes/app.routes';
import { createObjCategory } from './categoryHelper';
import { createItems } from './createItems';
import { sortCards } from './sort';

export function Categoty() {
  const Brand: NodeListOf<HTMLInputElement> = document.querySelectorAll('.checkbox-category');
  const categorys: NodeListOf<HTMLInputElement> = document.querySelectorAll('.checkbox');
  Brand.forEach((el) => {
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

  const massCategory: number[] = createObjCategory(
    (el.nextElementSibling as HTMLElement).textContent || '',
    el.checked,
    blockCategory
  );
  const hash = createHash('category', (el.nextElementSibling as HTMLElement).textContent, el.checked);
  createCategory(massCategory, hash);
}

export function createCategory(mass: number[], hash: string, bool?: boolean) {
  const PathMass: string[] = [];
  appRoutes.forEach((value) => {
    PathMass.push(value.path);
  });
  const obj: routesObj = {
    component: createComponentCategory(mass, bool),
    path: hash,
  };
  if (!PathMass.includes(hash)) {
    appRoutes.push(obj);
  } else {
    let ind = 0;
    appRoutes.forEach((value, index) => {
      if (value.path === obj.path) {
        ind = index;
      }
    });
    appRoutes[ind] = obj;
  }
  window.location.hash = hash;
}

function createComponentCategory(mass: number[], bool?: boolean) {
  const hashMass = window.location.hash.slice(1).split('=');
  if (bool !== false) {
    if (hashMass.length === 2) {
      if (hashMass[0] === '?sort') {
        mass = sortCards(hashMass[1], mass);
      }
    } else if (hashMass.length > 2) {
      if (hashMass[1].split('&')[1] === '?sort') {
        mass = sortCards(hashMass[2], mass);
      }
    }
  }
  const page = (document.querySelector('app-cards-wrap') as HTMLElement).cloneNode(true) as HTMLElement;
  const wrapPage = document.querySelector('app-cards-wrap') as HTMLElement;
  const card = page.querySelector('.cards') as HTMLElement;
  card.innerHTML = '';
  mass.forEach((num) => {
    createItems(num - 1, card);
  });
  const obj: component = {
    selector: `app-cards-wrap`,
    template: page.innerHTML,
    wrap: wrapPage,
  };
  return obj;
}
