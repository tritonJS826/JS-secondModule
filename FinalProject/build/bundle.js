/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/pages/footer.js":
/*!********************************!*\
  !*** ./src/js/pages/footer.js ***!
  \********************************/
/*! exports provided: footerHTML, footerCSS1, footerCSS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerHTML", function() { return footerHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerCSS1", function() { return footerCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerCSS2", function() { return footerCSS2; });
function footerHTML() {
  let html = `
  <footer>
  <div class="afterFooter">
    <div class="rights">
      <p>Носколяндия  &#8212; агенство по подбору носков.<br>
      &#169; Все права защищены</p>
    </div>
    <div class="socialIcons">
      <div class="img"><img src="./images/socks1.png"></div>
      <div class="img"><img src="./images/socks2.png"></div>
      <div class="img"><img src="./images/socks3.png"></div>
      <div class="img"><img src="./images/socks4.png"></div>
    </div>
    <div class="nothing"></div>
    <div class="iconsAndText">
      <div class="img"><img src="./images/phone.png"></div>
      <p>Заказать звонок</p>
      <div class="img"><img src="./images/phone.png"></div>
      <p>Написать нам</p>
    </div>
    <div class="basket">
    <div class="img"><img src="./images/basket.png"></div>
      <div class="number">
      </div>
      <div class="number2">
        <p>+375 29 000-00-00</p>
        <p>+375 29 000-00-00</p>
      </div>
    </div>
  </div>


<!-- footer for screen < 780px -->
  <div class="rights600px">
    <p>Роял-Холидэй &#8212; агенство элитного отдыха.<br>
    &#169; Все права защищены</p>
  </div>
  </footer>


  `;
  return html;
}
function footerCSS1() {
  let css = `
    footer {
    display: flex;
    flex-flow: row;
    height: 20%;
    font-weight: bold;
    font-size: 8pt;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
    top:200px;
}

.afterFooter {
display: flex;
flex-flow: row;
width: 100%;
justify-content: space-around;
padding-top: 1%;
margin-left: auto;
margin-right: auto;
}

.rights {
display: flex;
flex-flow: column;
width: 20%;
text-align: left;
padding-left: 2%;
font-size: 7pt;
}

.socialIcons {
display: flex;
flex-flow: row;
width: 20%;
justify-content: space-around;
align-items: flex-start;
padding-top: 1%;
}

.img img {
width:30px;
height: 30px;
}

.nothing {
display: flex;
width: 10%;
}

.iconsAndText {
display: flex;
flex-flow: row;
width: 20%;
justify-content: space-around;
align-items: center;
font-size: 8pt;
margin: 0px;
}

.basket {
display: flex;
flex-flow: row;
width: 20%;
padding-top: 1%;
}

.imgNearPhone {
display: flex;
flex-flow: row;
align-items: center;
justify-content: center;
}

.number {
display: flex;
flex-flow: column;
padding-left: 5%;
padding-right: 5%;
font-size: 7pt;
line-height: 0;
}

.number2 {
display: flex;
flex-flow: column;
padding-left: 5%;
border-left: 1px solid grey;
line-height: 0;
font-size: 7pt;
}

.rights600px {
display: none;
width: 100%;
height: 40px;
background-color: blue;
font-size: 7pt;
color: white;
text-align: center;
padding-top: 2px;
}


/* Смартфоны */
@media (min-width: 320px) {
footer {display: none;}
.afterFooter {display: none;}
.rights600px {display: block; }
}

/* iPads*/
@media (min-width: 780px) and (max-width: 1223px){
footer {display: flex; }
.afterFooter {display: none;}
.rights600px {display: none; }
}

/* настольные компьютеры и ноутбуки */
@media (min-width: 1224px) {
footer {display: flex; width: 1220px;}
.afterFooter {display: flex; width: 1220px;}
.rights600px {display: none;}
}
  `;
  return css;
}
function footerCSS2() {
  let css = `

  footer {
  display: flex;
  flex-flow: row;
  height: 20%;
  font-weight: bold;
  font-size: 8pt;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
  top:200px;
}

.afterFooter {
display: flex;
flex-flow: row;
width: 100%;
justify-content: space-around;
padding-top: 1%;
margin-left: auto;
margin-right: auto;
}

.rights {
display: flex;
flex-flow: column;
width: 20%;
text-align: left;
padding-left: 2%;
font-size: 7pt;
}

.socialIcons {
display: flex;
flex-flow: row;
width: 20%;
justify-content: space-around;
align-items: flex-start;
padding-top: 1%;
}

.img img {
width:30px;
height: 30px;
}

.nothing {
display: flex;
width: 10%;
}

.iconsAndText {
display: flex;
flex-flow: row;
width: 20%;
justify-content: space-around;
align-items: center;
font-size: 8pt;
margin: 0px;
}

.basket {
display: flex;
flex-flow: row;
width: 20%;
padding-top: 1%;
}

.imgNearPhone {
display: flex;
flex-flow: row;
align-items: center;
justify-content: center;
}

.number {
display: flex;
flex-flow: column;
padding-left: 5%;
padding-right: 5%;
font-size: 7pt;
line-height: 0;
}

.number2 {
display: flex;
flex-flow: column;
padding-left: 5%;
border-left: 1px solid grey;
line-height: 0;
font-size: 7pt;
}

.rights600px {
display: none;
width: 100%;
height: 40px;
background-color: blue;
font-size: 7pt;
color: white;
text-align: center;
padding-top: 2px;
}


/* Смартфоны */
@media (min-width: 320px) {
footer {display: none;}
.afterFooter {display: none;}
.rights600px {display: block; }
}

/* iPads*/
@media (min-width: 780px) and (max-width: 1223px){
footer {display: flex; }
.afterFooter {display: none;}
.rights600px {display: none; }
}

/* настольные компьютеры и ноутбуки */
@media (min-width: 1224px) {
footer {display: flex; width: 1220px;}
.afterFooter {display: flex; width: 1220px;}
.rights600px {display: none;}
}

  `;
  return css;
}

/***/ }),

/***/ "./src/js/pages/header.js":
/*!********************************!*\
  !*** ./src/js/pages/header.js ***!
  \********************************/
/*! exports provided: headerHTML, headerCSS1, headerCSS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerHTML", function() { return headerHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerCSS1", function() { return headerCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerCSS2", function() { return headerCSS2; });
/* harmony import */ var _scripts_currentUser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/currentUser.js */ "./src/js/scripts/currentUser.js");

function headerHTML() {
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
function headerCSS1() {
  let css = `

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
  background-color: white;
  opacity: 0.85;
  border-bottom: solid 1px black;

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
function headerCSS2() {
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

/***/ }),

/***/ "./src/js/pages/home.js":
/*!******************************!*\
  !*** ./src/js/pages/home.js ***!
  \******************************/
/*! exports provided: homeHTML, homeCSS1, homeCSS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeHTML", function() { return homeHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeCSS1", function() { return homeCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeCSS2", function() { return homeCSS2; });
function homeHTML() {
  let html = `
  <div class="myPages">
  <h3> Добро пожаловать в носколяндию</h3>

  <div>
    <h4> Карусель с парой товаров <h4>

    <div class="owl-carousel">
        <div> Your Content </div>
        <div> Your Content </div>
        <div> Your Content </div>
        <div> Your Content </div>
        <div> Your Content </div>
        <div> Your Content </div>
        <div> Your Content </div>
    </div>

  </div>

  <div><h4>Карусель с акционными товарами</h4></div>

    <h3>Блок с двумя колонками текста(flex-row)</h3>
    <div class="description">
    <div>  <h4>Блок с первой колонкой текста</h4>
        первая колонка первая колонка первая колонка первая колонка
        первая колонка первая колонка первая колонка первая колонка
        первая колонка первая колонка первая колонка первая колонка
        первая колонка первая колонка первая колонка первая колонка </div>
    <div><h4>Блок со второй колонкой текста</h4>
        вторая колонка вторая колонка вторая колонка вторая колонка
        вторая колонка вторая колонка вторая колонка вторая колонка
        вторая колонка вторая колонка вторая колонка вторая колонка
        вторая колонка вторая колонка вторая колонка вторая колонка</div>
  </div>

  <div class="advantages">
    <h3>Текст о достоинствах компании</h3>
    <div>
      Первое достоинство Первое достоинство Первое достоинство
      Первое достоинство Первое достоинство Первое достоинство
    </div>
    <div>
       Второе достоинство Второе достоинство Второе достоинство
       Второе достоинство Второе достоинство Второе достоинство
       Второе достоинство Второе достоинство Второе достоинство
    </div>
    <div>
      Третье достоинство Третье достоинство Третье достоинство
      Третье достоинство Третье достоинство Третье достоинство
      Третье достоинство Третье достоинство Третье достоинство
    </div>


  </div>
  </div>

  `;
  return html;
}
function homeCSS1() {
  let css = `
     #myPages {
       display:flex;
       flex-direction: column;
       flex-grow:6;
       flex-wrap: nowrap;
       align-self: flex-end;
       padding-left: 20px;
       max-width:600px;
     }


    #myPages .description {
      display:flex;
      flex-direction:row;


    }

     #myPages  .description > div {
      width:45%;
      margin:2%;
      flex-wrap:wrap;
      text-align: center;
    }

    #myPages  .advantages {
      display:flex;
      flex-direction:column;
      margin:2%;
    }

    #myPages .advantages  div {
      margin-top:1%;
    }


  `;
  return css;
}
function homeCSS2() {
  let css = ``;
  return css;
}

/***/ }),

