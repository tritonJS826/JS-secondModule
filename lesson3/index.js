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

function addObjectToArray(bandit) {
  //добавляет бандита(объект) в массив для хранения
  //работает с div id="createNew" (на будущее)
}

function createNewBandit() {
  //возвращает объект-бандит созданный в div id ="createNew"
  let firstName = document.getRlementById("textFirstName");
  let secondName = document.getRlementById("textSecondName");
  let nickName = document.getRlementById("textNickName");
  let weapon = document.getRlementById("textWeapon");
  let age = document.getRlementById("textAge");
  let award = document.getRlementById("textAward");
}

function editBandit(){
  //редактирует данные о выбранном бандите
}

function deleteBandit() {
  //удаляет информацию о выбранном бандите в массиве и с сайта
}

function printDetailedInfo(){
  //отрисовывает на сайте детальную информацию о выбранном бандите в div detailedInfo
}

function printInfo() {
  //отрисовывает на сайте общую информацию о всех бандитах в div info
}

function display(visibleId/*выбрать один из трех:"info", "detailedInfo", "createNew"*/) {
  //делает видимым только один нужный div

  switch (visibleId) {
  case "createNew":
  document.getElementById("info").style.display="none";
  document.getElementById("detailedInfo").style.display="none";
  document.getElementById("createNew").style.display="flex";
  break;
  case "detailedInfo":
  document.getElementById("info").style.display="none";
  document.getElementById("detailedInfo").style.display="flex";
  document.getElementById("createNew").style.display="none";
  break;
  case "info":
  default :
  document.getElementById("info").style.display="flex";
  document.getElementById("detailedInfo").style.display="none";
  document.getElementById("createNew").style.display="none";
  }
}

//создаем базовый класс с геттерми и сеттерами

class BaseClassBandit {
  constructor(firstName,secondName,nickName,weapon,age,award) {
	   this.firstName= firstName;
     this.secondName = secondName;
     this.nickName = nickName;
     this.weapon = weapon;
     this.age = age;
     this.award = award;
  }

  get firstName() {
      return this._firstName;
  }
  set firstName(value) {
    if (value.length == 0) {
      alert("заполните поле имя");
      return;
    }
    this._firstName = value;
  }

  get secondName() {
      return this._secondName;
  }
  set secondName(value) {
    if (value.length == 0) {
      alert("заполните поле фамилия");
      return;
    }
    this._secondName = value;
  }

  get nickName() {
      return this._nickName;
  }
  set nickName(value) {
    if (value.length == 0) {
      alert("заполните поле Погоняло");
      return;
    }
    this._nickName = value;
  }

  get weapon() {
      return this._weapon;
  }
  set weapon(value) {
    if (value.length == 0) {
      alert("заполните поле Оружие");
      return;
    }
    this._weapon = value;
  }

  get age() {
      return this._age;
  }
  set age(value) {
    if (value.length == 0) {
      alert("заполните поле возраст");
      return;
    }
    this._age = value;
  }

  get award() {
      return this._award;
  }
  set award(value) {
    if (value.length == 0) {
      alert("заполните поле награда");
      return;
    }
    this._award = value;
  }
}

//создаем наследуемые классы убийц и воров)

class ProtoClassKiller extends BaseClassBandit {
  constructor (firstName,secondName, nickName,age,weapon,award,location,danger) {
    super(firstName,secondName, nickName,age,weapon,award);
    this.type="killer";
    this.location=location;
    this.danger=danger;
  }

  get location(){
    return this._location;
  }
  set location(value){
    if (value.length == 0) {
      alert("Заполните поле локация");
      return;
    }
    this._location = value;
  }

  get danger(){
    return this._danger;
  }
  set danger(value){
    if (value.length == 0) {
      alert("Заполните поле уровень опасности");
      return;
    }
    this._danger = value;
  }

}


class ProtoClassThief extends BaseClassBandit {
  constructor(firstName,secondName,nickName,weapon,age,award,location,danger){
    super(firstName,secondName,nickName,weapon,age,award,)
    this.type="thief";
    this.location=location;
    this.danger=danger;
  }

  get location(){
    return this._location;
  }
  set location(value){
    if (value.length == 0) {
      alert("Заполните поле локация");
      return;
    }
    this._location = value;
  }

  get danger(){
    return this._danger;
  }
  set danger(value){
    if (value.length == 0) {
      alert("Заполните поле уровень опасности");
      return;
    }
    this._danger = value;
  }

}

let arrBandits = []; // будем сюда бандитов сохранять


//Поехали, сама суть дальше))
display("info");
information();

//создадим парочку объектов чтоб было что на странице показать
let bandit1 = new ProtoClassKiller("Billy","John","HardFist","Fists",32,5000,"Minsk","orange");
arrBandits.push(bandit1);
let bandit2 = new ProtoClassThief("Jimmy","Jake","MetalHead","Knife",20,7000,"Mogilev","red");
arrBandits.push(bandit2);
printInfo();

//стартовая страница готова, теперь развесим листенеры
//чтоб на кнопки можно было понажимать


/*listeners
  при нажатии на имя бандита (высвечивание детальной информации)
  при нажатии на кнопку редактировать
  при нажатии на кнопку удалить
  при нажатии на кнопку главное меню (высвечивание общей информации)
  при нажатии на кнопку редактировать (высвечивание меню редактирования)
*/
