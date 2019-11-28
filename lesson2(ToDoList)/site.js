"use strict"
alert('ВНИМАНИЕ! \n'+
'на каждое задание вешается идентификатор id равный дате с точностью  до \n'+
'секунды, поэтому не советуется создавать задания чаще чем раз в секунду.'+
'Конечно можно поставить идентификатор с точностью до миллисекунды,но это ведь'+
' тестовое задание) \n\n'+
'обращаем внимание, что формат даты: mm dd yyyy');
//selecting dom elements for manipulation
let input = document.getElementById("input");
let inputDate = document.getElementById("inputDate");
let ul = document.getElementById("ul");
let container = document.getElementById("todo");
let lists = document.querySelectorAll("li");
let spans = document.getElementsByTagName("span");
let pencil = document.querySelector("#pencil");
let saveBtn = document.querySelector(".save");
let clearBtn = document.querySelector(".clear");
let tipsBtn = document.querySelector(".tipBtn");
let closeBtn = document.querySelector(".closeBtn");
let overlay = document.getElementById("overlay")


//function to delete todo if delete span is clicked.
function deleteTodo(){
  for(let span of spans){
    span.addEventListener ("click",function (){
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}

//function to load todo if list is found in local storage.
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}

//event listener for input to add new todo to the list.
input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    let now = new Date;
    let startToDo = new Date(inputDate.value);
    //let nowString = ((now.getMonth()+1)+" " + now.getDate() +" "+now.getFullYear());
    if (this.value !=""  && startToDo > now) {
      /*now.getFullYear()+'.'+now.getMonth()+'.'+now.getDate()+' '+now.getHours()+
      ':'+now.getMinutes()+':'+now.getSeconds();*/
      //creating lists and span when enter is clicked
      let li = document.createElement("li");
      let spanElement = document.createElement("span");
      let icon = document.createElement("i");

      let newTodo = this.value;
      //this.value = " " ;
      //icon.classList.add('fas', 'fa-trash-alt');
      //spanElement.innerHTML=+icon;

      //вешаем id на новый li
      ul.innerHTML+='<li id="'+ "specialLiId" +now+'">'+'<span><i class="fas fa-trash-alt"></i></span>'+
      +newTodo+"  "+HowMuchTimeToEnd(now, startToDo)+'</li>';

      rePrintDataInLi(now, startToDo,this.value);
      deleteTodo();
    } else {
        if (startToDo < now){
          alert("Неверно указана дата");
        }
        if (input.value == false  ) {
            alert("Введите текст задания");
        }
    }
  }
});

//используются внешние переменные для разницы в отсчете
//вобще то она тут не нужна особо,но на всякий случай пусть весит пока
function HowMuchTimeToEnd(now, startToDo) {
   let today = Math.floor((startToDo-now)/1000);
   let tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
   let tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
   let thour=today%24; today=Math.floor(today/24);
   let timestr=today +" дней "+ thour+" часов "+tmin+" минут "+tsec+" секунд";
   return timestr;
}


function rePrintDataInLi(now,startToDo,task){
  let today = new Date();
  today = Math.floor((startToDo-today)/1000);
  let tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
  let tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
  let thour=today%24; today=Math.floor(today/24);
  let timestr=today +" дней "+ thour+" часов "+tmin+" минут "+tsec+" секунд";
  let liId = "specialLiId" + now;
  document.getElementById(liId).innerHTML='<span><i class="fas fa-trash-alt"></i></span>'+
  ''+task+" -- "+timestr;
  deleteTodo();
  window.setTimeout(rePrintDataInLi,1000,now,startToDo,task);
}


// event listener to linethrough list if clicked
ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },false
);

//hide input box,when pencil icon is clicked
pencil.addEventListener('click', function(){
  input.classList.toggle('display');
});



//save todolist state so user can access it later
saveBtn.addEventListener('click',function(){
  localStorage.setItem('todoList',ul.innerHTML );

});

//clear all todo when clear button is clicked
clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem('todoList',ul.innerHTML );
});

//display overlay when tips btn is clicked
tipsBtn.addEventListener("click",function(){
   overlay.style.height = "100%";
});

//close overlay when close btn is clicked
closeBtn.addEventListener("click",function(e){
  e.preventDefault;
  overlay.style.height = "0";

})

//delete todo
deleteTodo();

//load Todo
loadTodo();



/*let startToDo = new Date('06 05 2020');
alert(startToDo);*/
