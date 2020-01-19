import {getProductsHTML_Filtered} from '../../scripts/getProductsHTML_Filtered.js';
import {filterSettings} from '../../scripts/filterSettings.js';



export function goodsHTML() {
  let productsHTML_Filtered = getProductsHTML_Filtered(
    filterSettings.dataBase,
    filterSettings.category,
    filterSettings.minPrice,
    filterSettings.maxPrice,
    filterSettings.manufacturer,
    filterSettings.size,
    filterSettings.color,
    filterSettings.firstLast);
  let html = `
  <h1> Мы рады предложить вам следующие товары</h1>
    <div class="container-productsHTML">
    </div>

    ${productsHTML_Filtered}

  `;


  return html;
}


export function goodsCSS1() {
  let css = `
    .unit {
      display:flex;
      flex-direction: row;
      wrap:nowrap;
      margin: 2%;
      background-color: blueyellow;
      z-index:2;
    }

    #pages img {
      max-height:200px;
      width:200px;
      margin:1%;
    }

  `;
  return css;
}

export function goodsCSS2() {
  let css = `
  .unit {
    display:flex;
    flex-direction: row;
    wrap:nowrap;
    margin: 2%;
    background-color: blueyellow;
    z-index:2;
  }

  #pages img {
    max-height:200px;
    width:200px;
    margin:1%;
  }

  `;
  return css;
}
