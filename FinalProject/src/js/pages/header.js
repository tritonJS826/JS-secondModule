import {currentUser} from '../scripts/currentUser.js';
import {modalWindow} from '../scripts/modalWindow';


export function headerHTML() {
  let html = `
  <header class="myHeader">
      <div class="leftSideHeader">
        <!--<div class="links"><img src=""><a href="#">ЭКСКЛЮЗИВНЫЕ ТУРЫ</a></div>-->
        <div class="links navKey" id="goods"><a href="#">Товары</a></div>


        <div class="links navKey" id="news"><a href="#">Новости</a></div>
        <div class="links navKey" id="aboutUs"><a href="#">О КОМПАНИИ</a></div>
      </div>
      <div class="logoHeader navKey" id="home"><img src="./images/logo.png"></div>
      <div class="rightSideHeader">
        <!--<div class="links" id="reviews"><a href="#">ОТЗЫВЫ</a></div>-->
        <div class="links navKey" id="signIn"><a href="#">SignIn/SignUp</a></div>
        <div class="links navKey" id="privateOffice"><a href="#">Личный кабинет</a></div>
        <div class="links navKey" id="basket"><a href="#"><img class="iconBasket" src="./images/basket.png"></a></div>
      </div>

      <button id="myBtn">Техподдержка</button>
      <div id="myModal" class="modal">
      <div class="modal-content">
        <span id="close">&times;</span>
        <p id="chatHistory">Молчание -- знак согласия</p>
        <input type="text" placeholder="введите сообщение" id="messageText"></input>
        <button id="chatSendMessage">Отправить сообщение</button>
      </div>

      </div>
  </header>


    <div class="wrapper "> <!-- gamburger -->
      <input type="checkbox" id="check-menu">
      <label for="check-menu">МЕНЮ</label>
      <div class="burger-line first"></div>
      <div class="burger-line second"></div>
      <div class="burger-line third"></div>
      <div class="burger-line fourth"></div>
        <nav class="main-menu">
          <a class="link" href="#">???</a>
          <a class="link" href="#">Главная</a>
          <a class="link" href="#">Товары</a>
          <a class="link" href="#">Блог компании</a>
          <a class="link" href="#">Вход/регистрация(кабинет)</a>
          <a class="link" href="#">Корзина</a>
          <a class="link" href="#">Поиск</a>
        </nav>
    </div>
    `;
  return html;
}


export function headerCSS1() {
  let css =  `


header {
  margin-right:auto;
  margin-left:auto;
}

.myHeader {
  display: flex;
  flex-flow: row;
  width: 100%;
  font-weight: bold;
  font-size: 8pt;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  opacity: 0.85;
  margin-right:1200px;
}

.myHeader a {
text-decoration: none; /* Отменяем подчеркивание у ссылки */
font-size:1.2vw;
}

.leftSideHeader {
  display: flex;
  flex-flow: row;
  width: 45%;
  height: 20%;
  font-weight: bold;
  font-size: 8pt;
  text-decoration: none;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
  padding-bottom: 20px;
  margin-top: 3%;
  border-bottom: 2px solid blue;
}

.logoHeader {
  display: flex;
  flex-flow: row;
  width: 10%;
  font-weight: bold;
  font-size: 8pt;
}

.rightSideHeader {
  display: flex;
  flex-flow: row;
  width: 45%;
  height: 20%;
  font-weight: bold;
  font-size: 8pt;
  justify-content: space-around;
  align-items: center;
  margin: 0px;
  margin-left: 10px;
  margin-top: 3%;
  padding-bottom: 20px;
  border-bottom: 2px solid blue;
}


#myBtn {
  display:block;
  position:fixed;
  border-radius: 50px;
  bottom:10%;
  right:5%;
  height: 10%;
  border: solid 1px green;
  background:lightgreen;
}

#myBtn:hover {
  background:green;
  color:white;
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 5; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: black; /* Fallback color */
  background-color: black; /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid blue;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
#close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

#close:hover,
#close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/*
#chatButton {
 display:block;
 position: fixed;
 right: 5%;
 bottom:7em;
 opcity:0.8;
}

#chatWindow {
  display:block;
  position:fixed;
  margin-top:10%;
  margin-left:20%;
  background:red;
  z-index: 3;
  opacity: 2;
  width:50%;
  height:60%;
}*/

.chatBottom {
  display: block;
  background-color:blue;
  margin-bottom: 0px;
}




.wrapper {
  display: none;
  margin: 0;
  width: 320px;
  background-color: blue;
  position: relative;
  height: 40px;
  color: white;
  text-align: center;
}

#check-menu {
  display: none;
}

label {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
  line-height: 40px;
}

.burger-line {
  position: absolute;
  top: 8px;
  right: 10px;
  width: 35px;
  height: 2px;
  background-color: white;
  transition: 0.5s all;
}

.second {
  top : 18px;
}

.third {
  top : 18px;
}

.fourth {
  top: 28px;
}

.main-menu {
  display: block;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  max-height: 0;
  font-size: 0;
  overflow: hidden;
  transition: .5s all;
}

.link {
  display: block;
  width: 100%;
  padding: 10px;
  color: white;
  background-color: blue;
  border-top: 1px solid grey;
}

#check-menu:checked ~ .main-menu {
  max-height: 500px;
  font-size: 16px;
}

#check-menu:checked ~ .first {
  display: none;
}

#check-menu:checked ~ .second {
  transform: rotate(45deg);
}

#check-menu:checked ~ .third {
  transform: rotate(-45deg);
}

#check-menu:checked ~ .fourth {
  display: none;
}


/* настольные компьютеры и ноутбуки */
@media (min-width: 1224px) and (max-width: 10000px) {
  header {
    display: flex;
    width: 1220px;
}
  .wrapper {
    display: none;
}
}
  `;
  return css;
}

