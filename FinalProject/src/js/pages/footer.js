export function footerHTML() {
  let html = `
  <footer>
  <div class="afterFooter">
    <div class="rights">
      <p>Носколяндия  &#8212; агенство по подбору носков.<br>
      &#169; Все права защищены</p>
    </div>
    <div class="socialIcons">
      <div class="img"><img src="./images/socks1.png"></div>
      <div class="img"><img src="./images/socks2.png"></div>
      <div class="img"><img src="./images/socks3.png"></div>
      <div class="img"><img src="./images/socks4.png"></div>
    </div>
    <div class="nothing"></div>
    <div class="iconsAndText">
      <div class="img"><img src="./images/phone.png"></div>
      <p>Заказать звонок</p>
      <div class="img"><img src="./images/phone.png"></div>
      <p>Написать нам</p>
    </div>
    <div class="basket">
    <div class="img"><img src="./images/basket.png"></div>
      <div class="number">
      </div>
      <div class="number2">
        <p>+375 29 000-00-00</p>
        <p>+375 29 000-00-00</p>
      </div>
    </div>
  </div>


<!-- footer for screen < 780px -->
  <div class="rights600px">
    <p>Роял-Холидэй &#8212; агенство элитного отдыха.<br>
    &#169; Все права защищены</p>
  </div>
  </footer>


  `;
  return html;
}

export function footerCSS1() {
  let css = `
    footer {
    display: flex;
    flex-flow: row;
    height: 20%;
    font-weight: bold;
    font-size: 8pt;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
    top:200px;
}

.afterFooter {
display: flex;
flex-flow: row;
width: 100%;
justify-content: space-around;
padding-top: 1%;
margin-left: auto;
margin-right: auto;
}

.rights {
display: flex;
flex-flow: column;
width: 20%;
text-align: left;
padding-left: 2%;
font-size: 7pt;
}

.socialIcons {
display: flex;
flex-flow: row;
width: 20%;
justify-content: space-around;
align-items: flex-start;
padding-top: 1%;
}

.img img {
width:30px;
height: 30px;
}

.nothing {
display: flex;
width: 10%;
}

.iconsAndText {
display: flex;
flex-flow: row;
width: 20%;
justify-content: space-around;
align-items: center;
font-size: 8pt;
margin: 0px;
}

.basket {
display: flex;
flex-flow: row;
width: 20%;
padding-top: 1%;
}

.imgNearPhone {
display: flex;
flex-flow: row;
align-items: center;
justify-content: center;
}

.number {
display: flex;
flex-flow: column;
padding-left: 5%;
padding-right: 5%;
font-size: 7pt;
line-height: 0;
}

.number2 {
display: flex;
flex-flow: column;
padding-left: 5%;
border-left: 1px solid grey;
line-height: 0;
font-size: 7pt;
}

.rights600px {
display: none;
width: 100%;
height: 40px;
background-color: blue;
font-size: 7pt;
color: white;
text-align: center;
padding-top: 2px;
}


/* Смартфоны */
@media (min-width: 320px) {
footer {display: none;}
.afterFooter {display: none;}
.rights600px {display: block; }
}

/* iPads*/
@media (min-width: 780px) and (max-width: 1223px){
footer {display: flex; }
.afterFooter {display: none;}
.rights600px {display: none; }
}

/* настольные компьютеры и ноутбуки */
@media (min-width: 1224px) {
footer {display: flex; width: 1220px;}
.afterFooter {display: flex; width: 1220px;}
.rights600px {display: none;}
}
  `;
  return css;
}

export function footerCSS2() {
  let css = `

  footer {
  display: flex;
  flex-flow: row;
  height: 20%;
  font-weight: bold;
  font-size: 8pt;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
  top:200px;
}

.afterFooter {
display: flex;
flex-flow: row;
width: 100%;
justify-content: space-around;
padding-top: 1%;
margin-left: auto;
margin-right: auto;
}

.rights {
display: flex;
flex-flow: column;
width: 20%;
text-align: left;
padding-left: 2%;
font-size: 7pt;
}

.socialIcons {
display: flex;
flex-flow: row;
width: 20%;
justify-content: space-around;
align-items: flex-start;
padding-top: 1%;
}

.img img {
width:30px;
height: 30px;
}

.nothing {
display: flex;
width: 10%;
}

.iconsAndText {
display: flex;
flex-flow: row;
width: 20%;
justify-content: space-around;
align-items: center;
font-size: 8pt;
margin: 0px;
}

.basket {
display: flex;
flex-flow: row;
width: 20%;
padding-top: 1%;
}

.imgNearPhone {
display: flex;
flex-flow: row;
align-items: center;
justify-content: center;
}

.number {
display: flex;
flex-flow: column;
padding-left: 5%;
padding-right: 5%;
font-size: 7pt;
line-height: 0;
}

.number2 {
display: flex;
flex-flow: column;
padding-left: 5%;
border-left: 1px solid grey;
line-height: 0;
font-size: 7pt;
}

.rights600px {
display: none;
width: 100%;
height: 40px;
background-color: blue;
font-size: 7pt;
color: white;
text-align: center;
padding-top: 2px;
}


/* Смартфоны */
@media (min-width: 320px) {
footer {display: none;}
.afterFooter {display: none;}
.rights600px {display: block; }
}

/* iPads*/
@media (min-width: 780px) and (max-width: 1223px){
footer {display: flex; }
.afterFooter {display: none;}
.rights600px {display: none; }
}

/* настольные компьютеры и ноутбуки */
@media (min-width: 1224px) {
footer {display: flex; width: 1220px;}
.afterFooter {display: flex; width: 1220px;}
.rights600px {display: none;}
}

  `;
  return css;
}