/***/ "./src/js/pages/mainBlock/aboutUs.js":
/*!*******************************************!*\
  !*** ./src/js/pages/mainBlock/aboutUs.js ***!
  \*******************************************/
/*! exports provided: aboutUsHTML, aboutUsCSS1, aboutUsCSS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutUsHTML", function() { return aboutUsHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutUsCSS1", function() { return aboutUsCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutUsCSS2", function() { return aboutUsCSS2; });
function aboutUsHTML() {
  let html = `

  <text class="breadcrumbs"><a class="navKey" href="#" id="home2">Главное Меню</a><a>>О компании</a></text>


  <h1> Носколяндия -- ваш выбор</h1>
  <!--карта гугла-->
  <h2>Наши контакты</h2>
  <div class="contacts">
    <text>Контакты- блок1</text>
    <text>Контакты- блок2</text>
    <text>Контакты- блок3</text>
    <text>Контакты- блок4</text>
  </div>
  <h2>Тут карта гугла</h2>
  <div class="map"></div>

  <h2>Чем мы занимаемся?</h2>
  <div>Всякими хорошими вещами и Всякими хорошими вещами и Всякими хорошими вещами и
  Всякими хорошими вещами и Всякими хорошими вещами и Всякими хорошими вещами и
  Всякими хорошими вещами и Всякими хорошими вещами и Всякими хорошими вещами и
  Всякими хорошими вещами и Всякими хорошими вещами и Всякими хорошими вещами и
  Всякими хорошими вещами и Всякими хорошими вещами и Всякими хорошими вещами и
  <div>
  `;
  return html;
}
function aboutUsCSS1() {
  let html = `
  #map {
       height: 30vh;
       width: 80vw;
     }

  .contacts {
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:space-around;
    align-items: center;
  }

  .contacts:nth-child(n) {
    margin: auto;
    width: 80vw;
    height: 40vh;
    margin: 100px;
  }
  .contacts:nth-child(3){
    background-color:grey;
  }


  `;
  return html;
}
function aboutUsCSS2() {
  let html = ``;
  return html;
}

/***/ }),

/***/ "./src/js/pages/mainBlock/basket.js":
/*!******************************************!*\
  !*** ./src/js/pages/mainBlock/basket.js ***!
  \******************************************/
/*! exports provided: basketHTML, basketCSS1, basketCSS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basketHTML", function() { return basketHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basketCSS1", function() { return basketCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basketCSS2", function() { return basketCSS2; });
function basketHTML() {
  let html = `<h1> hi, i'm basket</h1>`;
  return html;
}
function basketCSS1() {
  let html = `
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
  return html;
}
function basketCSS2() {
  let html = ``;
  return html;
}

/***/ }),

/***/ "./src/js/pages/mainBlock/goods.js":
/*!*****************************************!*\
  !*** ./src/js/pages/mainBlock/goods.js ***!
  \*****************************************/
/*! exports provided: goodsHTML, goodsCSS1, goodsCSS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goodsHTML", function() { return goodsHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goodsCSS1", function() { return goodsCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goodsCSS2", function() { return goodsCSS2; });
/* harmony import */ var _scripts_getProductsHTML_Filtered_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scripts/getProductsHTML_Filtered.js */ "./src/js/scripts/getProductsHTML_Filtered.js");
/* harmony import */ var _scripts_filterSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scripts/filterSettings.js */ "./src/js/scripts/filterSettings.js");


function goodsHTML() {
  let productsHTML_Filtered = Object(_scripts_getProductsHTML_Filtered_js__WEBPACK_IMPORTED_MODULE_0__["getProductsHTML_Filtered"])(_scripts_filterSettings_js__WEBPACK_IMPORTED_MODULE_1__["filterSettings"].dataBase, _scripts_filterSettings_js__WEBPACK_IMPORTED_MODULE_1__["filterSettings"].category, _scripts_filterSettings_js__WEBPACK_IMPORTED_MODULE_1__["filterSettings"].minPrice, _scripts_filterSettings_js__WEBPACK_IMPORTED_MODULE_1__["filterSettings"].maxPrice, _scripts_filterSettings_js__WEBPACK_IMPORTED_MODULE_1__["filterSettings"].manufacturer, _scripts_filterSettings_js__WEBPACK_IMPORTED_MODULE_1__["filterSettings"].size, _scripts_filterSettings_js__WEBPACK_IMPORTED_MODULE_1__["filterSettings"].color, _scripts_filterSettings_js__WEBPACK_IMPORTED_MODULE_1__["filterSettings"].firstLast);
  let html = `
  <h1> Мы рады предложить вам следующие товары</h1>
    <div class="container-productsHTML">
    </div>

    ${productsHTML_Filtered}

  `;
  return html;
}
function goodsCSS1() {
  let css = `
    .unit {
      display:flex;
      flex-direction: row;
      wrap:nowrap;
      margin: 2%;
      background-color: blueyellow;
      z-index:2;
    }

    #pages img {
      max-height:200px;
      width:200px;
      margin:1%;
    }

  `;
  return css;
}
function goodsCSS2() {
  let css = `
  .unit {
    display:flex;
    flex-direction: row;
    wrap:nowrap;
    margin: 2%;
    background-color: blueyellow;
    z-index:2;
  }

  #pages img {
    max-height:200px;
    width:200px;
    margin:1%;
  }

  `;
  return css;
}

/***/ }),

/***/ "./src/js/pages/mainBlock/infoAboutThisGood.js":
/*!*****************************************************!*\
  !*** ./src/js/pages/mainBlock/infoAboutThisGood.js ***!
  \*****************************************************/
/*! exports provided: infoAboutThisGoodHTML, infoAboutThisGoodCSS1, infoAboutThisGoodCSS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoAboutThisGoodHTML", function() { return infoAboutThisGoodHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoAboutThisGoodCSS1", function() { return infoAboutThisGoodCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoAboutThisGoodCSS2", function() { return infoAboutThisGoodCSS2; });
function infoAboutThisGoodHTML() {
  let html = `<h1> hi, i'm infoAboutThisGood</h1>`;
  return html;
}
function infoAboutThisGoodCSS1() {
  let css = `
    .productDetailsImg {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .productDetailsImg img {
      width: 17vw;
      height: 40vh;
    }

    .productDetailsDescription {
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
function infoAboutThisGoodCSS2() {
  let css = ``;
  return css;
}

/***/ }),

/***/ "./src/js/pages/mainBlock/news.js":
/*!****************************************!*\
  !*** ./src/js/pages/mainBlock/news.js ***!
  \****************************************/
/*! exports provided: newsHTML, newsCSS1, newsCSS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsHTML", function() { return newsHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsCSS1", function() { return newsCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsCSS2", function() { return newsCSS2; });
function newsHTML() {
  let html = `

  <text class="breadcrumbs"><a class="navKey" href="#" id="home2">Главное Меню</a><a>>Новости</a></text>


  <h1> hi i'm news</h1>
  `;
  return html;
}
function newsCSS1() {
  let css = ``;
  return css;
}
function newsCSS2() {
  let css = ``;
  return css;
}

/***/ }),

/***/ "./src/js/pages/mainBlock/privateOffice.js":
/*!*************************************************!*\
  !*** ./src/js/pages/mainBlock/privateOffice.js ***!
  \*************************************************/
/*! exports provided: privateOfficeHTML, privateOfficeCSS1, privateOfficeCSS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "privateOfficeHTML", function() { return privateOfficeHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "privateOfficeCSS1", function() { return privateOfficeCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "privateOfficeCSS2", function() { return privateOfficeCSS2; });
/* harmony import */ var _scripts_currentUser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scripts/currentUser.js */ "./src/js/scripts/currentUser.js");
/* harmony import */ var _scripts_dbUsers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scripts/dbUsers.js */ "./src/js/scripts/dbUsers.js");


function privateOfficeHTML() {
  let html = `
  <text class="breadcrumbs"><a class="navKey" href="#" id="home2">Главное Меню</a><a>>Личный кабинет</a></text>


   <h1> Добро пожаловать!</h1>
   <div class="links navKey" id="settings"><a href="#">Настройки</a></div>



  `;
  return html;
}
function privateOfficeCSS1() {
  let css = ``;
  return css;
}
function privateOfficeCSS2() {
  let css = ``;
  return css;
}

