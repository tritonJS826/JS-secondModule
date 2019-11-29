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


function editBandit(i){
  //редактирует данные о выбранном бандите
  display("createNew");
  document.getElementById("textFirstName").value=  arrBandits[i].firstName;
  document.getElementById("textSecondName").value=  arrBandits[i].secondName;
  document.getElementById("textNickName").value=  arrBandits[i].nickName;
  document.getElementById("textWeapon").value=arrBandits[i].weapon;
  document.getElementById("textAge").value=arrBandits[i].age;
  document.getElementById("textAward").value=  arrBandits[i].award;
  document.getElementById("textLocation").value=arrBandits[i].location;
  document.getElementById("textDanger").value=arrBandits[i].danger;
  deleteBandit(i,arrBandits);
  document.getElementById("mainMenu").style.display="none";

}

function deleteBandit(i,arrBandits) {
  //удаляет информацию о выбранном бандите в массиве и с сайта
  arrBandits.splice(i,1);
  printInfo(arrBandits);


}

function printDetailedInfo(i){
  //отрисовывает на сайте детальную информацию о выбранном бандите в div detailedInfo
  let form = document.getElementById("detailedInfo").getElementsByTagName("form");
  form[0].innerHTML='<br>';
  form[0].innerHTML+='<div class="detailInfo">'+
      '<div class="details">'+
        '<div class="elem">Имя</div>'+
        '<div class="elem">Фамилия</div>'+
        '<div class="elem">Кличка</div>'+
        '<div class="elem">Оружие</div>'+
        '<div class="elem">Возраст</div>'+
        '<div class="elem">Награда</div>'+
        '<div class="elem">Локация</div>'+
        '<div class="elem">Уровень опасности</div>'+
        '<div class="elem">Тип</div>'+
      '</div>'+
      '<div class="details">'+
        '<div class="elem">'+arrBandits[i].firstName+'</div>'+
        '<div class="elem">'+arrBandits[i].secondName+'</div>'+
        '<div class="elem">'+arrBandits[i].nickName+'</div>'+
        '<div class="elem">'+arrBandits[i].weapon+'</div>'+
        '<div class="elem">'+arrBandits[i].age+'</div>'+
        '<div class="elem">'+arrBandits[i].award+'</div>'+
        '<div class="elem">'+arrBandits[i].location+'</div>'+
        '<div class="elem">'+arrBandits[i].danger+'</div>'+
        '<div class="elem">'+arrBandits[i].type+'</div>'+
      '</div>'+
    '</div><br>'+
    '<input type="button" class="buttons" id="mainMenu2" value="Главное меню">';

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
  form[0].innerHTML+='<br>'+
  '<input type="button" id="newBanditButton" class="buttons" value="Добавить нового бандита">';

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
      editBandit(i);
    });
    document.getElementById(remove).addEventListener("click",function(){
      if (confirm("Вы уверены, что хотите удалить инофрмацию о " +
      arrBandits[i].firstName + " " +arrBandits[i].secondName+"?")) {
          deleteBandit(i,arrBandits);
      } else {

      }

    });
  }
  document.getElementById("newBanditButton").addEventListener("click",function(){
    display("createNew");
    document.getElementById("createBandit").style.display="";
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
//в меню создания проверим какой radio выбран и вернем его value
function checkRadio() {
    var radio=document.getElementsByName('radioBanditType');
    for (var i=0;i<radio.length; i++) {
        if (radio[i].checked) {
            return(radio[i].value);
        }
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


/*listeners*/
//окончательное создание нового бандита и добавление его на главное меню с выхлдом
//на главное меню
document.getElementById("createBandit").addEventListener("click", function() {
  document.getElementById("mainMenu").style.display="";



  let firstName = document.getElementById("textFirstName").value;
  let secondName = document.getElementById("textSecondName").value;
  let nickName = document.getElementById("textNickName").value;
  let weapon = document.getElementById("textWeapon").value;
  let age = document.getElementById("textAge").value;
  let award = document.getElementById("textAward").value;
  let location =document.getElementById("textLocation").value;
  let danger =document.getElementById("textDanger").value;
  let type = checkRadio();
  switch (type) {
    case "killer":
      arrBandits[arrBandits.length] = new ProtoClassKiller(firstName,secondName,nickName,weapon,age,award,location,danger);
      printInfo(arrBandits);
      display("info");
      alert("Теперь о подлеце узнают другие шерифы");
    break;
    case "thief":
      arrBandits[arrBandits.length] = new ProtoClassThief(firstName,secondName,nickName,weapon,age,award,location,danger);
      printInfo(arrBandits);
      display("info");
      alert("Теперь о подлеце узнают другие шерифы");
      break;
    default :
      arrBandits[arrBandits.length] = new ProtoClassThief(firstName,secondName,nickName,weapon,age,award,location,danger,type);
      printInfo(arrBandits);
      display("info");
      alert("Теперь о подлеце узнают другие шерифы");

  }

});

document.getElementById("mainMenu").addEventListener("click",function() {
  display("info");
});
