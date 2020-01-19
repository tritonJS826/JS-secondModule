import {currentUser} from './currentUser.js';



let myArray = currentUser.basket;

export function getBasketHTML (array = myArray) {
  let wrapper;
  if (!array[0]) {
    wrapper =`<h3>Ничего нет</h3>`
  } else {
    wrapper =`
  <text class="breadcrumbs"><a class="navKey" href="#" id="home2">Главное Меню</a><a>>Корзина</a></text>


    `;
  }
  for ( let i = 0; i < array.length; i++) {

      wrapper += `
      <h3>Информация о товаре</h3>
      <div class="productDetailsImg">
        <img src="${array[i].srcImg}">

        <div class="productBasketDescription">
          <text>Наименование: ${array[i].name}</text>
          <text>Идентификатор: <text id="productId">${array[i].id}</text>,</text>
        <div class="quantity">
            <text>Количество: </text>
            <input type="number" id="quantity" value="1"></input>
        </div>
          <text>Описание: ${array[i].description}</text>
          <text>Стоимость: ${array[i].price}$</text>
          <button class="actKey" id="buy${Number(array[i].id) - 1}">Купить</button>
          <input id="commentText" type="text" ></input>
          <button class="actKey" id="addComment">Добавить комментарий</button>
          <button class="actKey" id="deleteFromBasket${i}">Удалить из корзины</button>

          <text>Комментарии${array[i].comments}</text>
        </div>
      </div>


      `;
  }
  return wrapper;
}
