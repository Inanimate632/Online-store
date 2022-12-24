import products from '../../../products.json';
import { toPrice } from '../../helpers/helper';

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
  const ratenum = document.createElement('p');
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
