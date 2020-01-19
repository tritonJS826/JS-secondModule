//import {Ant, antCarousel} from '../scripst/antCarousel.js';


export function homeHTML() {
  let html = `
  <div class="myPages">
  <h3> Добро пожаловать в носколяндию</h3>

  <div class="carouselWrapper">
    <h4> Карусель с парой товаров <h4>
      <div class="ant-carousel" id="first">
  <div class="ant-carousel-hider">
    <ul class="ant-carousel-list">
      <li class="ant-carousel-element"><img src="./images/logo.png" alt="0">
        <p>Описание 0</p>
      </li>
      <li class="ant-carousel-element"><img src="./images/logo.png" alt="1">
        <p>Описание 1</p>
      </li>
      <li class="ant-carousel-element"><img src="./images/logo.png" alt="2">
        <p>Описание 2</p>
      </li>
      <li class="ant-carousel-element"><img src="./images/logo.png" alt="3">
        <p>Описание 3</p>
      </li>
      <li class="ant-carousel-element"><img src="./images/logo.png" alt="4">
        <p>Описание 4</p>
      </li>
      <li class="ant-carousel-element"><img src="./images/logo.png" alt="5">
        <p>Описание 5</p>
      </li>
      <li class="ant-carousel-element"><img src="./images/logo.png" alt="6">
        <p>Описание 6</p>
      </li>
      <li class="ant-carousel-element"><img src="./images/logo.png" alt="7">
        <p>Описание 7</p>
      </li>
      <li class="ant-carousel-element"><img src="./images/logo.png" alt="8">
        <p>Описание 8</p>
      </li>
      <li class="ant-carousel-element"><img src="./images/logo.png" alt="9">
        <p>Описание 9</p>
      </li>
    </ul>
  </div>
  <div class="ant-carousel-arrow-left"></div>
  <div class="ant-carousel-arrow-right"></div>
  <div class="ant-carousel-dots"></div>
</div>
</div>

<div class="carouselWrapper2">
  <h4>Карусель с акционными товарами</h4>
  <div class="ant-carousel" id="second">
<div class="ant-carousel-hider">
<ul class="ant-carousel-list">
  <li class="ant-carousel-element"><img src="./images/logo.png" alt="0">
    <p id="timerAnt1">Описание 0</p>
  </li>
  <li class="ant-carousel-element"><img src="./images/logo.png" alt="1">
    <p><text id="timerAnt1"></text></p>
  </li>
  <li class="ant-carousel-element"><img src="./images/logo.png" alt="2">
    <p><text id="timerAnt2"></text></p>
  </li>
  <li class="ant-carousel-element"><img src="./images/logo.png" alt="3">
    <p><text id="timerAnt3"></text></p>
  </li>
  <li class="ant-carousel-element"><img src="./images/logo.png" alt="4">
    <p><text id="timerAnt4"></text></p>
  </li>
  <li class="ant-carousel-element"><img src="./images/logo.png" alt="5">
    <p><text id="timerAnt5"></text></p>
  </li>
</ul>
</div>
<div class="ant-carousel-arrow-left"></div>
<div class="ant-carousel-arrow-right"></div>
<div class="ant-carousel-dots"></div>
</div>
</div>



    <h3>Блок с двумя колонками текста(flex-row)</h3>
    <div class="description">
    <div>  <h4>Блок с первой колонкой текста</h4>
        первая колонка первая колонка первая колонка первая колонка
        первая колонка первая колонка первая колонка первая колонка
        первая колонка первая колонка первая колонка первая колонка
        первая колонка первая колонка первая колонка первая колонка </div>
    <div><h4>Блок со второй колонкой текста</h4>
        вторая колонка вторая колонка вторая колонка вторая колонка
        вторая колонка вторая колонка вторая колонка вторая колонка
        вторая колонка вторая колонка вторая колонка вторая колонка
        вторая колонка вторая колонка вторая колонка вторая колонка</div>
  </div>

  <div class="advantages">
    <h3>Текст о достоинствах компании</h3>
    <div>
      Первое достоинство Первое достоинство Первое достоинство
      Первое достоинство Первое достоинство Первое достоинство
    </div>
    <div>
       Второе достоинство Второе достоинство Второе достоинство
       Второе достоинство Второе достоинство Второе достоинство
       Второе достоинство Второе достоинство Второе достоинство
    </div>
    <div>
      Третье достоинство Третье достоинство Третье достоинство
      Третье достоинство Третье достоинство Третье достоинство
      Третье достоинство Третье достоинство Третье достоинство
    </div>


  </div>
  </div>

  `;
  return html;
}

export function homeCSS1() {
  let css = `
     .myPages {
       display:flex;
       flex-direction: column;
       align-self: flex-end;
       padding-left: 20px;
     }


    .myPages .description {
      display:flex;
      flex-direction:row;
    }

     .myPages  .description > div {
      width:45%
      margin:2%;
      flex-wrap:wrap;
      text-align: center;
    }

    .myPages  .advantages {
      display:flex;
      flex-direction:column;
      margin:2%;
    }

    .myPages .advantages  div {
      margin-top:1%;
    }




    .ant-carousel {
  margin: 50px auto auto;
  padding-top: 10px;
  border: 1px solid #ccd;
  background-color: white;
  max-width:810px;
}

.ant-carousel-element {
  width: 270px;
  text-align: center;
}

/* General styles */


.ant-carousel {
  width: auto;
  position: relative;
}

.ant-carousel-hider {
  overflow: hidden;
}

.ant-carousel-list {
  width: auto;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
}

.ant-carousel-element {
  display: block;
  flex: 0 0 auto;
}

.ant-carousel-element img {
  width:250px;
  height:250px;
  margin: 10px;
}

/* Navigation item styles */
div.ant-carousel-arrow-left,
div.ant-carousel-arrow-right {
  width: 22px;
  height: 40px;
  position: absolute;
  cursor: pointer;
  opacity: 0.6;
  z-index: 32;
}

div.ant-carousel-arrow-left {
  left: -40px;
  top: 40%;
  display: block;
  background: url("http://pvbk.spb.ru/inc/carousel/ant-files/ant-arrow-left.png") no-repeat;
}

div.ant-carousel-arrow-right {
  right: -40px;
  top: 40%;
  display: block;
  background: url("http://pvbk.spb.ru/inc/carousel/ant-files/ant-arrow-right.png") no-repeat;
}

div.ant-carousel-arrow-left:hover {
  opacity: 1.0;
}

div.ant-carousel-arrow-right:hover {
  opacity: 1.0;
}

div.ant-carousel-dots {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  bottom: -30px;
  z-index: 30;
  text-align: center;
}

span.ant-dot {
  width: 10px;
  height: 10px;
  margin: 5px 7px;
  padding: 0;
  display: inline-block;
  background-color: #BBB;
  border-radius: 5px;
  cursor: pointer;
}


  `;
  return css;
}

export function homeCSS2() {
  let css = ``;
  return css;
}
