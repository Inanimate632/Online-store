import massPages from './createItems';
import { component, routesObj } from '../../Intarface/IntarfaceRoutes';
import { appRoutes } from '../../routes/app.routes';

export function addRoutes() {
  let a = 1;
  for (let i = 0; i < massPages.length; i = i + 3) {
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
  const wraper = page.querySelector('app-cart-items') as HTMLElement;
  const pageValue = page.querySelector('.control_page-value') as HTMLElement;
  pageValue.textContent = num.toString();
  wraper.innerHTML = '';
  for (let i = (num - 1) * 3; i < num * 3; i++) {
    console.log(massPages[i]);
    if (massPages[i] !== undefined) {
      wraper.append(massPages[i]);
    }
  }
  const obj: component = {
    selector: `app-basket-page${num}`,
    template: page.innerHTML,
  };
  return obj;
}
