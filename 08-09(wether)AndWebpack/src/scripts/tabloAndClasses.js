//вся инфа и методы отрисовки -- в объекте Tablo
//информация о рейсе будет храниться в объекте ProtoClassRouts,
// а объекты будут сами лежать в массиве dataArray
//Опишем классы

export let tablo = {
  'creatorView':`
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
  <button id="btnUploadArrayInStorage">Сохранить на компьютере</button>`,// "HTMLText",

  'tabloView': (arr) => {

    let resultString = '';
    for (let i=0;i<arr.length;i++){
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
        </div>`
    }
    return resultString; // то что вывудем в поля таблицы
  },

  'dataArray': [],//[] ,// в каждом элементе новый объект Route

  'drawer': (what,whereId) => {
    document.getElementById(whereId).innerHTML=what;
    console.log('drowerComplete '+ whereId);
  }, // рисует то, что в нее положат и куда положат по id(whereId)"

  'downloadArrayFromStorage': () => {
    if(localStorage.getItem('tablo.dataArray')){
      //alert('download');
      tablo.dataArray = JSON.parse(localStorage.getItem('tablo.dataArray'));
      console.log('downloadingComplete');
    }
  },//загружает dataArray from localstorage

  'uploadArrayInStorage': () => {
    alert("Сохранено!");
    let saveString = JSON.stringify(tablo.dataArray);
    localStorage.setItem('tablo.dataArray', saveString);
    console.log('uploadingComplete');
  },// сохраняет  dataArray in  localstorage

  'addNewRoute': () => {
    newRoute=document.getElementById("newRoute").value;
    transportationType=document.getElementById("transportationType").value;
    date=document.getElementById("date").value;
    destination=document.getElementById("destination").value;
    departureTime=document.getElementById("departureTime").value;
    arrivalTime=document.getElementById("arrivalTime").value;
    cost=document.getElementById("cost").value;
    tablo.dataArray[tablo.dataArray.length] = new Route(newRoute, transportationType, date, destination, departureTime, arrivalTime, cost,true)
    if (!(newRoute && transportationType && date && destination && departureTime && arrivalTime && cost )) {
      tablo.dataArray.splice([tablo.dataArray.length-1],1);
    }

  }, // читает и добавляет новый объект в массив

  'removeRoute': (i) => {
    alert('del'+i);
    tablo.dataArray.splice(i,1);
    tablo.drawer(tablo.tabloView(tablo.dataArray), 'divTabloView');
    tablo.addListenersOnDelBtn();
    tablo.addListenersOnFavBtn();
    console.log('removeRouteComplete');
  },//удаляет путь из массива и со страницы

  'favoriteRoute': (i) => {
    if (tablo.dataArray[i]._favorite){
      tablo.dataArray[i]._favorite=false;
    } else {
      tablo.dataArray[i]._favorite=true;
    };
    tablo.drawer(tablo.tabloView(tablo.dataArray), 'divTabloView');
    tablo.addListenersOnDelBtn();
    tablo.addListenersOnFavBtn();

  },

  'addListenersOnDelBtn':() => {
      for (let i=0;i<tablo.dataArray.length;i++){
        document.getElementById("delBtn"+i).addEventListener("click", function (){tablo.removeRoute(i)});
      }
  },

  'addListenersOnFavBtn':()=>{
    for (let i=0;i<tablo.dataArray.length;i++){
      document.getElementById("favBtn"+i).addEventListener("click", function () {tablo.favoriteRoute(i)});
    }
  }
}



export class Route {
  constructor(newRoute, transportationType, date, destination, departureTime, arrivalTime, cost,favorite) {
     this.newRoute = newRoute,
     this.transportationType = transportationType;
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
    if (value !== true && value !== false){
      alert('error(favorite)');
      return;
    }
    this._favorite = value;
  }
}
