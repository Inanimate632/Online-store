export function checkBtn() {
  const arrayItems: number[] = JSON.parse(localStorage.getItem('basket') || '[]');
  const cardsBtn = document.querySelectorAll('.cards__btn');
  arrayItems.forEach((num) => {
    cardsBtn.forEach((item) => {
      if (item.parentElement?.parentElement?.parentElement?.id.slice(11) === (num - 1).toString()) {
        item.textContent = 'Drop from cart';
      }
    });
  });
}