export function headerCSS2() {
  let css = `

  body {
    background-color: rgba(20,20,20,1);
    color: white;
  }



  a {
  text-decoration: none; /* Отменяем подчеркивание у ссылки */
  font-size:1.2vw;
  }

  header {
    display: flex;
    flex-flow: row;
    width: 100%;
    font-weight: bold;
    font-size: 8pt;
    margin-left: auto;
    margin-right: auto;

  }

  .leftSideHeader {
    display: flex;
    flex-flow: row;
    width: 45%;
    height: 20%;
    font-weight: bold;
    font-size: 8pt;
    text-decoration: none;
    justify-content: space-around;
    align-items: center;
    margin-right: 10px;
    padding-bottom: 20px;
    margin-top: 3%;
    border-bottom: 2px solid blue;
  }

  .logoHeader {
    display: flex;
    flex-flow: row;
    width: 10%;
    font-weight: bold;
    font-size: 8pt;
  }

  .rightSideHeader {
    display: flex;
    flex-flow: row;
    width: 45%;
    height: 20%;
    font-weight: bold;
    font-size: 8pt;
    justify-content: space-around;
    align-items: center;
    margin: 0px;
    margin-left: 10px;
    margin-top: 3%;
    padding-bottom: 20px;
    border-bottom: 2px solid blue;
  }


  .wrapper {
    display: none;
    margin: 0;
    width: 320px;
    background-color: blue;
    position: relative;
    height: 40px;
    color: white;
    text-align: center;
  }

  #check-menu {
    display: none;
  }

  label {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 2;
    line-height: 40px;
  }

  .burger-line {
    position: absolute;
    top: 8px;
    right: 10px;
    width: 35px;
    height: 2px;
    background-color: white;
    transition: 0.5s all;
  }

  .second {
    top : 18px;
  }

  .third {
    top : 18px;
  }

  .fourth {
    top: 28px;
  }

  .main-menu {
    display: block;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    max-height: 0;
    font-size: 0;
    overflow: hidden;
    transition: .5s all;
  }

  .link {
    display: block;
    width: 100%;
    padding: 10px;
    color: white;
    background-color: blue;
    border-top: 1px solid grey;
  }

  #check-menu:checked ~ .main-menu {
    max-height: 500px;
    font-size: 16px;
  }

  #check-menu:checked ~ .first {
    display: none;
  }

  #check-menu:checked ~ .second {
    transform: rotate(45deg);
  }

  #check-menu:checked ~ .third {
    transform: rotate(-45deg);
  }

  #check-menu:checked ~ .fourth {
    display: none;
  }


  /* Смартфоны */
  @media (max-width: 480px) {
    header {display: none;}
    .wrapper {display: block; width:100%;}
  }

  /* iPads*/
  @media (min-width: 481px) and (max-width: 1223px){
    header {
      display: flex;
      width: 100%;
      margin-top: 2%;
  }
    .leftSideHeader {
      flex-flow: row;
      flex-wrap: wrap;
      margin-left: 2%;
      margin-right: 2%;
      width: 40%;
      height: 10vh;
      line-height: 1.5;
  }
    .rightSideHeader {
      flex-flow: row;
      flex-wrap: wrap;
      margin-left: 2%;
      margin-right: 2%;
      width: 40%;
      height: 10vh;
      line-height: 1.5;
  }
    .logoHeader {
      width: 20%;
  }

    .logoHeader img {
      Width: 100%;
  }

    .wrapper {
      display: none;
  }
    .links {
      margin-top: 0;
      margin: 2%;
  }
  }

  /* настольные компьютеры и ноутбуки */
  @media (min-width: 1224px) and (max-width: 10000px) {
    header {
      display: flex;
      width: 1220px;
  }
    .wrapper {
      display: none;
  }
  }


`;
  return css;
}
