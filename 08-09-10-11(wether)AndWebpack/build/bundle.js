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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_apiRequests_weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/apiRequests/weather.js */ "./src/scripts/apiRequests/weather.js");
/* harmony import */ var _scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/tabloAndClasses.js */ "./src/scripts/tabloAndClasses.js");
/* harmony import */ var _scripts_tabloManagement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/tabloManagement.js */ "./src/scripts/tabloManagement.js");
/* harmony import */ var _scripts_apiRequests_changeBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/apiRequests/changeBackground */ "./src/scripts/apiRequests/changeBackground.js");
/* harmony import */ var _scripts_apiRequests_printHint_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/apiRequests/printHint.js */ "./src/scripts/apiRequests/printHint.js");
/* harmony import */ var _scripts_apiRequests_printHint_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_apiRequests_printHint_js__WEBPACK_IMPORTED_MODULE_4__);




 //Дальше сама суть программы
//создадим массивчик руками для разогрева

_scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].dataArray[0] = new _scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["Route"]("west", "car", "1500-12-19", "Grodno", "01:12", "2:12", "100", false);
_scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].dataArray[1] = new _scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["Route"]("east", "horse", "2500-12-19", "Mogilev", "02:20", "02:40", "200", true);
_scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].dataArray[2] = new _scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["Route"]("north", "foots", "2019-12-15", "Vitebsk", "03:30", "03:45", "300", false); //основной код
//localStorage.clear();
//загружаем основную страницу

_scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].downloadArrayFromStorage();
_scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].drawer(_scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].creatorView, 'divCreatorView');
_scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].drawer('good day! )', 'divWeather');
Object(_scripts_tabloManagement_js__WEBPACK_IMPORTED_MODULE_2__["drawTabloManagementButtons"])();
Object(_scripts_tabloManagement_js__WEBPACK_IMPORTED_MODULE_2__["tabloManagementListeners"])();
_scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].drawer(_scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].tabloView(_scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].dataArray), 'divTabloView');
_scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].addListenersOnDelBtn();
_scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].addListenersOnFavBtn(); //навешиваем всякие листенеры

document.getElementById('btnUploadArrayInStorage').addEventListener("click", _scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].uploadArrayInStorage);
document.getElementById('btnNewRoute').addEventListener("click", function () {
  _scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].addNewRoute(_scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].dataArray);
  _scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].drawer(_scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].tabloView(_scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].dataArray), 'divTabloView');
  _scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].addListenersOnDelBtn();
  _scripts_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_1__["tablo"].addListenersOnFavBtn();
}); //при смене города  инфу о погоде выводим

document.getElementById("destination").addEventListener("keyup", function () {
  Object(_scripts_apiRequests_weather_js__WEBPACK_IMPORTED_MODULE_0__["getAndPaintWether"])(document.getElementById("destination").value);
  Object(_scripts_apiRequests_changeBackground__WEBPACK_IMPORTED_MODULE_3__["changeBackgroundViaApi"])(document.getElementById("destination").value);
  Object(_scripts_apiRequests_printHint_js__WEBPACK_IMPORTED_MODULE_4__["printHint"])();
});

/***/ }),

/***/ "./src/scripts/apiRequests/changeBackground.js":
/*!*****************************************************!*\
  !*** ./src/scripts/apiRequests/changeBackground.js ***!
  \*****************************************************/
/*! exports provided: changeBackgroundViaApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeBackgroundViaApi", function() { return changeBackgroundViaApi; });
/* harmony import */ var _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tabloAndClasses.js */ "./src/scripts/tabloAndClasses.js");

