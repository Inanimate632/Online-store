import products from '../../../products.json';
import { countPercent, toPrice } from '../../helpers/helper';

export function createItems(id: number) {
  const cards = document.querySelector('.cards') as HTMLElement;
  const item = document.createElement('div');
  item.classList.add('cards__item');
  item.id = `cards__item${id}`;
  const wrap = document.createElement('div');
  wrap.classList.add('cards__wrap');
  wrap.style.background = `url(${products.products[id].images[0]}) no-repeat center center/cover`;
  item.append(wrap);
  const discount = document.createElement('span');
  discount.classList.add('cards__discount');
  discount.textContent = `${products.products[id].discountPercentage}%`;
  wrap.append(discount);
  const text = document.createElement('div');
  text.classList.add('cards__text');
  const title = document.createElement('p');
  title.classList.add('cards__title');
  title.textContent = products.products[id].title;
  text.append(title);
  const rating = document.createElement('div');
  rating.classList.add('cards__rating');
  const divStar = document.createElement('div');
  divStar.classList.add('cards__stars');
  divStar.innerHTML = createStar(id);
  rating.append(divStar);
  const ratenum = document.createElement('p');
  ratenum.classList.add('cards__ratenum');
  ratenum.textContent = products.products[id].rating.toString();
  rating.append(ratenum); //TODO append and create Star
  text.append(rating);
  const buy = document.createElement('div');
  buy.classList.add('cards__buy');
  const price = document.createElement('p');
  price.classList.add('cards__price');
  price.textContent = `€${toPrice(products.products[id].price)}`;
  buy.append(price);
  const btn = document.createElement('button');
  btn.classList.add('cards__btn');
  btn.textContent = 'Add to cart';
  buy.append(btn);
  text.append(buy);
  item.append(text);
  cards.append(item);
}

function createStar(id: number) {
  const star = `
  <svg width="75" height="20" viewBox="0 0 160 32">
    <defs>
      <mask id="perc${id}">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <rect x="${countPercent(products.products[id].rating, 5)}%" y="0" width="100%" height="100%" fill="grey" />
      </mask>
      <symbol viewBox="0 0 32 32" id="star">
        <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
      </symbol>
      <symbol viewBox="0 0 160 32" id="stars">
        <use xlink:href="#star" x="-64" y="0"></use>
        <use xlink:href="#star" x="-32" y="0"></use>
        <use xlink:href="#star" x="0" y="0"></use>
        <use xlink:href="#star" x="32" y="0"></use>
        <use xlink:href="#star" x="64" y="0"></use>
      </symbol>
    </defs>
    <use xlink:href="#stars" fill="gold" stroke="black" mask="url(#perc${id})"></use>
  </svg>
`;
  return star;
}
