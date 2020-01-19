import {currentUser} from '../../scripts/currentUser.js';
import {dbUsers} from '../../scripts/dbUsers.js';


export function privateOfficeHTML() {


  let html = `
  <text class="breadcrumbs"><a class="navKey" href="#" id="home2">Главное Меню</a><a>>Личный кабинет</a></text>


   <h1> Добро пожаловать!</h1>
   <div class="links navKey" id="settings"><a href="#">Настройки</a></div>



  `;



  return html;
}


export function privateOfficeCSS1() {
  let css = `
  .productDetailsImg {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .productDetailsImg img {
    width: 17vw;
    height: 70vh;
  }

  .productBasketDescription {
    display:flex;
    flex-direction:column;
  }

  .productDetailsDescription:nth-child(n) {
    margin-left:40px;
    margin-top:40px;

  }

  `;
  return css;
}

export function privateOfficeCSS2() {
  let css = ``;
  return css;
}
