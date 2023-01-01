import { component } from '../ts/Intarface/IntarfaceRoutes';

export const MainTemplateComponents: component = {
  selector: 'app-main-page',
  template: `
  <article class="store">
        <section class="filters">
          <div class="category">
            <fieldset class="fieldset">
              <legend class="fieldset__title">
                Category
              </legend>
              <!--TODO: генерация из json!!! -->
              <div class="fieldset__items fieldset__items_nonactive">
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <!--TODO: кастомный чебокс!!! -->
                    <input id="checkbox1" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox1">smartphones</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox2" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox2">laptops</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox3" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox3">fragrances</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox4" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox4">skincare</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox5" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox5">groceries</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox6" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox6">home-decoration</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox7" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox7">furniture</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox8" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox8">tops</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox9" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox9">womens-dresses</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox10" class="checkbox" type="checkbox">
                    <label class="fieldset__label0" for="checkbox1">womens-shoes</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox11" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox11">mens-shirts</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox12" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox12">mens-shoes</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox13" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox13">mens-watches</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox14" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox14">womens-watches</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox15" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox15">womens-bags</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox16" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox16">womens-jewellery</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox17" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox17">sunglasses</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox18" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox18">automotive</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox19" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox19">motorcycle</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox20" class="checkbox" type="checkbox">
                    <label class="fieldset__label" for="checkbox20">lighting</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">5</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="brand">
            <fieldset class="fieldset">
              <legend class="fieldset__title">
                Brand
              </legend>
              <!--TODO: генерация из json!!! -->
              <div class="fieldset__items fieldset__items_nonactive">
                <div class="fieldset__item fieldset__item_active">
                  <div class="fieldset__wrap">
                    <!--TODO: кастомный чебокс!!! -->
                    <input id="checkbox1" type="checkbox">
                    <label class="fieldset__label" for="checkbox1">smartphones</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">1</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox1" type="checkbox">
                    <label class="fieldset__label" for="checkbox1">smartphones</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">1</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox1" type="checkbox">
                    <label class="fieldset__label" for="checkbox1">smartphones</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">1</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox1" type="checkbox">
                    <label class="fieldset__label" for="checkbox1">smartphones</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">1</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox1" type="checkbox">
                    <label class="fieldset__label" for="checkbox1">smartphones</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">1</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox1" type="checkbox">
                    <label class="fieldset__label" for="checkbox1">smartphones</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">1</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox1" type="checkbox">
                    <label class="fieldset__label" for="checkbox1">smartphones</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">1</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox1" type="checkbox">
                    <label class="fieldset__label" for="checkbox1">smartphones</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">1</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
                <div class="fieldset__item">
                  <div class="fieldset__wrap">
                    <input id="checkbox1" type="checkbox">
                    <label class="fieldset__label" for="checkbox1">smartphones</label>
                  </div>
                  <div class="fieldset__amout">
                    (<span class="fieldset__count">1</span>/<span class="fieldset__count">5</span>)
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="price">
            <fieldset class="fieldset">
              <legend class="fieldset__title">
                Price
              </legend>
              <!-- TODO: слайдер в обе стороны -->
              <div class="fieldset__block">
                <div class="cost num-range">
                  <span class="cost__item num-range__item" id="cost-from">€10.00</span>
                  <span class="cost__item num-range__item">–</span>
                  <span class="cost__item num-range__item" id="cost-to">€1749.00</span>
                </div>
                <div class="slider">
                  <div class="slider__line"></div>
                  <div class="slider__range">
                    <span class="slider__item">min</span>
                    <span class="slider__item">max</span>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="stock">
            <fieldset class="fieldset">
              <legend class="fieldset__title">
                In stock
              </legend>
              <!-- TODO: слайдер в обе стороны -->
              <div class="fieldset__block">
                <div class="amount num-range">
                  <span class="amount__item num-range__item" id="amount-from">2</span>
                  <span class="amount__item num-range__item">–</span>
                  <span class="amount__item num-range__item" id="amount-to">150</span>
                </div>
                <div class="slider">
                  <div class="slider__line"></div>
                  <div class="slider__range">
                    <span class="slider__item">min</span>
                    <span class="slider__item">max</span>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="button">
            <button class="button__item">Reset</button>
            <button class="button__item">Copy</button>
          </div>
        </section>
        <section class="products">
          <div class="parameters">
            <div class="found">
              Found <span class="found__cards">5 items</span>.
            </div>
            <div class="group">
              <div class="sort">
                <div class="sort__main">
                  <span class="sort__text">Price low to high</span>
                  <i class="fa fa-angle-down"></i>
                </div>
                <ul class="sort__list">
                  <li class="sort__item">
                    <i class="fa fa-check sort__check"></i>
                    <span class="sort__text">Price low to high</span>
                  </li>
                  <li class="sort__item">
                    <i class="fa fa-check sort__check"></i>
                    <span class="sort__text">Price high to low</span>
                  </li>
                  <li class="sort__item">
                    <i class="fa fa-check sort__check"></i>
                    <span class="sort__text">Lowest rating</span>
                  </li>
                  <li class="sort__item">
                    <i class="fa fa-check sort__check"></i>
                    <span class="sort__text">Highest rating</span>
                  </li>
                  <li class="sort__item">
                    <i class="fa fa-check sort__check"></i>
                    <span class="sort__text">Minimum discount</span>
                  </li>
                  <li class="sort__item">
                    <i class="fa fa-check sort__check"></i>
                    <span class="sort__text">Maximum discount</span>
                  </li>
                </ul>
              </div>
              <div class="view">
                <div class="view__mode view__mode_triple">
                  <span class="view__triple"></span>
                  <span class="view__triple"></span>
                  <span class="view__triple"></span>
                  <span class="view__triple"></span>
                  <span class="view__triple"></span>
                  <span class="view__triple"></span>
                  <span class="view__triple"></span>
                  <span class="view__triple"></span>
                  <span class="view__triple"></span>
                </div>
                <div class="view__mode view__mode_double">
                  <span class="view__double"></span>
                  <span class="view__double"></span>
                  <span class="view__double"></span>
                  <span class="view__double"></span>
                </div>
              </div>
            </div>
          </div>
          <app-cards-wrap>
            <div class="cards"></div>          
          </app-cards-wrap>
        </section>
      </article>`,
};
