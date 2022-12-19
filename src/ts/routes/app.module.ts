import { Module } from './module';
import { appRoutes } from './app.routes';
import { config, routes } from '../Intarface/IntarfaceRoutes';

class appModules extends Module {
  constructor(config: config) {
    super(config);
  }
}

export const appModule = new appModules({
  routes: appRoutes as routes,
});
