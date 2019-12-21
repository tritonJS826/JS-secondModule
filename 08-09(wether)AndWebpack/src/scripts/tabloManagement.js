import  {tablo } from './tabloAndClasses.js';


export function drawTabloManagementButtons(){
  document.getElementById('tabloManagement').innerHTML=`
  <button name="mainTablo" class="tabloManagement">Главное табло</button>
  <button name="waiting" class="tabloManagement">Ждут отправления</button>
  <button name="departure" class="tabloManagement">Отправленные</button>
  <button name="favourite" class="tabloManagement">Избранное</button>
`;
  document.getElementById('tabloManagement').style.cssText=`
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
  //flex:0 0 15%;`
  console.log('drawTabloManagementButtons Complete')
}

export function tabloManagementListeners(){
  let buttons = document.querySelectorAll('.tabloManagement');
  buttons.forEach (elem => elem.addEventListener('click',(event) => {
    const {
        target
    } = event;
    let date = new Date;
    let elemDate;
    let workingArr=[];
     switch (target.name) {
      case 'mainTablo':
        tablo.drawer(tablo.tabloView(tablo.dataArray), 'divTabloView');
        tablo.addListenersOnDelBtn();
        tablo.addListenersOnFavBtn();
        break;
      case 'waiting':
        //date = new Date;
        //elemDate = new Date(`${elem.data}  'T' ${elem.departureTime}`);
        tablo.dataArray.forEach(elem => {
          if (new Date(`${elem._date}T${elem._departureTime}`) > date) {
          // console.log(elem.data);
          workingArr.push(elem);
        }});
        tablo.drawer(tablo.tabloView(workingArr), 'divTabloView');
        tablo.addListenersOnDelBtn();
        tablo.addListenersOnFavBtn();
        break;
      case 'departure':
        //date = new Date;
        //elemDate = new Date(`${elem.data}  'T' ${elem.departureTime}`);
        tablo.dataArray.forEach(elem => {
          if (new Date(`${elem._date}T${elem._departureTime}`) < date) {
          // console.log(elem.data);
          workingArr.push(elem);
        }});
        tablo.drawer(tablo.tabloView(workingArr), 'divTabloView');
        tablo.addListenersOnDelBtn();
        tablo.addListenersOnFavBtn();
        break;
      case 'favourite':
        //console.log(tablo.dataArray[0]['_favorite']);
        tablo.dataArray.forEach(elem => {if (elem['_favorite']) {
          workingArr.push(elem);
          //console.log(workingArr);
      }});
        tablo.drawer(tablo.tabloView(workingArr), 'divTabloView');
        tablo.addListenersOnDelBtn();
        tablo.addListenersOnFavBtn();
        break;
      default:
        alert('listenerNotFound');
     }

  })
 )
}
