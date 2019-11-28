//Описание функций и базовых объектов

function information() {
  alert('Добро пожаловать, шериф! Здесь собрана информация о самых опасных ' +
  'преступниках дикого запада. На главной странице сводка основной информации.'+
  '\n\n'+
  'При нажатии на имя бандита вы можете получить более детальную информацию о нем');
  alert('Ясное дело, мир не стоит на месте и все время появляются новые '+
  'головорезы, только успевай их ловить!'+
  '\n\nЕсли узнаете о появлении нового негодяя (или о том что информация об'+' одном из них устарела)-- '+
  ' внесите информацию о нем в базу нажав кнопку "Новый клиент" и'+
  'отправьте ее нажав на кнопку "Оповестить других шерифов"\n\n'+
  'Для изменения информации о конкретном разыскиваемом нажмите "редактировать" '+
  'Если парень уже отдыхает на небесах или просто исправился нажмите "удалить" '+
  'для полного удаления информации о нем \n\n');
}

function addObjectToArray(banditsArray) {
  //добавляет бандита(объект) в массив для хранения
  //работает с div id="createNew" (на будущее)
}

function createNewBandit() {
  //возвращает объект-бандит созданный в div id ="createNew"
}

function editBandit(){
  //редактирует данные о выбранном бандите
}

function deleteBandit() {
  //удаляет информацию о выбранном бандите в массиве и с сайта
}

function printDetailedInfo(){
  //отрисовывает на сайте детальную информацию о выбранном бандите
}

function printInfo() {
  //отрисовывает на сайте общую информацию о всех бандитах
}

function display(vidibleId/*выбрать один из трех: info, detailedInfo, createNew*/) {
  //делает видимым только один нужный div
/*  case 1:
  document.getElementById("info").style.display="none";
  document.getElementById("detailedInfo").style.display="flex";
  document.getElementById("createNew").style.display="none";
  break;
  case 2:
  document.getElementById("info").style.display="none";
  document.getElementById("detailedInfo").style.display=none"";
  document.getElementById("createNew").style.display="flex";
  break;
  default :
  document.getElementById("info").style.display="flex";
  document.getElementById("detailedInfo").style.display="none";
  document.getElementById("createNew").style.display="none";*/
}

//создаем базовый класс с геттерми и сеттерами

let BaseClassBandit =  {
	firstName: "unknown",
  secondName: "unknown",
  nickName: "unknown",
  weapon: "unknown",
  age: "unknown",
  award: "unknown",
 };

//создаем наследуемые классы

let ProtoClassKiller = {
  type: "killer",
  location: "secretVillage",
  danger: "red"
}

let ProtoClassThief = {
  type: "thief",
  location: "secretTown",
  danger: "orange"
}

let arrBandits = []; // будем сюда бандитов сохранять


//Поехали, сама суть дальше))

information();
/*listeners
  при нажатии на имя бандита (высвечивание детальной информации)
  при нажатии на кнопку редактировать
  при нажатии на кнопку удалить
  при нажатии на кнопку главное меню (высвечивание общей информации)
  при нажатии на кнопку редактировать (высвечивание меню редактирования)
*/
