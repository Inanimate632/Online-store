import { basketPageComponent } from '../../pages/basketTamplate';
import { MainTemplateComponents } from '../../pages/mainTemplate';
import { routesObj } from '../Intarface/IntarfaceRoutes';

export const appRoutes: routesObj[] = [
  { path: 'basket', component: basketPageComponent },
  { path: '', component: MainTemplateComponents },
];
