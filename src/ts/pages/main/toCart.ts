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
  if (target.textContent?.trim() === 'Add to cart') {
    target.textContent = 'Drop from cart';
    let massItems;
    if (localStorage.getItem('basket') !== null) {
      massItems = JSON.parse(localStorage.getItem('basket') || '[]');
    } else {
      massItems = [];
    }
    massItems.push(index + 1);
    localStorage.setItem('basket', JSON.stringify(massItems));
  } else {
    target.textContent = 'Add to cart';
    const massItems: number[] = JSON.parse(localStorage.getItem('basket') || '[]');
    const deletedMass = massItems.filter((item) => item !== index + 1);
    console.log(index);
    console.log(deletedMass);
    localStorage.setItem('basket', JSON.stringify(deletedMass));
  }
}
