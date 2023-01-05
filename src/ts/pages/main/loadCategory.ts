import { MainTemplateComponents } from '../../../pages/mainTemplate';
import { component, routesObj } from '../../Intarface/IntarfaceRoutes';
import { appRoutes } from '../../routes/app.routes';
import { createObjCategory } from './categoryHelper';
import { createItems } from './createItems';

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
  const hashMass = hash.slice(1).split('=')[1].split('%E2%86%95');
  const div = document.createElement('div');
  div.innerHTML = template;
  const label = div.querySelectorAll('.fieldset__label');
  let massCategory: number[] = [];
  label.forEach((category) => {
    if (hashMass.includes(category.textContent || '')) {
      massCategory = createObjCategory(
        category.textContent || '',
        true,
        category.parentElement?.parentElement?.parentElement?.previousElementSibling?.textContent?.trim() || ''
      );
      (category.previousElementSibling as HTMLInputElement).setAttribute('checked', 'checked');
    }
  });
  const card = div.querySelector('.cards') as HTMLElement;
  massCategory.forEach((num) => {
    createItems(num - 1, card);
  });
  return div.innerHTML;
}
