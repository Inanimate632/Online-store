import { countPrice } from './countPrice';

export function addListener() {
  const cardsBtn = document.querySelectorAll('.cards__btn');
  cardsBtn.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      addToCardt(target, index);
    });
  });
}

function addToCardt(target: HTMLElement, index: number) {
  if ((target.textContent as string).trim() === 'Add to cart') {
    target.textContent = 'Drop from cart';
    let arrayItems;
    if (localStorage.getItem('basket') !== null) {
      arrayItems = JSON.parse(localStorage.getItem('basket') || '[]');
    } else {
      arrayItems = [];
    }
    arrayItems.push(index + 1);
    localStorage.setItem('basket', JSON.stringify(arrayItems));
  } else {
    target.textContent = 'Add to cart';
    const arrayItems: number[] = JSON.parse(localStorage.getItem('basket') || '[]');
    const deletedMass = arrayItems.filter((item) => item !== index + 1);
    localStorage.setItem('basket', JSON.stringify(deletedMass));
  }
  countPrice();
}
