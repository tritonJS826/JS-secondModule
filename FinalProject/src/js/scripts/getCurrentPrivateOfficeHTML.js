import {currentUser} from './currentUser.js';





let myArray = currentUser.bought;

export function getCurrentPrivateOfficeHTML (array = myArray) {
  let wrapper;
  if (!array[0]) {
     wrapper = `<h3>Ничего нет(<h3>
       <text id="timer">  </text>`;
  } else {
     wrapper =`
  <text class="breadcrumbs"><a class="navKey" href="#" id="home2">Главное Меню</a><a>>Корзина</a></text>
  <h1> Добро пожаловать ${currentUser.name}!</h1>

  <div class="links navKey" id="settings"><a href="#">Настройки</a></div>
   <text id="timer">  </text>
  <button id="favourite" class="navKey">Просмотреть избранное</button>




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
          <button class="actKey" id="trial">Попробовать</button>
          <button class="actKey" id="addToFavourite${Number(array[i].id)-1}">Добавить в избранное</button>
          <input id="commentText" type="text" ></input>
          <button class="actKey" id="addComment">Добавить комментарий</button>
          <text>Комментарии: ${array[i].comments}</text>
        </div>
      </div>


      `;
  }
  return wrapper;
}