/***/ }),

/***/ "./src/js/pages/mainBlock/reviews.js":
/*!*******************************************!*\
  !*** ./src/js/pages/mainBlock/reviews.js ***!
  \*******************************************/
/*! exports provided: reviewsHTML, reviewsCSS1, reviewsCSS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewsHTML", function() { return reviewsHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewsCSS1", function() { return reviewsCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewsCSS2", function() { return reviewsCSS2; });
function reviewsHTML() {
  let html = `<h1> hi i'm reviews</h1>`;
  return html;
}
function reviewsCSS1() {
  let css = ``;
  return css;
}
function reviewsCSS2() {
  let css = ``;
  return css;
}

/***/ }),

/***/ "./src/js/pages/mainBlock/settings.js":
/*!********************************************!*\
  !*** ./src/js/pages/mainBlock/settings.js ***!
  \********************************************/
/*! exports provided: settingsHTML, settingsCSS1, settingsCSS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsHTML", function() { return settingsHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsCSS1", function() { return settingsCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsCSS2", function() { return settingsCSS2; });
function settingsHTML() {
  let html = `

  <text class="breadcrumbs"><a class="navKey" href="#" id="home2">Главное Меню</a><a class="navKey" href="#" id="privateOffice2">>Личный кабинет</a><a>>Настройки</a></text>


  <h1> Настройки</h1>
  <div id="settingsPage">
    <div id="settingsLanguageDiv">
      <h3>Язык:</h3>
      <select id="language" required>
                    <option value ="ru">Русский</option>
                    <option value="en" >English</option>
      </select>
    </div>



    <div id="settingsStyleDiv">
      <h3>Оформление:</h3>
      <select id="styleMode" required>
                    <option value="light" >Светлая тема</option>
                    <option value ="dark">Темная тема</option>
      </select>
    </div>

    <button class="actKey navKey" id="applySettingsButton">Применить настройки</button>
  </div>
  `;
  return html;
}
function settingsCSS1() {
  let html = `

  #settingsPage {
    display:flex;
    flex-direction:column;
    margin-left:15%;

  }

  #settingsLanguageDiv, #settingsStyleDiv {
    display:flex;
    flex-direction:row;
    align-items:center;
  }

  #settingsLanguageDiv h3 {
    margin-right:5%;
  }

  #settingsStyleDiv h3 {
    margin-right:5%;

  }
  #settingsStyleDiv select {
    min-width:150px;
  }

  `;
  return html;
}
function settingsCSS2() {
  let html = `


  #settingsPage {
    display:flex;
    flex-direction:column;
    margin-left:15%;
  }

  #settingsLanguageDiv, #settingsStyleDiv {
    display:flex;
    flex-direction:row;
    align-items:center;
  }

  #settingsLanguageDiv h3 {
    margin-right:5%;
  }

  #settingsStyleDiv h3 {
    margin-right:5%;

  }
  #settingsStyleDiv select {
    min-width:150px;
  }




  `;
  return html;
}

/***/ }),

/***/ "./src/js/pages/mainBlock/signIn.js":
/*!******************************************!*\
  !*** ./src/js/pages/mainBlock/signIn.js ***!
  \******************************************/
/*! exports provided: signInHTML, signInCSS1, signInCSS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInHTML", function() { return signInHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInCSS1", function() { return signInCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInCSS2", function() { return signInCSS2; });
function signInHTML() {
  let html = `

  <text class="breadcrumbs"><a class="navKey" href="#" id="home2">Главное Меню</a><a>>Регистрация</a></text>

    <h1>hi i'm signIn</h1>
    <h3>Введите имя пользователя:<h3>
    <input type="text" id="userName"></input>
    <h3>Введите пароль:</h3>
    <input type="text" id="userPassword"></input>
    <h3>Нажмите кнопку зарегестрироваться для перехода в личный кабинет:</h3>
    <button class="navKey actKey" id="authorisation">Зарегистрироваться</button>
  `;
  return html;
}
function signInCSS1() {
  let css = `

  `;
  return css;
}
function signInCSS2() {
  let css = ``;
  return css;
}

/***/ }),

/***/ "./src/js/pages/mainBlock/signUp.js":
/*!******************************************!*\
  !*** ./src/js/pages/mainBlock/signUp.js ***!
  \******************************************/
/*! exports provided: signUpHTML, signUpCSS1, signUpCSS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpHTML", function() { return signUpHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpCSS1", function() { return signUpCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpCSS2", function() { return signUpCSS2; });
function signUpHTML() {
  let html = `<h1> hi i'm signUp</h1>`;
  return html;
}
function signUpCSS1() {
  let html = ``;
  return html;
}
function signUpCSS2() {
  let html = ``;
  return html;
}

/***/ }),

/***/ "./src/js/pages/sidebar.js":
/*!*********************************!*\
  !*** ./src/js/pages/sidebar.js ***!
  \*********************************/
/*! exports provided: sidebarHTML, sidebarCSS1, sidebarCSS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarHTML", function() { return sidebarHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarCSS1", function() { return sidebarCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarCSS2", function() { return sidebarCSS2; });
function sidebarHTML() {
  let html = `

      <h2>Поиск</h2>
      <input  class="searchItem" id="searchText" type="text" placeholder="поиск с учетом регистра" ></input><br>
      <button  class="searchItem navKey actKey" id="searchKey">Искать</button>
      <br>
      <h2>Фильтр</h2>
      <h3>Категория:</h3>
      <select id="filterCategory" required>
                    <option value ="all">все категории</option>
                    <option value ="socks">носки</option>
                    <option value="gloves" >перчатки</option>
                    <option value="hats">шляпы</option>
      </select>
      <h3>Сначала:</h3>
      <select id="filterFirstLast" required>
                    <option value ="withoutFilter">без фильтра</option>
                    <option value="firstCheap" >сначала дешевые</option>
                    <option value="firstExpensive">сначала дорогие</option>
                    <option value="firstPopular">сначала популярные</option>
                    <option value="firstUnPopular">сначала непопулярные</option>
      </select>
      <h3>Диапазон цен</h3>
      <input  class="" id="minPrice" type="number" placeholder="от" ></input>
      <input  class="" id="maxPrice" type="number" placeholder="до" ></input>
      <h3>Страна производитель</h3>
      <select id="filterManufactured" required>
                    <option value ="all">Все</option>
                    <option value="Россия" >Россия</option>
                    <option value="Беларусь">Беларусь</option>
                    <option value="Англия">Англия</option>
      </select>
      <h3>Размер</h3>
      <select id="filterSize" required>
                    <option value ="all">Все</option>
                    <option value="L" >L</option>
                    <option value="M">M</option>
                    <option value="XL">XL</option>
      </select>
      <h3>Цвет</h3>
      <select id="filterColor" required>
                    <option value ="all">Все</option>
                    <option value="blue">Синий</option>
                    <option value="red">Красный</option>
                    <option value="black">Черный</option>
      </select>
      <button class="navKey actKey" id="filterKey">Применить фильтры</button>

   `;
  return html;
}
function sidebarCSS1() {
  let css = `

  sidebar {
    margin-top: 50px;
    max-width:29vw;
    display:flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: flex-start;
    border-left: solid 1px rgba(31, 140, 223, 1);


  }

  sidebar :nth-child(1n+0) {
    margin-left:3%;
    margin-bottom: 2%;
  }


  `;
  return css;
}
function sidebarCSS2() {
  let css = ``;
  return css;
}

/***/ }),

/***/ "./src/js/scripts/action.js":
/*!**********************************!*\
  !*** ./src/js/scripts/action.js ***!
  \**********************************/
/*! exports provided: actKeys, action, actionFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actKeys", function() { return actKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionFunc", function() { return actionFunc; });
/* harmony import */ var _bdSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bdSettings.js */ "./src/js/scripts/bdSettings.js");
/* harmony import */ var _drawer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer.js */ "./src/js/scripts/drawer.js");
/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.js */ "./src/js/scripts/navigation.js");
/* harmony import */ var _pages_header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/header.js */ "./src/js/pages/header.js");
/* harmony import */ var _rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rebootListeners.js */ "./src/js/scripts/rebootListeners.js");
/* harmony import */ var _filterSettings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filterSettings.js */ "./src/js/scripts/filterSettings.js");
/* harmony import */ var _getProductsHTML_Filtered_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getProductsHTML_Filtered.js */ "./src/js/scripts/getProductsHTML_Filtered.js");
/* harmony import */ var _getProductsHtml_Searched_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getProductsHtml_Searched.js */ "./src/js/scripts/getProductsHtml_Searched.js");
/* harmony import */ var _classUser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classUser.js */ "./src/js/scripts/classUser.js");
/* harmony import */ var _dbUsers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dbUsers.js */ "./src/js/scripts/dbUsers.js");
/* harmony import */ var _currentUser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./currentUser.js */ "./src/js/scripts/currentUser.js");
/* harmony import */ var _bdGoods_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bdGoods.js */ "./src/js/scripts/bdGoods.js");
/* harmony import */ var _getProductDetailsHTML_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getProductDetailsHTML.js */ "./src/js/scripts/getProductDetailsHTML.js");
/* harmony import */ var _getBasketHTML_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getBasketHTML.js */ "./src/js/scripts/getBasketHTML.js");
/* harmony import */ var _getCurrentPrivateOfficeHTML_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./getCurrentPrivateOfficeHTML.js */ "./src/js/scripts/getCurrentPrivateOfficeHTML.js");