async function changeBackgroundViaApi(destinationText) {
  //как перезаписать эту функцию в функциональном стиле???
  // console.log('APIChangeBackgroundIsRuning');
  // const response =await fetch(`https://api.flickr.com/services/rest?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags=${destinationText}&format=json&jsoncallback= `);
  // //const myJson = await response.json();
  // console.log(response.url);
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags=${destinationText}&per_page=10&page=1&format=json&nojsoncallback=1`).then(function (response) {
    return response.json();
  }).then(function (j) {
    //alert(JSON.stringify(j));
    //console.log(j.photos.photo[1]);
    console.log('APIChangeBackgroundIsRuning');
    var srcPhotoPath = 'https://farm' + j.photos.photo[1].farm + '.staticflickr.com/' + j.photos.photo[1].server + '/' + j.photos.photo[1].id + '_' + j.photos.photo[1].secret + '.jpg';
    document.getElementById('divPictures').style.backgroundImage = `url(${srcPhotoPath})`;
  }); //let picture = j.photos.photo.map((pic) => {}
}

/***/ }),

/***/ "./src/scripts/apiRequests/printHint.js":
/*!**********************************************!*\
  !*** ./src/scripts/apiRequests/printHint.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import  {tablo} from '../tabloAndClasses.js';
//
// export async function printHint () {
//   let hintScript = `
//   <script type="text/javascript" language="javascript"
//   src="http://www.rzhunemogu.ru/widzh/RNMjsonp.js"></script>
//   <script type="text/javascript">
//   window.onload = (function() {
//     getJSONP("http://www.RzhuNeMogu.ru/Widzh/WidzhRNM.aspx?type=1", onSuccess);
//   });
//   function onSuccess(response) {
//     document.getElementById("result_1").innerHTML = response.result;
//   }</script>
//   <div id="result_1" onclick="getJSONP('http://www.RzhuNeMogu.ru/Widzh/WidzhRNM.aspx?type=1',onSuccess)">
//   </div>`;
//   tablo.drawer( hintScript, 'hints');
// }

/***/ }),

/***/ "./src/scripts/apiRequests/weather.js":
/*!********************************************!*\
  !*** ./src/scripts/apiRequests/weather.js ***!
  \********************************************/
/*! exports provided: getAndPaintWether */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAndPaintWether", function() { return getAndPaintWether; });
/* harmony import */ var _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tabloAndClasses.js */ "./src/scripts/tabloAndClasses.js");

function getAndPaintWether(cityName) {
  let key = "20631ac2d3ca1a158648dd1c8a3e141b";
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key + '&lang=ru').then(function (resp) {
    return resp.json(); // Convert data to json
  }).then(function (data) {
    console.log('APIWetherIsRunning ');
    let wetherHTML = ``;
    wetherHTML = `
       <div>
       ${data.name}<br>
       температура:  ${Math.round(data.main.temp - 273, 0)}<br>
       по ощущениям: ${Math.round(data.main.feels_like - 273, 0)}<br>
       погода: ${data.weather[0].description}<br>
       скорость ветра: ${data.wind.speed} метров в секунду
       </div>`;
    _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].drawer(wetherHTML, 'divWeather'); // document.getElementById('divWeather').innerHTML=wetherHTML;
    // console.log('drowerComplete '+ 'divWeather');
    //return  wetherHTML;
  }).catch(function () {// alert('err');
    //catch any errors
  });
}

/***/ }),

/***/ "./src/scripts/tabloAndClasses.js":
/*!****************************************!*\
  !*** ./src/scripts/tabloAndClasses.js ***!
  \****************************************/
