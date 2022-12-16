import { router } from './routers';
import { config, routes, routesObj } from './Intarface';

export class Module {
  routes: routes;
  constructor(config: config) {
    this.routes = config.routes;
  }
  start() {
    if (this.routes) this.initRoutes();
  }

  initRoutes() {
    window.addEventListener('hashchange', this.renderRout.bind(this));
    window.addEventListener('load', this.renderRout.bind(this));
  }

  renderRout() {
    const url: string = router.getUrl();
    const route: routesObj = this.routes.find((r) => r.path === url) as routesObj;

    (
      document.querySelector('router-outlet') as HTMLElement
    ).innerHTML = `<${route.component.selector}>${route.component.template}<${route.component.selector}>`;
  }
}
