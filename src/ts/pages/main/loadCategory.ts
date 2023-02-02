import { MainTemplateComponents } from '../../../pages/mainTemplate';
import { component, routesObj } from '../../Intarface/IntarfaceRoutes';
import { appRoutes } from '../../routes/app.routes';
import { createObjCategory } from './categoryHelper';
import { createItems } from './createItems';
import products from '../../../products.json';
import { sortCards } from './sort';

export function loadCategory(hash: string) {
  const obj: routesObj = {
    component: loadCareateComponents(MainTemplateComponents, hash),
    path: hash,
  };
  appRoutes.push(obj);
  return appRoutes;
}

function loadCareateComponents(doc: component, hash: string) {
  const newComponent = {
    selector: doc.selector,
    template: createTemplate(doc.template, hash),
  };
  return newComponent;
}

function createTemplate(template: string, hash: string) {
  const arrayHash = hash.slice(1).split('=')[1].split('%E2%86%95');
  arrayHash[arrayHash.length - 1] = arrayHash[arrayHash.length - 1].split('&')[0];
  const div = document.createElement('div');
  div.innerHTML = template;
  const label = div.querySelectorAll('.fieldset__label');
  let arrayCategory: number[] = [];
  label.forEach((category) => {
    if (arrayHash.includes(category.textContent as string)) {
      arrayCategory = createObjCategory(
        category.textContent as string,
        true,
        (category.parentElement?.parentElement?.parentElement?.previousElementSibling?.textContent as string).trim()
      );
      (category.previousElementSibling as HTMLInputElement).setAttribute('checked', 'checked');
    }
  });
  if (arrayCategory.length === 0) {
    products.products.forEach((item, index) => {
      arrayCategory.push(index + 1);
    });
  }
  if (hash.slice(1).split('=')[0] === 'sort') {
    arrayCategory = sortCards(hash.slice(1).split('=')[1], arrayCategory);
  } else if (hash.split('&')[1] !== undefined) {
    if (hash.split('&')[1].slice(1).split('=')[0] === 'sort') {
      arrayCategory = sortCards(hash.split('&')[1].slice(1).split('=')[1], arrayCategory);
    }
  }
  const card = div.querySelector('.cards') as HTMLElement;
  arrayCategory.forEach((num) => {
    createItems(num - 1, card);
  });
  return div.innerHTML;
}
