export function checkBtn() {
  const massItems: number[] = JSON.parse(localStorage.getItem('basket') || '[]');
  const cardsBtn = document.querySelectorAll('.cards__btn');
  massItems.forEach((item) => {
    if (cardsBtn[item - 1] !== undefined) {
      cardsBtn[item - 1].textContent = 'Drop from cart';
    }
  });
}
