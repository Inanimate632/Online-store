import massPages from './createItems';
import { switchHash } from '../../helpers/helper';
window.addEventListener('load', take);
window.addEventListener('hashchange', take);

function take() {
  const swtitchBtn = document.querySelectorAll('.control_page-btn');
  swtitchBtn.forEach((item) => {
    item.addEventListener('click', () => {
      switchPage(item.textContent || '{}');
    });
  });
}

function switchPage(btnContent: string) {
  const pageNum = document.querySelector('.control_page-value') as HTMLElement;
  console.log(pageNum.textContent);
  const num: string = pageNum.textContent || '0';
  let a: number = parseInt(num);
  if (btnContent === ' > ' && a * 3 < massPages.length) {
    a++;
  } else if (btnContent === ' < ' && a > 1) {
    a--;
  }
  switchHash(a);
}
