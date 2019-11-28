//Описание функций и базовых объектов

function information() {
  alert('Добро пожаловать, шериф! Здесь собрана информация о самых опасных ' +
  'преступниках дикого запада. На главной странице сводка основной информации.'+
  '\n\n'+
  'При нажатии на имя бандита вы можете получить более детальную информацию о нем.');
  alert('Ясное дело, мир не стоит на месте и все время появляются новые '+
  'головорезы, только успевай их ловить!'+
  '\n\nЕсли узнаете о появлении нового негодяя (или о том что информация об'+' одном из них устарела) -- '+
  ' внесите информацию о нем в базу нажав кнопку "Добавить нового бандита" и '+
  'отправьте ее, нажав на кнопку "Оповестить других шерифов".\n\n'+
  'Для изменения информации о конкретном разыскиваемом нажмите "редактировать". '+
  'Если парень уже отдыхает на небесах или просто исправился, нажмите "удалить" '+
  'для полного удаления информации о нем. \n\n');
}

function createNewBandit(arrBandits) {
  //возвращает объект-бандит созданный в div id ="createNew"
  //let type = document.getElementById(?????????????).value;
  let firstName = document.getElementById("textFirstName").value;
  let secondName = document.getElementById("textSecondName").value;
  let nickName = document.getElementById("textNickName").value;
  let weapon = document.getElementById("textWeapon").value;
  let age = document.getElementById("textAge").value;
  let award = document.getElementById("textAward").value;
  let location =document.getElementById("textLocation").value;
  let danger =document.getElementById("textDanger").value;

  document.getElementById("mainMenu").addEventListener("click",function() {
    display("info");
  });
  document.getElementById("createBandit").addEventListener("click", function() {
    printInfo(arrBandits);
    display("info");
    alert("Теперь о новом подлеце узнают другие шерифы");
  });

}

function editBandit(i){
  //редактирует данные о выбранном бандите
  alert("edit this bandit " +i);
}

function deleteBandit(i,arrBandits) {
  //удаляет информацию о выбранном бандите в массиве и с сайта
  alert("delete this bandit "+ i);
  arrBandits.splice(i,1);
  printInfo(arrBandits);
  display("info");

}

function printDetailedInfo(i){
  //отрисовывает на сайте детальную информацию о выбранном бандите в div detailedInfo
  document.getElementById("mainMenu2").addEventListener("click",function() {
    display("info");
  });
}

function printInfo(arrBandits) {
  //отрисовывает на сайте общую информацию о всех бандитах в div info
  let form = document.getElementById("info").getElementsByTagName("form");
  form[0].innerHTML='<br>';
  //'ВЕРХНЯЯ СТРОЧКА ТАБЛИЦЫ В ВИДЕ HTML';
  form[0].innerHTML+='<div class="divGorizontal">'+
    '<div class="divGorizontalElem strong">Имя</div>'+
    '<div class="divGorizontalElem strong">Фамилия</div>'+
    '<div class="divGorizontalElem strong">Возраст</div>'+
    '<div class="divGorizontalElem strong">Оружие</div>'+
    '<div class="divGorizontalElem strong">Локация</div>'+
    '<div class="divGorizontalElem strong"></div>'+
    '<div class="divGorizontalElem strong"></div>'+
    '</div>';

  for (let i=0; i<arrBandits.length; i++) {
    //каждый новый i -- строчка о бандите

    form[0].innerHTML+='<div class="divGorizontal">'+
      '<div class="divGorizontalElem " id="details'+i+'">'+arrBandits[i].firstName+'</div>'+
      '<div class="divGorizontalElem ">'+arrBandits[i].secondName+'</div>'+
      '<div class="divGorizontalElem ">'+arrBandits[i].age+'</div>'+
      '<div class="divGorizontalElem ">'+arrBandits[i].weapon+'</div>'+
      '<div class="divGorizontalElem ">'+arrBandits[i].location+'</div>'+
      '<div class="divGorizontalElem " id="edit'+i+'">Редактировать</div>'+
      '<div class="divGorizontalElem " id="remove'+i+'">Удалить</div>'+
      '</div>';
  }
  form[0].innerHTML+='<br>';
  form[0].innerHTML+='<br>'+
  '<input type="button" id="newBanditButton" value="Добавить нового бандита">';

  //навесим листенеры

  for (let i=0;i<arrBandits.length;i++){
    let edit='edit'+i;
    let remove='remove'+i;
    let details='details'+i;
    document.getElementById(edit).style.color="blue";
    document.getElementById(remove).style.color="red";
    document.getElementById(details).style.color="green";

    document.getElementById(details).addEventListener("click",function(){
      printDetailedInfo(i,arrBandits);
      display("detailedInfo");
    });

    document.getElementById(edit).addEventListener("click",function(){
      editBandit(i,arrBandits);
    });
    document.getElementById(remove).addEventListener("click",function(){
      deleteBandit(i,arrBandits);
    });
  }
  document.getElementById("newBanditButton").addEventListener("click",function(){
    createNewBandit(arrBandits);
    display("createNew");
  })
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


information();
//создадим парочку объектов чтоб было что на странице показать
let bandit1 = new ProtoClassKiller("Billy","John","HardFist","Fists",32,5000,"Minsk","orange");
arrBandits.push(bandit1);
let bandit2 = new ProtoClassThief("Jimmy","Jake","MetalHead","Knife",20,7000,"Mogilev","red");
arrBandits.push(bandit2);
let bandit3 = new ProtoClassThief("Willy","Jim","CrazyEye","Revolver",28,13000,"Orlean","red");
arrBandits.push(bandit3);
let bandit4 = new ProtoClassThief("Kimmy","Cake","Buddy","Rifle",24,18000,"San-francisco","red");
arrBandits.push(bandit4);
display("info");
printInfo(arrBandits);



//стартовая страница готова, теперь развесим листенеры
//чтоб на кнопки можно было понажимать


/*listeners
  при нажатии на имя бандита (высвечивание детальной информации)
  при нажатии на кнопку редактировать
  при нажатии на кнопку удалить
  при нажатии на кнопку главное меню (высвечивание общей информации)
  при нажатии на кнопку редактировать (высвечивание меню редактирования)
*/
