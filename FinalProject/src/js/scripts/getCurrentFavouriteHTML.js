import {currentUser} from './currentUser.js';





let myArray = currentUser.favourite;

export function getCurrentFavouriteHTML (array = myArray) {
  let wrapper;
  if (!array[0]) {
    wrapper =`<h3>Ничего нет</h3>`
  } else {
   wrapper =`
  <text class="breadcrumbs"><a class="navKey" href="#" id="home2">Главное Меню</a><a>>Корзина</a></text>
  <h1> Избранное</h1>
  <div class="links navKey" id="settings"><a href="#">Настройки</a></div>





    `
  };
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
          <input id="commentText" type="text" ></input>
          <button class="actKey" id="trial">Попробовать</button>
          <button class="actKey" id="addComment">Добавить комментарий</button>
          <text>Комментарии: ${array[i].comments}</text>
        </div>
      </div>


      `;
  }
  return wrapper;
}
