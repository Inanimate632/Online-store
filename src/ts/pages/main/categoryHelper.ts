import products from '../../../products.json';
let massNum: number[] = [];

export function createObjCategory(category: string, bool: boolean, blockCategory: string) {
  if (blockCategory === 'Category') {
    if (bool) {
      products.products.forEach((item) => {
        if (item.category === category) {
          massNum.push(item.id);
        }
      });
    } else {
      products.products.forEach((item) => {
        if (item.category === category) {
          massNum = massNum.filter((num) => num !== item.id);
        }
      });
    }
    return massNum;
  } else if (blockCategory === 'Brand') {
    if (bool) {
      products.products.forEach((item) => {
        if (item.brand === category) {
          massNum.push(item.id);
        }
      });
    } else {
      products.products.forEach((item) => {
        if (item.brand === category) {
          massNum = massNum.filter((num) => num !== item.id);
        }
      });
    }
    return massNum;
  }
  return [];
}

export function checkCategory() {
  const hash = window.location.hash;
  const item = document.querySelectorAll('.fieldset__item') as NodeListOf<HTMLElement>;
  if (hash !== '') {
    item.forEach((el) => {
      if (!(el.firstElementChild?.firstElementChild as HTMLInputElement).checked) {
        (el.lastElementChild?.querySelector('.fieldset__count') as HTMLElement).textContent = countElement(
          (el.firstElementChild as HTMLElement).lastElementChild as HTMLElement
        );
      } else {
        (el.lastElementChild?.querySelector('.fieldset__count') as HTMLElement).textContent = '5';
      }
    });
  } else {
    item.forEach((el) => {
      (el.lastElementChild?.querySelector('.fieldset__count') as HTMLElement).textContent = '5';
    });
  }
}

function countElement(nameCategory: HTMLElement | null | undefined) {
  let counter = 0;
  const items = document.querySelectorAll('.cards__item');
  items.forEach((item) => {
    if (products.products[+item.id.slice(11)].category === nameCategory?.textContent) {
      counter++;
    }
    if (products.products[+item.id.slice(11)].brand === nameCategory?.textContent) {
      counter++;
    }
  });
  return counter.toString();
}
