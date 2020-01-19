//здесь описана логика появления страниц в зависимости от нажатых кнопок
import {drawer} from './drawer.js';
import {settings} from './bdSettings.js';
import {goodsHTML,goodsCSS1,goodsCSS2} from '../pages/mainBlock/goods.js';
import {action, actionFunc} from './action.js';
import {rebootListeners} from './rebootListeners.js';
import {productDetailsHTML} from './getProductDetailsHTML.js';
import {bdGoods} from './bdGoods.js'
import {getBasketHTML} from './getBasketHTML.js';
import {getCurrentPrivateOfficeHTML} from './getCurrentPrivateOfficeHTML.js';
import {getCurrentFavouriteHTML} from './getCurrentFavouriteHTML.js';
import {timerHTML} from './timerHTML.js';
import {initMap} from './initMap.js';




export const navKeys = document.getElementsByClassName('navKey');

export function navigation(){

  for (let key of navKeys) {
    key.addEventListener("click", navigationFunc);
  }
}


//проблема -- не вытягивается id
export function navigationFunc(e) {
  console.log(`navigationFunc listen `+e.currentTarget.id);
  switch (e.currentTarget.id) {
    case "goods":
    case "goods2":
      document.getElementById('sidebar').style.display="";
      drawer(settings.style[settings.style.mode].goodsHTML,settings.style[settings.style.mode].goodsCSS,"pages");
      rebootListeners();
      break;
    case "news":
      document.getElementById('sidebar').style.display="none";
      drawer(settings.style[settings.style.mode].newsHTML,settings.style[settings.style.mode].newsCSS,"pages");
      rebootListeners();
    break;
    case "aboutUs":
      document.getElementById('sidebar').style.display="none";
      drawer(settings.style[settings.style.mode].aboutUsHTML,settings.style[settings.style.mode].aboutUsCSS,"pages");
      initMap();
      rebootListeners();
    break;
    case "home":
    case "home2":
      document.getElementById('sidebar').style.display="";
      drawer(settings.style[settings.style.mode].homeHTML,settings.style[settings.style.mode].homeCSS,"pages");
      rebootListeners();
      break;
    case "signIn":
      document.getElementById('sidebar').style.display="none";
      drawer(settings.style[settings.style.mode].signInHTML,settings.style[settings.style.mode].signInCSS,"pages");
      rebootListeners();
    break;
    case "signUp":
      document.getElementById('sidebar').style.display="none";
      drawer(settings.style[settings.style.mode].signUpHTML,settings.style[settings.style.mode].signUpCSS,"pages");
      rebootListeners();
    case "settings":
      document.getElementById('sidebar').style.display="none";
      drawer(settings.style[settings.style.mode].settingsHTML,settings.style[settings.style.mode].settingsCSS,"pages");
      rebootListeners();
        break;
    case "basket":
        document.getElementById('sidebar').style.display="";
        //drawer(settings.style[settings.style.mode].basketHTML,settings.style[settings.style.mode].basketCSS,"pages");
        drawer(getBasketHTML(),settings.style[settings.style.mode].basketCSS,"pages");
        rebootListeners();
    break;
    case "searchKey":
        document.getElementById('sidebar').style.display="";
        rebootListeners();
    break;
    case "filterKey":
        document.getElementById('sidebar').style.display="";
        rebootListeners();
    break;
    case "applySettingsButton":
        drawer(settings.style[settings.style.mode].headerHTML,settings.style[settings.style.mode].headerCSS,"header");
        drawer(settings.style[settings.style.mode].settingsHTML,settings.style[settings.style.mode].settingsCSS,"pages");
        drawer(settings.style[settings.style.mode].sidebarHTML,settings.style[settings.style.mode].sidebarCSS,"sidebar");
        drawer(settings.style[settings.style.mode].footerHTML,settings.style[settings.style.mode].footerCSS,"footer");
        rebootListeners();
    break;
    case "privateOffice":
    case "privateOffice2":
      document.getElementById('sidebar').style.display="none";
      //drawer(settings.style[settings.style.mode].privateOfficeHTML,settings.style[settings.style.mode].privateOfficeCSS,"pages");
      drawer(getCurrentPrivateOfficeHTML(),settings.style[settings.style.mode].privateOfficeCSS,"pages");
      timerHTML("","Jan 5, 2021 15:37:25","timer");
      rebootListeners();
    break;
    case "authorisation":
      // document.getElementById('sidebar').style.display="none";
      // drawer(settings.style[settings.style.mode].privateOfficeHTML,settings.style[settings.style.mode].privateOfficeCSS,"pages");
      // rebootListeners();
    break;
    case "favourite":
      document.getElementById('sidebar').style.display="none";
      drawer(getCurrentFavouriteHTML(),settings.style[settings.style.mode].privateOfficeCSS,"pages");
      rebootListeners();
    default:
    //для всех кнопок с детальной информацией о товаре
    if (e.currentTarget.id.search(/product(\d+)Details/) != "-1") {

      let id = e.currentTarget.id.replace("Details", "");
      id = id.replace('product', "");
      drawer(productDetailsHTML(bdGoods,id),settings.style[settings.style.mode].infoAboutThisGoodCSS,"pages");
      rebootListeners();
    }
    break;
  }




}
