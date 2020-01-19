import {drawer} from './js/scripts/drawer.js'; //отрисовывает HTML 1ого аргумента в элемент с id второго
//import {navigation} from './js/scripts/navigation.js'; //управляет логикой перехода между страницами
import {settings} from './js/scripts/bdSettings.js';// настройки внешнего вида и языка
//import {action} from './js/scripts/action.js';
import {rebootListeners} from './js/scripts/rebootListeners.js';
import {Ant} from './js/scripts/antCarousel';
import {timerHTML} from './js/scripts/timerHTML.js';
import {modalWindow} from './js/scripts/modalWindow.js'


//рисуем нашу главную страницу
drawer(settings.style[settings.style.mode].headerHTML,settings.style[settings.style.mode].headerCSS, "header");
drawer(settings.style[settings.style.mode].sidebarHTML,settings.style[settings.style.mode].sidebarCSS, "sidebar");
drawer(settings.style[settings.style.mode].homeHTML,settings.style[settings.style.mode].homeCSS,"pages");
drawer(settings.style[settings.style.mode].footerHTML,settings.style[settings.style.mode].footerCSS, "footer");



new Ant("first"); //создаем объект первой карусели
new Ant("second"); //создаем объект второй карусели

timerHTML("","Jan 5, 2021 15:37:25","timerAnt1"); //запустим таймеры во второй каруселе
timerHTML("","Jan 5, 2021 15:37:25","timerAnt2"); //запустим таймеры во второй каруселе
timerHTML("","Jan 5, 2021 15:37:25","timerAnt3"); //запустим таймеры во второй каруселе
timerHTML("","Jan 5, 2021 15:37:25","timerAnt4"); //запустим таймеры во второй каруселе
timerHTML("","Jan 5, 2021 15:37:25","timerAnt5"); //запустим таймеры во второй каруселе

modalWindow();

rebootListeners();
