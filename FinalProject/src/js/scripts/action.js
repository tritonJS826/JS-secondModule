import {settings} from './bdSettings.js';
import {drawer} from './drawer.js';
import {navigation} from './navigation.js';
import {privateOffice} from '../pages/header.js';
import {rebootListeners} from './rebootListeners.js';
import {filterSettings} from './filterSettings.js';
import {getProductsHTML_Filtered} from './getProductsHTML_Filtered.js';
import {getProductsHtml_Searched} from './getProductsHtml_Searched.js';
import {User} from './classUser.js';
import {dbUsers} from './dbUsers.js';
import {currentUser} from './currentUser.js';
import {bdGoods} from './bdGoods.js';
import {productDetailsHTML} from './getProductDetailsHTML.js';
import {getBasketHTML} from './getBasketHTML.js';
import {getCurrentPrivateOfficeHTML} from './getCurrentPrivateOfficeHTML.js';





export const actKeys = document.getElementsByClassName('actKey');

export function action() {

  for (let key of actKeys) {
    key.addEventListener("click", actionFunc,key);
  }
}

export function actionFunc(e)  {
  console.log(`actionFunc listen `+ e.currentTarget.id);
  switch (e.currentTarget.id) {
    case "applySettingsButton":
      settings.style.mode=document.getElementById('styleMode').value;
      console.log(settings.style.mode);

    break;
    case "authorisation":
      //тупо добавляет без проверки на повторяемость пользователя и на совпадение пароля
      let newUser = new User('none', document.getElementById('userName').value, document.getElementById('userPassword').value );
      dbUsers.push(newUser);//добавили в базу данных
      currentUser.name= newUser.name;
      currentUser.password=  newUser.password;
      drawer(getCurrentPrivateOfficeHTML(),settings.style[settings.style.mode].privateOfficeCSS, "pages");
      rebootListeners();
    break;
    case "filterKey":
      //получение данных фильтра
      filterSettings.category=document.getElementById('filterCategory').value;
      filterSettings.firstLast= document.getElementById('filterFirstLast').value;
      filterSettings.minPrice=document.getElementById('minPrice').value;
      filterSettings.maxPrice=document.getElementById('maxPrice').value;
      filterSettings.manufacturer=document.getElementById('filterManufactured').value;
      filterSettings.size=document.getElementById('filterSize').value;
      filterSettings.color=document.getElementById('filterColor').value;
      drawer(getProductsHTML_Filtered(
        filterSettings.dataBase,
        filterSettings.category,
        filterSettings.minPrice,
        filterSettings.maxPrice,
        filterSettings.manufacturer,
        filterSettings.size,
        filterSettings.color,
        filterSettings.firstLast
      ),settings.style[settings.style.mode].goodsCSS,"pages");
      break;
      case "searchKey":
        drawer(getProductsHtml_Searched(), settings.style[settings.style.mode].goodsCSS, "pages");
        console.log("getProductsHtml_Searched Complete");
      break;
      case "addComment":
        let id = document.getElementById('productId').innerHTML;
        bdGoods[Number(id)-1].comments += `<br><text class="comment">${document.getElementById('commentText').value}</text> `;
        //alert(bdGoods[Number(id)-1].id);
        drawer(productDetailsHTML(bdGoods, (Number(id)) ), settings.style[settings.style.mode].infoAboutThisGoodCSS, "pages");
        rebootListeners();
        console.log("comment added");
      break;
      case "trial":
        alert("Пробуйте на здоровье!");
      break;
      default:

      /*немного регулярных выражений */
      /*для productId..AddTobasket*/
      if (e.currentTarget.id.search('AddToBasket') != "-1" ) {
        let id = e.currentTarget.id.replace("product", "");
        id = id.replace('AddToBasket', "");
        currentUser.basket.push(bdGoods[Number(id)-1]);
        console.log(`product ${id} Added to basket`);
        break;
      }
      /*для deleteFromBasket..*/
      if (e.currentTarget.id.search('delete') != "-1") {
         let delId = e.currentTarget.id.replace("deleteFromBasket", "");
         delId = delId.replace('AddToBasket', "");
         currentUser.basket.splice(Number(delId),1);
         drawer(getBasketHTML(),settings.style[settings.style.mode].basketCSS,"pages");
         rebootListeners();
         console.log(`product ${delId} deleted from basket`);
         break;
      }

      /*для кнопки buy*/
      if (e.currentTarget.id.search('buy') != "-1") {
        let buyId = e.currentTarget.id.replace("buy", "");
        currentUser.bought.push(bdGoods[buyId]);
        alert("Деньги списаны с вашего счета, товар приобретен. Приобретенные товары можно лицезреть в личном кабинете")
        console.log(`product ${buyId} bought`);
      }

      /*для кнопки addToFavourite..*/
      if (e.currentTarget.id.search('addToFavourite') != "-1") {
        let favouriteId = e.currentTarget.id.replace("addToFavourite", "");
        currentUser.favourite.push(bdGoods[favouriteId]);
        alert("Продукт добавлен в избранное")
        console.log(`product ${favouriteId} added to favourite `);
      }
  }
};
