export function aboutUsHTML() {
  let html = `

  <text class="breadcrumbs"><a class="navKey" href="#" id="home2">Главное Меню</a><a>>О компании</a></text>


  <h1> Носколяндия -- ваш выбор</h1>
  <!--карта гугла-->
  <h2>Наши контакты</h2>
  <div class="contacts">
    <text>Контакты- блок1</text>
    <text>Контакты- блок2</text>
    <text>Контакты- блок3</text>
    <text>Контакты- блок4</text>
  </div>
  <h2>Тут карта гугла</h2>

  <div id="map"></div>


  <h2>Чем мы занимаемся?</h2>
  <div>Всякими хорошими вещами и Всякими хорошими вещами и Всякими хорошими вещами и
  Всякими хорошими вещами и Всякими хорошими вещами и Всякими хорошими вещами и
  Всякими хорошими вещами и Всякими хорошими вещами и Всякими хорошими вещами и
  Всякими хорошими вещами и Всякими хорошими вещами и Всякими хорошими вещами и
  Всякими хорошими вещами и Всякими хорошими вещами и Всякими хорошими вещами и
  <div>
  `;
  return html;
}


export function aboutUsCSS1() {
  let html = `
  #map {
       height: 30vh;
       width: 80vw;
     }

  .contacts {
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:space-around;
    align-items: center;
  }

  .contacts:nth-child(n) {
    margin: auto;
    width: 80vw;
    height: 40vh;
    margin: 100px;
  }
  text {
    display:flex;
    flex-direction:column;
    background-color:grey;
    height:50%;
    justify-content:center;
  }

  #map {
    height:40vh;
    width:100%;
  }

  `;
  return html;
}

export function aboutUsCSS2() {
  let html = ``;
  return html;
}