/*! exports provided: tablo, Route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tablo", function() { return tablo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
//вся инфа и методы отрисовки -- в объекте Tablo
//информация о рейсе будет храниться в объекте ProtoClassRouts,
// а объекты будут сами лежать в массиве dataArray
//Опишем классы
let tablo = {
  'creatorView': `
  <select id="newRoute" required>
                    <option value =""disabled selected>Откуда поедем?</option>
                    <option value="Отсюда" >Отсюда</option>
                    <option value="Оттуда">Оттуда</option>
                    <option value="Вон от того">Вон от того</option>
                    <option value="Вон от этого">Вон от этого</option>
  </select>
  <select id="transportationType" required>
                    <option value =""disabled selected>На чем поедем?</option>
                    <option value="Саночки" >Саночки</option>
                    <option value="Коньки">Коньки</option>
                    <option value="На лошади">На лошади</option>
                    <option value="На оленях">На оленях</option>
  </select>
  <input type="date" placeholder="дата" id="date">
  <input type="text" placeholder="куда поедем(+погодку глянем)" id="destination" required>
  </select>
  <input type="time" placeholder="время отправления" id="departureTime">
  <input type="time" placeholder="время прибытия" id="arrivalTime">
  <input type="number" style="width:93%;" placeholder="цена за поездку" id="cost">
  <br><br><br>
  <button id="btnNewRoute">Добавить путь</button>
  <button id="btnUploadArrayInStorage">Сохранить на компьютере</button>`,
  // "HTMLText",
  'tabloView': arr => {
    let resultString = '';

    for (let i = 0; i < arr.length; i++) {
      resultString += ` <br>
        <div id = "routeId${i}" class="routeParent">
          <div class="route">${arr[i]._newRoute} </div>
          <div class="route"> ${arr[i]._transportationType} </div>
          <div class="route"> ${arr[i]._date} </div>
          <div class="route"> ${arr[i]._destination} </div>
          <div class="route"> ${arr[i]._departureTime}</div>
          <div class="route"> ${arr[i]._arrivalTime}</div>
          <div class="route"> ${arr[i]._cost} $</div>
          <!--<div class="route"> favorite:${arr[i]._favorite}</div>-->
          <div class="route"><button id="delBtn${i}">delete</button></div>
          <div class="route"><button id="favBtn${i}"> ${arr[i]._favorite}</div>
        </div>`;
    }

    return resultString; // то что вывудем в поля таблицы
  },
  'dataArray': [],
  //[] ,// в каждом элементе новый объект Route
  'drawer': (what, whereId) => {
    document.getElementById(whereId).innerHTML = what;
    console.log('drowerComplete ' + whereId);
  },
  // рисует то, что в нее положат и куда положат по id(whereId)"
  'downloadArrayFromStorage': () => {
    if (localStorage.getItem('tablo.dataArray')) {
      //alert('download');
      tablo.dataArray = JSON.parse(localStorage.getItem('tablo.dataArray'));
      console.log('downloadingComplete');
    }
  },
  //загружает dataArray from localstorage
  'uploadArrayInStorage': () => {
    alert("Сохранено!");
    let saveString = JSON.stringify(tablo.dataArray);
    localStorage.setItem('tablo.dataArray', saveString);
    console.log('uploadingComplete');
  },
  // сохраняет  dataArray in  localstorage
  'addNewRoute': () => {
    let newRoute = document.getElementById("newRoute").value;
    let transportationType = document.getElementById("transportationType").value;
    let date = document.getElementById("date").value;
    let destination = document.getElementById("destination").value;
    let departureTime = document.getElementById("departureTime").value;
    let arrivalTime = document.getElementById("arrivalTime").value;
    let cost = document.getElementById("cost").value;
    tablo.dataArray[tablo.dataArray.length] = new Route(newRoute, transportationType, date, destination, departureTime, arrivalTime, cost, true);

    if (!(newRoute && transportationType && date && destination && departureTime && arrivalTime && cost)) {
      tablo.dataArray.splice([tablo.dataArray.length - 1], 1);
    }
  },
  // читает и добавляет новый объект в массив
  'removeRoute': i => {
    alert('del' + i);
    tablo.dataArray.splice(i, 1);
    tablo.drawer(tablo.tabloView(tablo.dataArray), 'divTabloView');
    tablo.addListenersOnDelBtn();
    tablo.addListenersOnFavBtn();
    console.log('removeRouteComplete');
  },
  //удаляет путь из массива и со страницы
  'favoriteRoute': i => {
    if (tablo.dataArray[i]._favorite) {
      tablo.dataArray[i]._favorite = false;
    } else {
      tablo.dataArray[i]._favorite = true;
    }

    tablo.drawer(tablo.tabloView(tablo.dataArray), 'divTabloView');
    tablo.addListenersOnDelBtn();
    tablo.addListenersOnFavBtn();
  },
  'addListenersOnDelBtn': () => {
    for (let i = 0; i < tablo.dataArray.length; i++) {
      document.getElementById("delBtn" + i).addEventListener("click", function () {
        tablo.removeRoute(i);
      });
    }
  },
  'addListenersOnFavBtn': () => {
    for (let i = 0; i < tablo.dataArray.length; i++) {
      document.getElementById("favBtn" + i).addEventListener("click", function () {
        tablo.favoriteRoute(i);
      });
    }
  }
};
class Route {
  constructor(newRoute, transportationType, date, destination, departureTime, arrivalTime, cost, favorite) {
    this.newRoute = newRoute, this.transportationType = transportationType;
    this.date = date;
    this.destination = destination;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
    this.cost = cost;
    this.favorite = false;
  }

  get newRoute() {
    return this._newRoute;
  }

  set newRoute(value) {
    if (value.length == 0) {
      alert('заполните поле "Откуда поедем"');
      return;
    }

    this._newRoute = value;
  }

  get transportationType() {
    return this._transportationType;
  }

  set transportationType(value) {
    if (value.length == 0) {
      alert('заполните поле "способ перевозки"');
      return;
    }

    this._transportationType = value;
  }

  get date() {
    return this._date;
  }

  set date(value) {
    if (value.length == 0) {
      alert('заполните поле "дата"');
      return;
    }

    this._date = value;
  }

  get destination() {
    return this._destination;
  }

  set destination(value) {
    if (value.length == 0) {
      alert('заполните поле "пункт назначения"');
      return;
    }

    this._destination = value;
  }

  get departureTime() {
    return this._departureTime;
  }

  set departureTime(value) {
    if (value.length == 0) {
      alert('заполните поле "время отправления"');
      return;
    }

    this._departureTime = value;
  }

  get arrivalTime() {
    return this._arrivalTime;
  }

  set arrivalTime(value) {
    if (value.length == 0) {
      alert('заполните поле "время прибытия"');
      return;
    }

    this._arrivalTime = value;
  }

  get cost() {
    return this._cost;
  }

  set cost(value) {
    if (value.length == 0) {
      alert('заполните поле "стоимость"');
      return;
    }

    this._cost = value;
  }

  get favorite() {
    return this._favorite;
  }

  set favorite(value) {
    if (value !== true && value !== false) {
      alert('error(favorite)');
      return;
    }

    this._favorite = value;
  }

}

/***/ }),