const actKeys = document.getElementsByClassName('actKey');
function action() {
  for (let key of actKeys) {
    key.addEventListener("click", actionFunc, key);
  }
}
function actionFunc(e) {
  console.log(`actionFunc listen ` + e.currentTarget.id);

  switch (e.currentTarget.id) {
    case "applySettingsButton":
      _bdSettings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].style.mode = document.getElementById('styleMode').value;
      console.log(_bdSettings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].style.mode);
      break;

    case "authorisation":
      //тупо добавляет без проверки на повторяемость пользователя и на совпадение пароля
      const newUser = new _classUser_js__WEBPACK_IMPORTED_MODULE_8__["User"]('none', document.getElementById('userName').value, document.getElementById('userPassword').value);
      _dbUsers_js__WEBPACK_IMPORTED_MODULE_9__["dbUsers"].push(newUser); //добавили в базу данных

      _currentUser_js__WEBPACK_IMPORTED_MODULE_10__["currentUser"].name = newUser.name;
      _currentUser_js__WEBPACK_IMPORTED_MODULE_10__["currentUser"].password = newUser.password;
      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_1__["drawer"])(Object(_getCurrentPrivateOfficeHTML_js__WEBPACK_IMPORTED_MODULE_14__["getCurrentPrivateOfficeHTML"])(_currentUser_js__WEBPACK_IMPORTED_MODULE_10__["currentUser"].name), _bdSettings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].style.mode].privateOfficeCSS, "pages");
      Object(_rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__["rebootListeners"])();
      break;

    case "filterKey":
      //получение данных фильтра
      _filterSettings_js__WEBPACK_IMPORTED_MODULE_5__["filterSettings"].category = document.getElementById('filterCategory').value;
      _filterSettings_js__WEBPACK_IMPORTED_MODULE_5__["filterSettings"].firstLast = document.getElementById('filterFirstLast').value;
      _filterSettings_js__WEBPACK_IMPORTED_MODULE_5__["filterSettings"].minPrice = document.getElementById('minPrice').value;
      _filterSettings_js__WEBPACK_IMPORTED_MODULE_5__["filterSettings"].maxPrice = document.getElementById('maxPrice').value;
      _filterSettings_js__WEBPACK_IMPORTED_MODULE_5__["filterSettings"].manufacturer = document.getElementById('filterManufactured').value;
      _filterSettings_js__WEBPACK_IMPORTED_MODULE_5__["filterSettings"].size = document.getElementById('filterSize').value;
      _filterSettings_js__WEBPACK_IMPORTED_MODULE_5__["filterSettings"].color = document.getElementById('filterColor').value;
      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_1__["drawer"])(Object(_getProductsHTML_Filtered_js__WEBPACK_IMPORTED_MODULE_6__["getProductsHTML_Filtered"])(_filterSettings_js__WEBPACK_IMPORTED_MODULE_5__["filterSettings"].dataBase, _filterSettings_js__WEBPACK_IMPORTED_MODULE_5__["filterSettings"].category, _filterSettings_js__WEBPACK_IMPORTED_MODULE_5__["filterSettings"].minPrice, _filterSettings_js__WEBPACK_IMPORTED_MODULE_5__["filterSettings"].maxPrice, _filterSettings_js__WEBPACK_IMPORTED_MODULE_5__["filterSettings"].manufacturer, _filterSettings_js__WEBPACK_IMPORTED_MODULE_5__["filterSettings"].size, _filterSettings_js__WEBPACK_IMPORTED_MODULE_5__["filterSettings"].color, _filterSettings_js__WEBPACK_IMPORTED_MODULE_5__["filterSettings"].firstLast), _bdSettings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].style.mode].goodsCSS, "pages");
      break;

    case "searchKey":
      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_1__["drawer"])(Object(_getProductsHtml_Searched_js__WEBPACK_IMPORTED_MODULE_7__["getProductsHtml_Searched"])(), _bdSettings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].style.mode].goodsCSS, "pages");
      console.log("getProductsHtml_Searched Complete");
      break;

    case "addComment":
      let id = document.getElementById('productId').innerHTML;
      _bdGoods_js__WEBPACK_IMPORTED_MODULE_11__["bdGoods"][Number(id) - 1].comments += `<br><text class="comment">${document.getElementById('commentText').value}</text> `; //alert(bdGoods[Number(id)-1].id);

      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_1__["drawer"])(Object(_getProductDetailsHTML_js__WEBPACK_IMPORTED_MODULE_12__["productDetailsHTML"])(_bdGoods_js__WEBPACK_IMPORTED_MODULE_11__["bdGoods"], Number(id)), _bdSettings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].style.mode].infoAboutThisGoodCSS, "pages");
      Object(_rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__["rebootListeners"])();
      console.log("comment added");
      break;

    default:
      /*немного регулярных выражений */

      /*для productId..AddTobasket*/
      if (e.currentTarget.id.search('AddToBasket') != "-1") {
        let id = e.currentTarget.id.replace("product", "");
        id = id.replace('AddToBasket', "");
        _currentUser_js__WEBPACK_IMPORTED_MODULE_10__["currentUser"].basket.push(_bdGoods_js__WEBPACK_IMPORTED_MODULE_11__["bdGoods"][Number(id) - 1]);
        console.log(`product ${id} Added to basket`);
        break;
      }
      /*для deleteFromBasket..*/


      if (e.currentTarget.id.search('delete') != "-1") {
        let delId = e.currentTarget.id.replace("deleteFromBasket", "");
        delId = delId.replace('AddToBasket', "");
        _currentUser_js__WEBPACK_IMPORTED_MODULE_10__["currentUser"].basket.splice(Number(delId), 1);
        Object(_drawer_js__WEBPACK_IMPORTED_MODULE_1__["drawer"])(Object(_getBasketHTML_js__WEBPACK_IMPORTED_MODULE_13__["getBasketHTML"])(), _bdSettings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].style.mode].basketCSS, "pages");
        Object(_rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__["rebootListeners"])();
        console.log(`product ${delId} deleted from basket`);
        break;
      }

  }
}
;

/***/ }),

/***/ "./src/js/scripts/bdGoods.js":
/*!***********************************!*\
  !*** ./src/js/scripts/bdGoods.js ***!
  \***********************************/
