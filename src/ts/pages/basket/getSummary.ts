import massPages from './createItems';
import { toPrice } from '../../helpers/helper';

export function fillSummary(page: HTMLElement) {
  const productCount = page.querySelector('.products-amount') as HTMLElement;
  const total = page.querySelector('.price-amount') as HTMLElement;
  productCount.textContent = `${massPages.length}`;
  total.textContent = `€${toPrice(countTotal())}`;
}

function countTotal(): number {
  let sum = 0;
  massPages.forEach((el) => {
    const price = el.querySelector('.item__control-sum') as HTMLElement;
    const priceNumber: string[] = (price.textContent as string).split('').filter((el) => Number(el));
    sum += Number(priceNumber.join(''));
  });
  return sum;
}