/***/ "./src/scripts/tabloManagement.js":
/*!****************************************!*\
  !*** ./src/scripts/tabloManagement.js ***!
  \****************************************/
/*! exports provided: drawTabloManagementButtons, tabloManagementListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawTabloManagementButtons", function() { return drawTabloManagementButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabloManagementListeners", function() { return tabloManagementListeners; });
/* harmony import */ var _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabloAndClasses.js */ "./src/scripts/tabloAndClasses.js");

function drawTabloManagementButtons() {
  document.getElementById('tabloManagement').innerHTML = `
  <button name="mainTablo" class="tabloManagement">Главное табло</button>
  <button name="waiting" class="tabloManagement">Ждут отправления</button>
  <button name="departure" class="tabloManagement">Отправленные</button>
  <button name="favourite" class="tabloManagement">Избранное</button>
`;
  document.getElementById('tabloManagement').style.cssText = `
  background-color : rgba(250,250,150,0.2);
  display : flex;
  flex-direction : row;
  justify-content : space-around;
  align-items : center;
  //border-style : solid;
  width : 100%;
  min-height : 20%;
  align-self : flex-start;
  margin-top: 10px;
  //flex:0 0 15%;`;
  console.log('drawTabloManagementButtons Complete');
}
function tabloManagementListeners() {
  let buttons = document.querySelectorAll('.tabloManagement');
  buttons.forEach(elem => elem.addEventListener('click', event => {
    const {
      target
    } = event;
    let date = new Date();
    let workingArr = [];

    switch (target.name) {
      case 'mainTablo':
        _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].drawer(_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].tabloView(_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].dataArray), 'divTabloView');
        _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].addListenersOnDelBtn();
        _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].addListenersOnFavBtn();
        break;

      case 'waiting':
        //date = new Date;
        //elemDate = new Date(`${elem.data}  'T' ${elem.departureTime}`);
        _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].dataArray.forEach(elem => {
          if (new Date(`${elem._date}T${elem._departureTime}`) > date) {
            // console.log(elem.data);
            workingArr.push(elem);
          }
        });
        _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].drawer(_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].tabloView(workingArr), 'divTabloView');
        _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].addListenersOnDelBtn();
        _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].addListenersOnFavBtn();
        break;

      case 'departure':
        //date = new Date;
        //elemDate = new Date(`${elem.data}  'T' ${elem.departureTime}`);
        _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].dataArray.forEach(elem => {
          if (new Date(`${elem._date}T${elem._departureTime}`) < date) {
            // console.log(elem.data);
            workingArr.push(elem);
          }
        });
        _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].drawer(_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].tabloView(workingArr), 'divTabloView');
        _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].addListenersOnDelBtn();
        _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].addListenersOnFavBtn();
        break;

      case 'favourite':
        //console.log(tablo.dataArray[0]['_favorite']);
        _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].dataArray.forEach(elem => {
          if (elem['_favorite']) {
            workingArr.push(elem); //console.log(workingArr);
          }
        });
        _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].drawer(_tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].tabloView(workingArr), 'divTabloView');
        _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].addListenersOnDelBtn();
        _tabloAndClasses_js__WEBPACK_IMPORTED_MODULE_0__["tablo"].addListenersOnFavBtn();
        break;

      default:
        alert('listenerNotFound');
    }
  }));
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map