/*! exports provided: bdGoods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bdGoods", function() { return bdGoods; });
//база данных  в виде массива
const bdGoods = [{
  name: "superSocks1",
  price: 6,
  size: "XL",
  color: "red",
  manufacturer: "Беларусь",
  srcImg: "./images/socks1.png",
  description: "Первоклассные носки из Беларуси",
  rating: 0,
  comments: "",
  id: 1,
  category: "socks"
}, {
  name: "Socks1",
  price: 12.3,
  size: "XXL",
  color: "blue",
  manufacturer: "Россия",
  srcImg: "./images/socks2.png",
  description: "Первоклассные носки из России",
  rating: 0,
  comments: "",
  id: 2,
  category: "socks"
}, {
  name: "superSocks2",
  price: 3.5,
  size: "M",
  color: "red",
  manufacturer: "Беларусь",
  srcImg: "./images/socks3.png",
  description: "Суперские носки ",
  rating: 0,
  comments: "",
  id: 3,
  category: "socks"
}, {
  name: "superSocks3",
  price: 13,
  size: "XL",
  color: "black",
  manufacturer: "Беларусь",
  srcImg: "./images/socks4.png",
  description: "Первоклассные носки из Беларуси",
  rating: 0,
  comments: "",
  id: 4,
  category: "socks"
}, {
  name: "Socks1",
  price: 11,
  size: "XL",
  color: "white",
  manufacturer: "Россия",
  srcImg: "./images/socks5.png",
  description: "Первоклассные носки из России",
  rating: 0,
  comments: "",
  id: 5,
  category: "socks"
}, {
  name: "superSocks17",
  price: 100500,
  size: "XL",
  color: "red",
  manufacturer: "Беларусь",
  srcImg: "./images/socks6.png",
  description: "Первоклассные носки из Беларуси",
  rating: 0,
  comments: "",
  id: 6,
  category: "socks"
}, {
  name: "superSocks23",
  price: 15,
  size: "XL",
  color: "red",
  manufacturer: "Англия",
  srcImg: "./images/socks7.png",
  description: "Первоклассные носки из Англии",
  rating: 0,
  comments: "",
  id: 7,
  category: "socks"
}, {
  name: "superGloves",
  price: 15,
  size: "XL",
  color: "red",
  manufacturer: "Англия",
  srcImg: "./images/gloves1.jpg",
  description: "Первоклассные перчатки из Англии",
  rating: 0,
  comments: "",
  id: 8,
  category: "gloves"
}, {
  name: "superSocks23",
  price: 15,
  size: "XL",
  color: "red",
  manufacturer: "Англия",
  srcImg: "./images/gloves2.jpg",
  description: "Первоклассные перчатки из Англии",
  rating: 0,
  comments: "",
  id: 9,
  category: "gloves"
}, {
  name: "superGloves23",
  price: 15,
  size: "XL",
  color: "red",
  manufacturer: "Англия",
  srcImg: "./images/gloves3.jpeg",
  description: "Первоклассные перчатки из Англии",
  rating: 0,
  comments: "",
  id: 10,
  category: "gloves"
}, {
  name: "Gloves323",
  price: 125,
  size: "XL",
  color: "black",
  manufacturer: "Англия",
  srcImg: "./images/gloves4.jpg",
  description: "Первоклассные перчатки из Англии",
  rating: 0,
  comments: "",
  id: 11,
  category: "gloves"
}, {
  name: "Gloves",
  price: 5,
  size: "XL",
  color: "blue",
  manufacturer: "Англия",
  srcImg: "./images/gloves5.jpg",
  description: "Первоклассные перчатки из Англии",
  rating: 0,
  comments: "",
  id: 12,
  category: "gloves"
}, {
  name: "superGloves",
  price: 2125,
  size: "XL",
  color: "black",
  manufacturer: "Англия",
  srcImg: "./images/gloves6.jpg",
  description: "Первоклассные перчатки из Англии",
  rating: 0,
  comments: "",
  id: 13,
  category: "gloves"
}, {
  name: "superHat23",
  price: 11235,
  size: "XL",
  color: "red",
  manufacturer: "Англия",
  srcImg: "./images/hat1.jpg",
  description: "Первоклассные шляпы из Англии",
  rating: 0,
  comments: "",
  id: 14,
  category: "hats"
}, {
  name: "superHat23",
  price: 1565,
  size: "XL",
  color: "red",
  manufacturer: "Англия",
  srcImg: "./images/hat2.jpg",
  description: "Первоклассные шляпы из Англии",
  rating: 0,
  comments: "",
  id: 15,
  category: "hats"
}, {
  name: "Hat23",
  price: 15,
  size: "XL",
  color: "red",
  manufacturer: "Англия",
  srcImg: "./images/hat3.jpg",
  description: "Первоклассные шляпы из Англии",
  rating: 0,
  comments: "",
  id: 16,
  category: "hats"
}, {
  name: "SuperHat123",
  price: 25,
  size: "XL",
  color: "red",
  manufacturer: "Англия",
  srcImg: "./images/hat4.jpg",
  description: "Первоклассные шляпы из Англии",
  rating: 0,
  comments: "",
  id: 17,
  category: "hats"
}, {
  name: "Hat23",
  price: 29,
  size: "XL",
  color: "red",
  manufacturer: "Англия",
  srcImg: "./images/hat5.jpg",
  description: "Первоклассные шляпы из Англии",
  rating: 0,
  comments: "",
  id: 18,
  category: "hats"
}, {
  name: "GoodHat",
  price: 118,
  size: "XL",
  color: "red",
  manufacturer: "Англия",
  srcImg: "./images/hat6.jpg",
  description: "Первоклассные шляпы из Англии",
  rating: 0,
  comments: "",
  id: 19,
  category: "hats"
}];

/***/ }),

/***/ "./src/js/scripts/bdSettings.js":
/*!**************************************!*\
  !*** ./src/js/scripts/bdSettings.js ***!
  \**************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _pages_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/header.js */ "./src/js/pages/header.js");
/* harmony import */ var _pages_sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/sidebar.js */ "./src/js/pages/sidebar.js");
/* harmony import */ var _pages_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/footer.js */ "./src/js/pages/footer.js");
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/home.js */ "./src/js/pages/home.js");
/* harmony import */ var _pages_mainBlock_aboutUs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/mainBlock/aboutUs.js */ "./src/js/pages/mainBlock/aboutUs.js");
/* harmony import */ var _pages_mainBlock_basket_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/mainBlock/basket.js */ "./src/js/pages/mainBlock/basket.js");
/* harmony import */ var _pages_mainBlock_goods_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/mainBlock/goods.js */ "./src/js/pages/mainBlock/goods.js");
/* harmony import */ var _pages_mainBlock_infoAboutThisGood_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/mainBlock/infoAboutThisGood.js */ "./src/js/pages/mainBlock/infoAboutThisGood.js");
/* harmony import */ var _pages_mainBlock_news_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/mainBlock/news.js */ "./src/js/pages/mainBlock/news.js");
/* harmony import */ var _pages_mainBlock_privateOffice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/mainBlock/privateOffice.js */ "./src/js/pages/mainBlock/privateOffice.js");
/* harmony import */ var _pages_mainBlock_reviews_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/mainBlock/reviews.js */ "./src/js/pages/mainBlock/reviews.js");
/* harmony import */ var _pages_mainBlock_settings_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/mainBlock/settings.js */ "./src/js/pages/mainBlock/settings.js");
/* harmony import */ var _pages_mainBlock_signIn_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/mainBlock/signIn.js */ "./src/js/pages/mainBlock/signIn.js");
/* harmony import */ var _pages_mainBlock_signUp_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/mainBlock/signUp.js */ "./src/js/pages/mainBlock/signUp.js");













 //в поле mode написано какие стили и html шаблоны будут использоваться

