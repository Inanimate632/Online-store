import arrayPages from './createItems';
import { component, routesObj } from '../../Intarface/IntarfaceRoutes';
import { appRoutes } from '../../routes/app.routes';
import { fillSummary } from './getSummary';
export const MAX_COMPONENT_ON_BASKET = 3;

export function addRoutes() {
  let a = 1;
  for (let i = 0; i < arrayPages.length; i = i + 3) {
    const obj: routesObj = {
      component: creteComponent(a),
      path: `basket?pages=${a}`,
    };
    a++;
    appRoutes.push(obj);
  }
  appRoutes[0].component = creteComponent(1);
}

function creteComponent(num: number) {
  const page = document.querySelector('app-basket-page') as HTMLElement;
  fillSummary(page);
  const wraper = page.querySelector('app-cart-items') as HTMLElement;
  const pageValue = page.querySelector('.control_page-value') as HTMLElement;
  pageValue.textContent = num.toString();
  wraper.innerHTML = '';
  for (let i = (num - 1) * MAX_COMPONENT_ON_BASKET; i < num * MAX_COMPONENT_ON_BASKET; i++) {
    if (arrayPages[i]) {
      wraper.append(arrayPages[i]);
    }
  }
  const obj: component = {
    selector: `app-basket-page`,
    template: page.innerHTML,
  };
  return obj;
}
