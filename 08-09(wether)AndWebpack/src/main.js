import {getAndPaintWether} from './scripts/apiRequests/weather.js';
import  {tablo, Route } from './scripts/tabloAndClasses.js';
import {drawTabloManagementButtons, tabloManagementListeners} from './scripts/tabloManagement.js'




  //Дальше сама суть программы
  //создадим массивчик руками для разогрева
    tablo.dataArray[0] = new Route("west","car","1500-12-19","Grodno","01:12","2:12","100",false);
    tablo.dataArray[1] = new Route("east","horse","2500-12-19","Mogilev","02:20","02:40","200",true);
    tablo.dataArray[2] = new Route("north","foots","2019-12-15","Vitebsk","03:30","03:45","300",false);


  //основной код


  //localStorage.clear();
  //загружаем основную страницу
  tablo.downloadArrayFromStorage();
  tablo.drawer(tablo.creatorView, 'divCreatorView');
  tablo.drawer('good day! )', 'divWeather');
  drawTabloManagementButtons();
  tabloManagementListeners();
  tablo.drawer(tablo.tabloView(tablo.dataArray), 'divTabloView');
  tablo.addListenersOnDelBtn();
  tablo.addListenersOnFavBtn();

  //навешиваем всякие листенеры
  document.getElementById('btnUploadArrayInStorage').addEventListener("click", tablo.uploadArrayInStorage)
  document.getElementById('btnNewRoute').addEventListener("click", function(){
    tablo.addNewRoute(tablo.dataArray);
    tablo.drawer(tablo.tabloView(tablo.dataArray), 'divTabloView');
    tablo.addListenersOnDelBtn();
    tablo.addListenersOnFavBtn();
  });


  //при смене города  инфу о погоде выводим

  document.getElementById("destination").addEventListener("keyup", function (){
    getAndPaintWether(document.getElementById("destination").value);
        });