const settings = {
  currentUser: {
    authorisation: false,
    authorisationName: "petya",
    authorisationPassword: ""
  },
  style: {
    authorisation: false,
    authorisationName: "petya",
    authorisationPassword: "",
    languge: "ru",
    mode: "light",
    light: {
      headerHTML: Object(_pages_header_js__WEBPACK_IMPORTED_MODULE_0__["headerHTML"])(),
      headerCSS: Object(_pages_header_js__WEBPACK_IMPORTED_MODULE_0__["headerCSS1"])(),
      footerHTML: Object(_pages_footer_js__WEBPACK_IMPORTED_MODULE_2__["footerHTML"])(),
      footerCSS: Object(_pages_footer_js__WEBPACK_IMPORTED_MODULE_2__["footerCSS1"])(),
      sidebarHTML: Object(_pages_sidebar_js__WEBPACK_IMPORTED_MODULE_1__["sidebarHTML"])(),
      sidebarCSS: Object(_pages_sidebar_js__WEBPACK_IMPORTED_MODULE_1__["sidebarCSS1"])(),
      homeHTML: Object(_pages_home_js__WEBPACK_IMPORTED_MODULE_3__["homeHTML"])(),
      homeCSS: Object(_pages_home_js__WEBPACK_IMPORTED_MODULE_3__["homeCSS1"])(),
      aboutUsHTML: Object(_pages_mainBlock_aboutUs_js__WEBPACK_IMPORTED_MODULE_4__["aboutUsHTML"])(),
      aboutUsCSS: Object(_pages_mainBlock_aboutUs_js__WEBPACK_IMPORTED_MODULE_4__["aboutUsCSS1"])(),
      basketHTML: Object(_pages_mainBlock_basket_js__WEBPACK_IMPORTED_MODULE_5__["basketHTML"])(),
      basketCSS: Object(_pages_mainBlock_basket_js__WEBPACK_IMPORTED_MODULE_5__["basketCSS1"])(),
      goodsHTML: Object(_pages_mainBlock_goods_js__WEBPACK_IMPORTED_MODULE_6__["goodsHTML"])(),
      goodsCSS: Object(_pages_mainBlock_goods_js__WEBPACK_IMPORTED_MODULE_6__["goodsCSS1"])(),
      infoAboutThisGoodHTML: Object(_pages_mainBlock_infoAboutThisGood_js__WEBPACK_IMPORTED_MODULE_7__["infoAboutThisGoodHTML"])(),
      infoAboutThisGoodCSS: Object(_pages_mainBlock_infoAboutThisGood_js__WEBPACK_IMPORTED_MODULE_7__["infoAboutThisGoodCSS1"])(),
      newsHTML: Object(_pages_mainBlock_news_js__WEBPACK_IMPORTED_MODULE_8__["newsHTML"])(),
      newsCSS: Object(_pages_mainBlock_news_js__WEBPACK_IMPORTED_MODULE_8__["newsCSS1"])(),
      privateOfficeHTML: Object(_pages_mainBlock_privateOffice_js__WEBPACK_IMPORTED_MODULE_9__["privateOfficeHTML"])(name),
      privateOfficeCSS: Object(_pages_mainBlock_privateOffice_js__WEBPACK_IMPORTED_MODULE_9__["privateOfficeCSS1"])(),
      reviewsHTML: Object(_pages_mainBlock_reviews_js__WEBPACK_IMPORTED_MODULE_10__["reviewsHTML"])(),
      reviewsCSS: Object(_pages_mainBlock_reviews_js__WEBPACK_IMPORTED_MODULE_10__["reviewsCSS1"])(),
      settingsHTML: Object(_pages_mainBlock_settings_js__WEBPACK_IMPORTED_MODULE_11__["settingsHTML"])(),
      settingsCSS: Object(_pages_mainBlock_settings_js__WEBPACK_IMPORTED_MODULE_11__["settingsCSS1"])(),
      signInHTML: Object(_pages_mainBlock_signIn_js__WEBPACK_IMPORTED_MODULE_12__["signInHTML"])(),
      signInCSS: Object(_pages_mainBlock_signIn_js__WEBPACK_IMPORTED_MODULE_12__["signInCSS1"])(),
      signUpHTML: Object(_pages_mainBlock_signUp_js__WEBPACK_IMPORTED_MODULE_13__["signUpHTML"])(),
      signUpCSS: Object(_pages_mainBlock_signUp_js__WEBPACK_IMPORTED_MODULE_13__["signUpCSS1"])()
    },
    dark: {
      headerHTML: Object(_pages_header_js__WEBPACK_IMPORTED_MODULE_0__["headerHTML"])(),
      headerCSS: Object(_pages_header_js__WEBPACK_IMPORTED_MODULE_0__["headerCSS2"])(),
      footerHTML: Object(_pages_footer_js__WEBPACK_IMPORTED_MODULE_2__["footerHTML"])(),
      footerCSS: Object(_pages_footer_js__WEBPACK_IMPORTED_MODULE_2__["footerCSS2"])(),
      sidebarHTML: Object(_pages_sidebar_js__WEBPACK_IMPORTED_MODULE_1__["sidebarHTML"])(),
      sidebarCSS: Object(_pages_sidebar_js__WEBPACK_IMPORTED_MODULE_1__["sidebarCSS2"])(),
      homeHTML: Object(_pages_home_js__WEBPACK_IMPORTED_MODULE_3__["homeHTML"])(),
      homeCSS: Object(_pages_home_js__WEBPACK_IMPORTED_MODULE_3__["homeCSS2"])(),
      aboutUsHTML: Object(_pages_mainBlock_aboutUs_js__WEBPACK_IMPORTED_MODULE_4__["aboutUsHTML"])(),
      aboutUsCSS: Object(_pages_mainBlock_aboutUs_js__WEBPACK_IMPORTED_MODULE_4__["aboutUsCSS2"])(),
      basketHTML: Object(_pages_mainBlock_basket_js__WEBPACK_IMPORTED_MODULE_5__["basketHTML"])(),
      basketCSS: Object(_pages_mainBlock_basket_js__WEBPACK_IMPORTED_MODULE_5__["basketCSS2"])(),
      goodsHTML: Object(_pages_mainBlock_goods_js__WEBPACK_IMPORTED_MODULE_6__["goodsHTML"])(),
      goodsCSS: Object(_pages_mainBlock_goods_js__WEBPACK_IMPORTED_MODULE_6__["goodsCSS2"])(),
      infoAboutThisGoodHTML: Object(_pages_mainBlock_infoAboutThisGood_js__WEBPACK_IMPORTED_MODULE_7__["infoAboutThisGoodHTML"])(),
      infoAboutThisGoodCSS: Object(_pages_mainBlock_infoAboutThisGood_js__WEBPACK_IMPORTED_MODULE_7__["infoAboutThisGoodCSS2"])(),
      newsHTML: Object(_pages_mainBlock_news_js__WEBPACK_IMPORTED_MODULE_8__["newsHTML"])(),
      newsCSS: Object(_pages_mainBlock_news_js__WEBPACK_IMPORTED_MODULE_8__["newsCSS2"])(),
      privateOfficeHTML: Object(_pages_mainBlock_privateOffice_js__WEBPACK_IMPORTED_MODULE_9__["privateOfficeHTML"])(),
      privateOfficeCSS: Object(_pages_mainBlock_privateOffice_js__WEBPACK_IMPORTED_MODULE_9__["privateOfficeCSS2"])(),
      reviewsHTML: Object(_pages_mainBlock_reviews_js__WEBPACK_IMPORTED_MODULE_10__["reviewsHTML"])(),
      reviewsCSS: Object(_pages_mainBlock_reviews_js__WEBPACK_IMPORTED_MODULE_10__["reviewsCSS2"])(),
      settingsHTML: Object(_pages_mainBlock_settings_js__WEBPACK_IMPORTED_MODULE_11__["settingsHTML"])(),
      settingsCSS: Object(_pages_mainBlock_settings_js__WEBPACK_IMPORTED_MODULE_11__["settingsCSS2"])(),
      signInHTML: Object(_pages_mainBlock_signIn_js__WEBPACK_IMPORTED_MODULE_12__["signInHTML"])(),
      signInCSS: Object(_pages_mainBlock_signIn_js__WEBPACK_IMPORTED_MODULE_12__["signInCSS2"])(),
      signUpHTML: Object(_pages_mainBlock_signUp_js__WEBPACK_IMPORTED_MODULE_13__["signUpHTML"])(),
      signUpCSS: Object(_pages_mainBlock_signUp_js__WEBPACK_IMPORTED_MODULE_13__["signUpCSS2"])()
    }
  }
};

/***/ }),

/***/ "./src/js/scripts/classUser.js":
/*!*************************************!*\
  !*** ./src/js/scripts/classUser.js ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
  constructor(id, name, password) {
    this.id = id;
    this.name = name;
    this.password = password; //getUserName: () => {return document.getElementById('userName').value;},
    //getUSerPassword: () => {return document.getElementById('userPassword').value;},

    this.basket = [];
    this.bought = [];
  }

}

/***/ }),

/***/ "./src/js/scripts/currentUser.js":
/*!***************************************!*\
  !*** ./src/js/scripts/currentUser.js ***!
  \***************************************/
/*! exports provided: currentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUser", function() { return currentUser; });
/* harmony import */ var _scripts_dbUsers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/dbUsers.js */ "./src/js/scripts/dbUsers.js");

const currentUser = {
  name: _scripts_dbUsers_js__WEBPACK_IMPORTED_MODULE_0__["dbUsers"][_scripts_dbUsers_js__WEBPACK_IMPORTED_MODULE_0__["dbUsers"].length - 1].name,
  password: _scripts_dbUsers_js__WEBPACK_IMPORTED_MODULE_0__["dbUsers"][_scripts_dbUsers_js__WEBPACK_IMPORTED_MODULE_0__["dbUsers"].length - 1].password,
  basket: [],
  bought: []
};

/***/ }),

/***/ "./src/js/scripts/dbUsers.js":
/*!***********************************!*\
  !*** ./src/js/scripts/dbUsers.js ***!
  \***********************************/
/*! exports provided: dbUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbUsers", function() { return dbUsers; });
const dbUsers = [{
  id: 0,
  name: 'name',
  password: 'password',
  basket: [],
  bought: []
}];

/***/ }),

/***/ "./src/js/scripts/drawer.js":
/*!**********************************!*\
  !*** ./src/js/scripts/drawer.js ***!
  \**********************************/
/*! exports provided: drawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawer", function() { return drawer; });
//переписывает по html в блок whereId c применением css
//по сути рисует сайт по блокам
function drawer(html, css, whereId) {
  let style = document.getElementById(`${whereId}Style`);
  style.innerHTML = css;
  let block = document.getElementById(whereId);
  block.innerHTML = html; //document.head.appendChild(style);

  console.log('drowerComplete ' + whereId);
}

/***/ }),

/***/ "./src/js/scripts/filterSettings.js":
/*!******************************************!*\
  !*** ./src/js/scripts/filterSettings.js ***!
  \******************************************/
/*! exports provided: filterSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSettings", function() { return filterSettings; });
/* harmony import */ var _bdGoods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bdGoods.js */ "./src/js/scripts/bdGoods.js");

const filterSettings = {
  category: "all",
  firstLast: "withoutFilter",
  minPrice: "0",
  maxPrice: "0",
  manufacturer: "all",
  size: "all",
  color: "all",
  dataBase: _bdGoods_js__WEBPACK_IMPORTED_MODULE_0__["bdGoods"]
};

/***/ }),

