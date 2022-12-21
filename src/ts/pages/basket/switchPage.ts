import massPages from './createItems';
import { switchHash } from '../../helpers/helper';
window.addEventListener('load', take);
window.addEventListener('hashchange', take);

function take() {
  if (window.location.hash === '#basket') {
    const swtitchBtn = document.querySelectorAll('.control_page-btn');
    swtitchBtn.forEach((item) => {
      item.addEventListener('click', () => {
        switchPage(item.textContent || '{}');
      });
    });
  }
}

function switchPage(btnContent: string) {
  const pageNum = document.querySelector('.control_page-value') as HTMLElement;
  const num: string = pageNum.textContent || '0';
  let a: number = parseInt(num);
  if (btnContent === ' > ' && a * 3 < massPages.length) {
    a++;
  } else if (btnContent === ' < ' && a > 1) {
    a--;
  }
  console.log(a);
  pageNum.textContent = a.toString();
  switchHash(a);
}
