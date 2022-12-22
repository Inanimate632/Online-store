import products from '../../../products.json';
import { toPrice } from '../../helpers/helper';
const massPages: HTMLElement[] = [];

export function createItems(id: number, index: number): void {
  const product = document.querySelector('app-cart-items') as HTMLElement;
  const itemWraper = document.createElement('div');
  itemWraper.classList.add('product__item');
  const numElement = document.createElement('p');
  numElement.classList.add('product__item-number');
  numElement.textContent = (index + 1).toString();
  itemWraper.append(numElement);
  const ElementImg = document.createElement('img');
  ElementImg.classList.add('product__item-img');
  ElementImg.src = products.products[id].images[0];
  itemWraper.append(ElementImg);
  const ElementInfo = document.createElement('div');
  ElementInfo.classList.add('product__item_info');
  const itemTitle = document.createElement('h3');
  itemTitle.classList.add('item__info-title');
  itemTitle.textContent = products.products[id].title;
  ElementInfo.append(itemTitle);
  const itemDesc = document.createElement('p');
  itemDesc.classList.add('item__info-description');
  itemDesc.textContent = products.products[id].description;
  ElementInfo.append(itemDesc);
  const itemOther = document.createElement('div');
  itemOther.classList.add('item__info_other');
  const itemRating = document.createElement('p');
  itemRating.classList.add('info__other-rating');
  itemRating.textContent = `Rating: ${products.products[id].rating}`;
  itemOther.append(itemRating);
  const itemDiscount = document.createElement('p');
  itemDiscount.classList.add('info__other-discount');
  itemDiscount.textContent = `Discount: ${products.products[id].discountPercentage}`;
  itemOther.append(itemDiscount);
  ElementInfo.append(itemOther);
  itemWraper.append(ElementInfo);
  const control = document.createElement('div');
  control.classList.add('product__item_control');
  const stock = document.createElement('p');
  stock.classList.add('item__control-stock');
  stock.textContent = `Stock: ${products.products[id].stock}`;
  control.append(stock);
  const controlPanel = document.createElement('div');
  controlPanel.classList.add('item__control_panel');
  const incBtn = document.createElement('button');
  incBtn.classList.add('control__panel-btn');
  incBtn.innerHTML = '+';
  controlPanel.append(incBtn);
  const itemAmount = document.createElement('p');
  itemAmount.classList.add('control__panel-amount');
  itemAmount.textContent = '1';
  controlPanel.append(itemAmount);
  const decBtn = document.createElement('button');
  decBtn.classList.add('control__panel-btn');
  decBtn.innerHTML = '-';
  controlPanel.append(decBtn);
  control.append(controlPanel);
  const sum = document.createElement('div');
  sum.classList.add('item__control-sum');
  sum.textContent = `€${toPrice(products.products[id].price)}`;
  control.append(sum);
  itemWraper.append(control);
  massPages.push(itemWraper);
  if (index < 3) {
    product.append(itemWraper);
  }
}
export default massPages;