/***/ "./src/js/scripts/getBasketHTML.js":
/*!*****************************************!*\
  !*** ./src/js/scripts/getBasketHTML.js ***!
  \*****************************************/
/*! exports provided: getBasketHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBasketHTML", function() { return getBasketHTML; });
/* harmony import */ var _currentUser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentUser.js */ "./src/js/scripts/currentUser.js");

let myArray = _currentUser_js__WEBPACK_IMPORTED_MODULE_0__["currentUser"].basket;
function getBasketHTML(array = myArray) {
  let wrapper = `
  <text class="breadcrumbs"><a class="navKey" href="#" id="home2">Главное Меню</a><a>>Корзина</a></text>


  <h3>Ничего нет(<h3>


    `;

  for (let i = 0; i < array.length; i++) {
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
          <button class="actKey" id="addComment">Добавить комментарий</button>
          <button class="actKey" id="deleteFromBasket${i}">Удалить из корзины</button>

          <text>Комментарии${array[i].comments}</text>
        </div>
      </div>


      `;
  }

  return wrapper;
}

/***/ }),

/***/ "./src/js/scripts/getCurrentPrivateOfficeHTML.js":
/*!*******************************************************!*\
  !*** ./src/js/scripts/getCurrentPrivateOfficeHTML.js ***!
  \*******************************************************/
/*! exports provided: getCurrentPrivateOfficeHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPrivateOfficeHTML", function() { return getCurrentPrivateOfficeHTML; });
function getCurrentPrivateOfficeHTML(name) {
  let html = `
  <h1> Добро пожаловать, ${name}!</h1>
  <div class="links navKey" id="settings"><a href="#">Настройки</a></div>

  `;
  return html;
}

/***/ }),

/***/ "./src/js/scripts/getProductDetailsHTML.js":
/*!*************************************************!*\
  !*** ./src/js/scripts/getProductDetailsHTML.js ***!
  \*************************************************/
/*! exports provided: productDetailsHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productDetailsHTML", function() { return productDetailsHTML; });
function productDetailsHTML(array, id) {
  let wrapper = `
  <text class="breadcrumbs">
    <a class="navKey" href="#" id="home2">Главное Меню</a><a href="#" class="navKey" id="goods2">>Товары</a><a>>Детали</a></text>

  `;

  for (let i = 0; i < array.length; i++) {
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

/***/ }),

/***/ "./src/js/scripts/getProductsHTML_Filtered.js":
/*!****************************************************!*\
  !*** ./src/js/scripts/getProductsHTML_Filtered.js ***!
  \****************************************************/
/*! exports provided: getProductsHTML_Filtered */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsHTML_Filtered", function() { return getProductsHTML_Filtered; });
/* harmony import */ var _bdGoods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bdGoods.js */ "./src/js/scripts/bdGoods.js");
 //функция getProductsHTML_Filtered вернет HTML наших продуктов с учетом фильтров

function getProductsHTML_Filtered(dataBaseArray = _bdGoods_js__WEBPACK_IMPORTED_MODULE_0__["bdGoods"], category = "all", minPrice = 0, maxPrice = 0, manufacturedBy = "all", size = "all", color = "all", firstCheapOrExpensiveOrPopularOrNotPopular = "withoutFilter") {
  console.log('filtered');
  let wrapper = `
  <text class="breadcrumbs"><a class="navKey" href="#" id="home2">Главное Меню</a><a>>Товары</a></text>

  `;
  let outputArray = [];
  outputArray = filterСategory(dataBaseArray, category);
  outputArray = filterMinPrice(outputArray, minPrice);
  outputArray = filterMaxPrice(outputArray, maxPrice);
  outputArray = filterManufacturedBy(outputArray, manufacturedBy);
  outputArray = filterSize(outputArray, size);
  outputArray = filterColor(outputArray, color);
  outputArray = filterFirstLast(outputArray, "withoutFilter");

  for (let i = 0; i < outputArray.length; i++) {
    wrapper += `
    <div class="unit" id="productId${outputArray[i].id}">
    <img src="${outputArray[i].srcImg}">
    <div>
      <h3>${outputArray[i].name}</h3>
      <text>${outputArray[i].description}</text>
      <br><br><br>
      <text> Стоимость: ${outputArray[i].price} $</text>
      <button class="navKey" id="product${outputArray[i].id}Details">Детали</button>
      <button class="actKey" id="product${outputArray[i].id}AddToBasket">В корзину</button>    </div>
    </div>
    `;
  }

  return `${wrapper}`;
}

function filterСategory(inputArray, category) {
  let outputArray = [];

  if (category == "all") {
    return inputArray;
  } else {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].category == category) {
        outputArray.push(inputArray[i]);
      }
    }

    return outputArray;
  }
}

function filterMinPrice(inputArray, minPrice) {
  let outputArray = [];

  if (minPrice == 0) {
    return inputArray;
  } else {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].price > minPrice) {
        outputArray.push(inputArray[i]);
      }
    }

    return outputArray;
  }
}

function filterMaxPrice(inputArray, maxPrice) {
  let outputArray = [];

  if (maxPrice == 0) {
    return inputArray;
  } else {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].price < maxPrice) {
        outputArray.push(inputArray[i]);
      }
    }

    return outputArray;
  }
}

function filterManufacturedBy(inputArray, manufacturedBy) {
  let outputArray = [];

  if (manufacturedBy == "all") {
    return inputArray;
  } else {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].manufacturer == manufacturedBy) {
        outputArray.push(inputArray[i]);
      }
    }

    return outputArray;
  }
}

function filterSize(inputArray, size) {
  let outputArray = [];

  if (size == "all") {
    return inputArray;
  } else {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].size == size) {
        outputArray.push(inputArray[i]);
      }
    }

    return outputArray;
  }
}

function filterColor(inputArray, color) {
  let outputArray = [];

  if (color == "all") {
    return inputArray;
  } else {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].color == color) {
        outputArray.push(inputArray[i]);
      }
    }

    return outputArray;
  }
}

function filterFirstLast(inputArray, firstCheapOrExpensive) {
  let outputArray = [];

  switch (firstCheapOrExpensive) {
    case "withoutFilter":
      return inputArray;
      break;

    case "firstCheap":
      outputArray = inputArray.sort(function compare(a, b) {
        if (a.price < b.price) {
          return -1;
        }

        if (a.price > b.price) {
          return 1;
        } // a должно быть равным b


        return 0;
      });
      return outputArray;
      break;

    case "firstExpensive":
      outputArray = inputArray.sort(function compare(a, b) {
        if (a.price > b.price) {
          return -1;
        }

        if (a.price < b.price) {
          return 1;
        } // a должно быть равным b


        return 0;
      });
      return outputArray;
      break;

    case "firstUnPopular":
      outputArray = inputArray.sort(function compare(a, b) {
        if (a.rating < b.rating) {
          return -1;
        }

        if (a.rating > b.rating) {
          return 1;
        } // a должно быть равным b


        return 0;
      });
      return outputArray;
      break;

    case "firstPopular":
      outputArray = inputArray.sort(function compare(a, b) {
        if (a.rating > b.rating) {
          return -1;
        }

        if (a.rating < b.rating) {
          return 1;
        } // a должно быть равным b


        return 0;
      });
      return outputArray;
      break;
  }
}

/***/ }),

/***/ "./src/js/scripts/getProductsHtml_Searched.js":
/*!****************************************************!*\
  !*** ./src/js/scripts/getProductsHtml_Searched.js ***!
  \****************************************************/
/*! exports provided: getProductsHtml_Searched */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsHtml_Searched", function() { return getProductsHtml_Searched; });
/* harmony import */ var _bdGoods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bdGoods */ "./src/js/scripts/bdGoods.js");

function getProductsHtml_Searched() {
  let wrapper = `
  <text class="breadcrumbs"><a class="navKey" href="#" id="home2">Главное Меню</a><a>>Товары</a></text>

  `;
  let input = document.getElementById("searchText").value; //получаем значение из поля в html

  if (input.length < 1) {
    wrapper = `<text>Для поиска вы должны ввести один или более символов<text>`;
    return wrapper;
  }

  if (input.length >= 1) {
    let nothing = true; //если true,то выведет -- ничего не найдено

    for (let i = 0; i < _bdGoods__WEBPACK_IMPORTED_MODULE_0__["bdGoods"].length; i++) {
      for (let key in _bdGoods__WEBPACK_IMPORTED_MODULE_0__["bdGoods"][i]) {
        if (_bdGoods__WEBPACK_IMPORTED_MODULE_0__["bdGoods"][i].name.includes(input) || _bdGoods__WEBPACK_IMPORTED_MODULE_0__["bdGoods"][i].description.includes(input)) {
          //alert(objArray[i][key] + "exist in"+ objArray[i].name);
          wrapper += `
          <div class="unit" id="productId${_bdGoods__WEBPACK_IMPORTED_MODULE_0__["bdGoods"][i].id}">
          <img src="${_bdGoods__WEBPACK_IMPORTED_MODULE_0__["bdGoods"][i].srcImg}">
          <div>
            <h3>${_bdGoods__WEBPACK_IMPORTED_MODULE_0__["bdGoods"][i].name}</h3>
            <text>${_bdGoods__WEBPACK_IMPORTED_MODULE_0__["bdGoods"][i].description}</text>
            <br><br><br>
            <text> Стоимость: ${_bdGoods__WEBPACK_IMPORTED_MODULE_0__["bdGoods"][i].price} $</text>
            <button class="navKey" id="product${_bdGoods__WEBPACK_IMPORTED_MODULE_0__["bdGoods"][i].id}Details">Детали</button>
            <button class="actKey" id="product${_bdGoods__WEBPACK_IMPORTED_MODULE_0__["bdGoods"][i].id}AddToBasket">В корзину</button>
          </div>
          </div>
          `;
          nothing = false;
          break;
        }
      }
    }

    if (nothing) {
      alert("Ничего не найдено");
      wrapper = `<text>Ничего не найдено(поиск идет с учетом регистра по названию и описанию товара)<text>`;
      return `${wrapper}`;
    } else {
      return `${wrapper}`;
    }
  }
}

/***/ }),

/***/ "./src/js/scripts/navigation.js":
/*!**************************************!*\
  !*** ./src/js/scripts/navigation.js ***!
  \**************************************/
/*! exports provided: navKeys, navigation, navigationFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navKeys", function() { return navKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationFunc", function() { return navigationFunc; });
/* harmony import */ var _drawer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer.js */ "./src/js/scripts/drawer.js");
/* harmony import */ var _bdSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bdSettings.js */ "./src/js/scripts/bdSettings.js");
/* harmony import */ var _pages_mainBlock_goods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/mainBlock/goods.js */ "./src/js/pages/mainBlock/goods.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action.js */ "./src/js/scripts/action.js");
/* harmony import */ var _rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rebootListeners.js */ "./src/js/scripts/rebootListeners.js");
/* harmony import */ var _getProductDetailsHTML_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getProductDetailsHTML.js */ "./src/js/scripts/getProductDetailsHTML.js");
/* harmony import */ var _bdGoods_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bdGoods.js */ "./src/js/scripts/bdGoods.js");
/* harmony import */ var _getBasketHTML_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getBasketHTML.js */ "./src/js/scripts/getBasketHTML.js");
//здесь описана логика появления страниц в зависимости от нажатых кнопок








const navKeys = document.getElementsByClassName('navKey');
function navigation() {
  for (let key of navKeys) {
    key.addEventListener("click", navigationFunc);
  }
} //проблема -- не вытягивается id

function navigationFunc(e) {
  console.log(`navigationFunc listen ` + e.currentTarget.id);

  switch (e.currentTarget.id) {
    case "goods":
    case "goods2":
      document.getElementById('sidebar').style.display = "";
      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].goodsHTML, _bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].goodsCSS, "pages");
      Object(_rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__["rebootListeners"])();
      break;

    case "news":
      document.getElementById('sidebar').style.display = "none";
      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].newsHTML, _bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].newsCSS, "pages");
      Object(_rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__["rebootListeners"])();
      break;

    case "aboutUs":
      document.getElementById('sidebar').style.display = "none";
      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].aboutUsHTML, _bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].aboutUsCSS, "pages");
      Object(_rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__["rebootListeners"])();
      break;

    case "home":
    case "home2":
      document.getElementById('sidebar').style.display = "";
      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].homeHTML, _bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].homeCSS, "pages");
      Object(_rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__["rebootListeners"])();
      break;

    case "signIn":
      document.getElementById('sidebar').style.display = "none";
      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].signInHTML, _bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].signInCSS, "pages");
      Object(_rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__["rebootListeners"])();
      break;

    case "signUp":
      document.getElementById('sidebar').style.display = "none";
      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].signUpHTML, _bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].signUpCSS, "pages");
      Object(_rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__["rebootListeners"])();

    case "settings":
      document.getElementById('sidebar').style.display = "none";
      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].settingsHTML, _bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].settingsCSS, "pages");
      Object(_rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__["rebootListeners"])();
      break;

    case "basket":
      document.getElementById('sidebar').style.display = ""; //drawer(settings.style[settings.style.mode].basketHTML,settings.style[settings.style.mode].basketCSS,"pages");

      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(Object(_getBasketHTML_js__WEBPACK_IMPORTED_MODULE_7__["getBasketHTML"])(), _bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].basketCSS, "pages");
      Object(_rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__["rebootListeners"])();
      break;

    case "searchKey":
      document.getElementById('sidebar').style.display = "";
      Object(_rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__["rebootListeners"])();
      break;

    case "filterKey":
      document.getElementById('sidebar').style.display = "";
      Object(_rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__["rebootListeners"])();
      break;

    case "applySettingsButton":
      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].headerHTML, _bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].headerCSS, "header");
      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].settingsHTML, _bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].settingsCSS, "pages");
      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].sidebarHTML, _bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].sidebarCSS, "sidebar");
      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].footerHTML, _bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].footerCSS, "footer");
      Object(_rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__["rebootListeners"])();
      break;

    case "privateOffice":
    case "privateOffice2":
      document.getElementById('sidebar').style.display = "none";
      Object(_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].privateOfficeHTML, _bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].privateOfficeCSS, "pages");
      Object(_rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__["rebootListeners"])();
      break;

    case "authorisation":
      // document.getElementById('sidebar').style.display="none";
      // drawer(settings.style[settings.style.mode].privateOfficeHTML,settings.style[settings.style.mode].privateOfficeCSS,"pages");
      // rebootListeners();
      break;

    default:
      //для всех кнопок с детальной информацией о товаре
      if (e.currentTarget.id.search(/productId(\d+)Details/)) {
        let id = e.currentTarget.id.replace("Details", "");
        id = id.replace('product', "");
        Object(_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(Object(_getProductDetailsHTML_js__WEBPACK_IMPORTED_MODULE_5__["productDetailsHTML"])(_bdGoods_js__WEBPACK_IMPORTED_MODULE_6__["bdGoods"], id), _bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].infoAboutThisGoodCSS, "pages");
        Object(_rebootListeners_js__WEBPACK_IMPORTED_MODULE_4__["rebootListeners"])();
      }

      break;
  }
}

/***/ }),

/***/ "./src/js/scripts/rebootListeners.js":
/*!*******************************************!*\
  !*** ./src/js/scripts/rebootListeners.js ***!
  \*******************************************/
/*! exports provided: rebootListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rebootListeners", function() { return rebootListeners; });
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action.js */ "./src/js/scripts/action.js");
/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.js */ "./src/js/scripts/navigation.js");


function rebootListeners() {
  //после того как все отрисовали снимем все листенеры
  for (let key of _navigation_js__WEBPACK_IMPORTED_MODULE_1__["navKeys"]) {
    key.removeEventListener("click", _action_js__WEBPACK_IMPORTED_MODULE_0__["actionFunc"]);
  }

  for (let key of _action_js__WEBPACK_IMPORTED_MODULE_0__["actKeys"]) {
    key.removeEventListener("click", _navigation_js__WEBPACK_IMPORTED_MODULE_1__["navigationFunc"]);
  } //и развесим заново


  Object(_action_js__WEBPACK_IMPORTED_MODULE_0__["action"])();
  Object(_navigation_js__WEBPACK_IMPORTED_MODULE_1__["navigation"])();
  console.log('rebootListeners complete');
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_scripts_drawer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/scripts/drawer.js */ "./src/js/scripts/drawer.js");
/* harmony import */ var _js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/scripts/bdSettings.js */ "./src/js/scripts/bdSettings.js");
/* harmony import */ var _js_scripts_rebootListeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/scripts/rebootListeners.js */ "./src/js/scripts/rebootListeners.js");
 //отрисовывает HTML 1ого аргумента в элемент с id второго
//import {navigation} from './js/scripts/navigation.js'; //управляет логикой перехода между страницами

 // настройки внешнего вида и языка
//import {action} from './js/scripts/action.js';

 //задаем стили

Object(_js_scripts_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(_js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].headerHTML, _js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].headerCSS, "header");
Object(_js_scripts_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(_js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].sidebarHTML, _js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].sidebarCSS, "sidebar");
Object(_js_scripts_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(_js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].homeHTML, _js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].homeCSS, "pages");
Object(_js_scripts_drawer_js__WEBPACK_IMPORTED_MODULE_0__["drawer"])(_js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].footerHTML, _js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style[_js_scripts_bdSettings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].style.mode].footerCSS, "footer");
Object(_js_scripts_rebootListeners_js__WEBPACK_IMPORTED_MODULE_2__["rebootListeners"])();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map