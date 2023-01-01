import { createHash } from '../../helpers/helper';
import { component, routesObj } from '../../Intarface/IntarfaceRoutes';
import { appRoutes } from '../../routes/app.routes';
import { createItems } from './createItems';
import products from '../../../products.json';
let massNum: number[] = [];

export function Categoty() {
  const categorys: NodeListOf<HTMLInputElement> = document.querySelectorAll('.checkbox');
  categorys.forEach((el) => {
    el.addEventListener('click', () => {
      switchCategoryHash(el);
    });
  });
}

function switchCategoryHash(el: HTMLInputElement) {
  const div = document.createElement('div') as HTMLElement;
  ((el.parentElement || div).parentElement || div).classList.toggle('fieldset__item_active');

  const massCategory: number[] = createObjCategory(
    (el.nextElementSibling as HTMLElement).textContent || '',
    el.checked
  );
  createCategory(massCategory, el);
}

function createCategory(mass: number[], el: HTMLInputElement) {
  const hash = createHash('category', el.nextElementSibling as HTMLElement, el.checked);
  const PathMass: string[] = [];
  appRoutes.forEach((value) => {
    PathMass.push(value.path);
  });
  const obj: routesObj = {
    component: createComponentCategory(mass),
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

function createComponentCategory(mass: number[]) {
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

function createObjCategory(category: string, bool: boolean) {
  if (bool) {
    products.products.forEach((item) => {
      if (item.category === category) {
        massNum.push(item.id);
      }
    });
  } else {
    products.products.forEach((item) => {
      if (item.category === category) {
        massNum = massNum.filter((num) => num !== item.id);
      }
    });
  }
  return massNum;
}

export function checkCategory() {
  const hash = window.location.hash;
  const item = document.querySelectorAll('.fieldset__item') as NodeListOf<HTMLElement>;
  if (hash !== '') {
    item.forEach((el) => {
      if (!(el.firstElementChild?.firstElementChild as HTMLInputElement).checked) {
        (el.lastElementChild?.querySelector('.fieldset__count') as HTMLElement).textContent = '0';
      } else {
        (el.lastElementChild?.querySelector('.fieldset__count') as HTMLElement).textContent = '5';
      }
    });
  } else {
    item.forEach((el) => {
      (el.lastElementChild?.querySelector('.fieldset__count') as HTMLElement).textContent = '5';
    });
  }
}
