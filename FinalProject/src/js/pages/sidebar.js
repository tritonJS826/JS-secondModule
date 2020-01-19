export function sidebarHTML() {
   let html = `

  <div class="list">
  <ul>
     <li>
       <input type="checkbox" checked>
       <i></i>
       <h2>Поиск</h2>
       <p>
         <input  class="searchItem" id="searchText" type="text" placeholder="поиск с учетом регистра" ></input><br>
         <button  class="searchItem navKey actKey" id="searchKey">Искать</button>
       </p>
     </li>
     <li>
       <input type="checkbox" checked>
       <i></i>
       <h2>Фильтры</h2>
       <p>
         <text>Категория:</text>
         <select id="filterCategory" required>
                       <option value ="all">все категории</option>
                       <option value ="socks">носки</option>
                       <option value="gloves" >перчатки</option>
                       <option value="hats">шляпы</option>
         </select>
         <br>
         <text>Сначала:</text>
         <select id="filterFirstLast" required>
                       <option value ="withoutFilter">без фильтра</option>
                       <option value="firstCheap" >сначала дешевые</option>
                       <option value="firstExpensive">сначала дорогие</option>
                       <option value="firstPopular">сначала популярные</option>
                       <option value="firstUnPopular">сначала непопулярные</option>
         </select>
         <text>Диапазон цен</text>
         <input  class="" id="minPrice" type="number" placeholder="от" ></input>
         <input  class="" id="maxPrice" type="number" placeholder="до" ></input>
         <br>
         <text>Страна производитель</text>
         <select id="filterManufactured" required>
                       <option value ="all">Все</option>
                       <option value="Россия" >Россия</option>
                       <option value="Беларусь">Беларусь</option>
                       <option value="Англия">Англия</option>
         </select>
         <br>
         <text>Размер</text>
         <select id="filterSize" required>
                       <option value ="all">Все</option>
                       <option value="L" >L</option>
                       <option value="M">M</option>
                       <option value="XL">XL</option>
         </select>
         <br>
         <text>Цвет</text>
         <select id="filterColor" required>
                       <option value ="all">Все</option>
                       <option value="blue">Синий</option>
                       <option value="red">Красный</option>
                       <option value="black">Черный</option>
         </select>
         <button class="navKey actKey" id="filterKey">Применить фильтры</button>
       </p>
     </li>
     <li>
       <input type="checkbox" checked>
       <i></i>
       <h2>FAQ</h2>
       <p>
         <a>Вопрос 1</a>
         <br>
         <a>Вопрос 2</a>
         <br>
         <a>Вопрос 3</a>

       </p>
     </li>
   </ul>
</div>
<!--
      <h2>Поиск</h2>
      <input  class="searchItem" id="searchText" type="text" placeholder="поиск с учетом регистра" ></input><br>
      <button  class="searchItem navKey actKey" id="searchKey">Искать</button>
      <br>
      <h2>Фильтр</h2>
      <h3>Категория:</h3>
      <select id="filterCategory" required>
                    <option value ="all">все категории</option>
                    <option value ="socks">носки</option>
                    <option value="gloves" >перчатки</option>
                    <option value="hats">шляпы</option>
      </select>
      <h3>Сначала:</h3>
      <select id="filterFirstLast" required>
                    <option value ="withoutFilter">без фильтра</option>
                    <option value="firstCheap" >сначала дешевые</option>
                    <option value="firstExpensive">сначала дорогие</option>
                    <option value="firstPopular">сначала популярные</option>
                    <option value="firstUnPopular">сначала непопулярные</option>
      </select>
      <h3>Диапазон цен</h3>
      <input  class="" id="minPrice" type="number" placeholder="от" ></input>
      <input  class="" id="maxPrice" type="number" placeholder="до" ></input>
      <h3>Страна производитель</h3>
      <select id="filterManufactured" required>
                    <option value ="all">Все</option>
                    <option value="Россия" >Россия</option>
                    <option value="Беларусь">Беларусь</option>
                    <option value="Англия">Англия</option>
      </select>
      <h3>Размер</h3>
      <select id="filterSize" required>
                    <option value ="all">Все</option>
                    <option value="L" >L</option>
                    <option value="M">M</option>
                    <option value="XL">XL</option>
      </select>
      <h3>Цвет</h3>
      <select id="filterColor" required>
                    <option value ="all">Все</option>
                    <option value="blue">Синий</option>
                    <option value="red">Красный</option>
                    <option value="black">Черный</option>
      </select>
      <button class="navKey actKey" id="filterKey">Применить фильтры</button>
-->
   `;
  return html;
}


export function sidebarCSS1() {
  let css = `


  .list {
    max-width:300px;
  }

.list  .transition, p, ul li i:before, ul li i:after {
transition: all 0.25s ease-in-out;
}

.list .flipIn, h1, ul li {
animation: flipdown 0.5s ease both;
}

.list .no-select, h2 {
-webkit-tap-highlight-color: transparent;
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}




.list h1, h2 {
color: darkblue;
}

.list h1 {
text-transform: uppercase;
font-size: 36px;
line-height: 42px;
letter-spacing: 3px;
font-weight: 100;
}

.list h2 {
font-size: 26px;
line-height: 34px;
font-weight: 300;
letter-spacing: 1px;
display: block;
background-color: #fefffa;
margin: 0;
cursor: pointer;
}

.list p {
color: rgba(48, 69, 92, 0.8);
font-size: 17px;
line-height: 26px;
letter-spacing: 1px;
position: relative;
overflow: hidden;
max-height: 800px;
opacity: 1;
transform: translate(0, 0);
margin-top: 14px;
z-index: 2;
}

.list ul {
list-style: none;
perspective: 900;
padding: 0;
margin: 0;
}
.list ul li {
position: relative;
padding: 0;
margin: 0;
padding-bottom: 4px;
padding-top: 18px;
border-top: 1px dotted blue;
}
.list ul li:nth-of-type(1) {
animation-delay: 0.5s;
}
.list ul li:nth-of-type(2) {
animation-delay: 0.75s;
}
.list ul li:nth-of-type(3) {
animation-delay: 1s;
}
.list ul li:last-of-type {
padding-bottom: 0;
}
.list ul li i {
position: absolute;
transform: translate(-6px, 0);
margin-top: 16px;
right: 0;
}
.list ul li i:before, ul li i:after {
content: "";
position: absolute;
background-color: darkblue;
width: 3px;
height: 9px;
}
.list ul li i:before {
transform: translate(-2px, 0) rotate(45deg);
}
.list ul li i:after {
transform: translate(2px, 0) rotate(-45deg);
}
.list ul li input[type=checkbox] {
position: absolute;
cursor: pointer;
width: 100%;
height: 100%;
z-index: 1;
opacity: 0;
}
.list ul li input[type=checkbox]:checked ~ p {
margin-top: 0;
max-height: 0;
opacity: 0;
transform: translate(0, 50%);
}
.list ul li input[type=checkbox]:checked ~ i:before {
transform: translate(2px, 0) rotate(45deg);
}
.list ul li input[type=checkbox]:checked ~ i:after {
transform: translate(-2px, 0) rotate(-45deg);
}

@keyframes flipdown {
0% {
  opacity: 0;
  transform-origin: top center;
  transform: rotateX(-90deg);
}
5% {
  opacity: 1;
}
80% {
  transform: rotateX(8deg);
}
83% {
  transform: rotateX(6deg);
}
92% {
  transform: rotateX(-3deg);
}
100% {
  transform-origin: top center;
  transform: rotateX(0deg);
}
}



  `;
  return css;
}


export function sidebarCSS2() {
  let css = ``;
  return css;
}
