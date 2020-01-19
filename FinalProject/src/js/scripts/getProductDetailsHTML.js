


export function productDetailsHTML (array, id) {
  let wrapper =`
  <text class="breadcrumbs">
    <a class="navKey" href="#" id="home2">Главное Меню</a><a href="#" class="navKey" id="goods2">>Товары</a><a>>Детали</a></text>

  `;
  for ( let i = 0; i < array.length; i++) {
    if (array[i].id == id) {
      wrapper += `
      <h3>Информация о товаре</h3>
      <div class="productDetailsImg">
        <img src="${array[i].srcImg}">
        <img src="${array[i].srcImg}">
        <img src="${array[i].srcImg}">
      </div>
      <div class="productDetailsDescription">
        <text>Наименование: ${array[i].name},</text>
        <text>Идентификатор: <text id="productId">${array[i].id}</text>,</text>
        <text>Размер: ${array[i].size}, Цвет: ${array[i].color},</text>
        <text>Описание: ${array[i].description},</text>
        <text>Стоимость: ${array[i].price},$</text>
        <text>Рейтинг:${array[i].rating},</text>
        <input id="commentText" type="text" ></input>
        <button class="actKey" id="addComment">Добавить комментарий</button>
        <text>Комментарии${array[i].comments}</text>
      </div>


      `;
      return wrapper;
    }
  }
}
