import massPages from './createItems';
import { switchHash } from '../../helpers/helper';
import { MAX_COMPONENT_ON_BASKET } from './createRoute';
window.addEventListener('load', take);
window.addEventListener('hashchange', take);

function take() {
  const swtitchBtn = document.querySelectorAll('.control_page-btn');
  swtitchBtn.forEach((item) => {
    item.addEventListener('click', () => {
      switchPage(item.textContent as string);
    });
  });
}

function switchPage(btnContent: string) {
  const pageNum = document.querySelector('.control_page-value') as HTMLElement;
  const num: string = pageNum.textContent as string;
  let a: number = parseInt(num);
  if (btnContent === ' > ' && a * MAX_COMPONENT_ON_BASKET < massPages.length) {
    a++;
  } else if (btnContent === ' < ' && a > 1) {
    a--;
  }
  switchHash(a);
}
