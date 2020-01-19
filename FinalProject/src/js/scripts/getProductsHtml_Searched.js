import {bdGoods} from './bdGoods';

export function getProductsHtml_Searched() {
  let wrapper = `
  <text class="breadcrumbs"><a class="navKey" href="#" id="home2">Главное Меню</a><a>>Товары</a></text>

  `;
	let input = document.getElementById("searchText").value; //получаем значение из поля в html
	if(input.length<1) {
    wrapper = `<text>Для поиска вы должны ввести один или более символов<text>`;
    return(wrapper);
  }
	if(input.length>=1) {
		let nothing = true;//если true,то выведет -- ничего не найдено
		for (let i=0;i<bdGoods.length;i++){
			for (let key in bdGoods[i]) {
				if (bdGoods[i].name.includes(input) || bdGoods[i].description.includes(input)) {
					//alert(objArray[i][key] + "exist in"+ objArray[i].name);
          wrapper += `
          <div class="unit" id="productId${bdGoods[i].id}">
          <img src="${bdGoods[i].srcImg}">
          <div>
            <h3>${bdGoods[i].name}</h3>
            <text>${bdGoods[i].description}</text>
            <br><br><br>
            <text> Стоимость: ${bdGoods[i].price} $</text>
            <button class="navKey" id="product${bdGoods[i].id}Details">Детали</button>
            <button class="actKey" id="product${bdGoods[i].id}AddToBasket">В корзину</button>
          </div>
          </div>
          `
					nothing = false;
          break;
				}
			}
		}
		if (nothing) {
      alert("Ничего не найдено");
      wrapper = `<text>Ничего не найдено(поиск идет с учетом регистра по названию и описанию товара)<text>`;
      return(`${wrapper}`);
    } else {
      return(`${wrapper}`);
    }
	}
}
