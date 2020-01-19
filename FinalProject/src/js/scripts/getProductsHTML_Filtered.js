import {bdGoods} from './bdGoods.js';





//функция getProductsHTML_Filtered вернет HTML наших продуктов с учетом фильтров
export function getProductsHTML_Filtered(dataBaseArray = bdGoods,category = "all",minPrice = 0,maxPrice =0,manufacturedBy = "all", size = "all",color = "all",firstCheapOrExpensiveOrPopularOrNotPopular = "withoutFilter") {
  console.log('filtered');
  let wrapper =`
  <text class="breadcrumbs"><a class="navKey" href="#" id="home2">Главное Меню</a><a>>Товары</a></text>

  `;
  let outputArray = [];


  outputArray = filterСategory(dataBaseArray, category);
  outputArray = filterMinPrice(outputArray, minPrice);
  outputArray = filterMaxPrice(outputArray, maxPrice);
  outputArray = filterManufacturedBy(outputArray, manufacturedBy);
  outputArray = filterSize(outputArray, size);
  outputArray = filterColor(outputArray, color);
  outputArray = filterFirstLast(outputArray, "withoutFilter");




  for (let i=0; i < outputArray.length; i++) {
    wrapper += `
    <div class="unit" id="productId${outputArray[i].id}">
    <img src="${outputArray[i].srcImg}">
    <div>
      <h3>${outputArray[i].name}</h3>
      <text>${outputArray[i].description}</text>
      <br><br><br>
      <text> Стоимость: ${outputArray[i].price} $</text>
      <button class="navKey" id="product${outputArray[i].id}Details">Детали</button>
      <button class="actKey" id="product${outputArray[i].id}AddToBasket">В корзину</button>    </div>
    </div>
    `
  }
  return `${wrapper}`;
}




function filterСategory(inputArray,category) {
  let outputArray = [];
  if (category == "all") {
    return inputArray;
  } else {
   for (let i = 0; i < inputArray.length; i++) {
     if (inputArray[i].category == category) {
       outputArray.push(inputArray[i]);
       }
   }
  return outputArray;
  }
}

function filterMinPrice(inputArray,minPrice) {
  let outputArray = [];
  if (minPrice == 0) {
    return inputArray;
  } else {
   for (let i = 0; i < inputArray.length; i++) {
     if (inputArray[i].price > minPrice) {
       outputArray.push(inputArray[i]);
       }
   }
  return outputArray;
  }
}


function filterMaxPrice(inputArray,maxPrice) {
  let outputArray = [];
  if (maxPrice == 0) {
    return inputArray;
  } else {
   for (let i = 0; i < inputArray.length; i++) {
     if (inputArray[i].price < maxPrice) {
       outputArray.push(inputArray[i]);
       }
   }
  return outputArray;
  }
}

function filterManufacturedBy(inputArray,manufacturedBy) {
  let outputArray = [];
  if (manufacturedBy == "all") {
    return inputArray;
  } else {
   for (let i = 0; i < inputArray.length; i++) {
     if (inputArray[i].manufacturer == manufacturedBy) {
       outputArray.push(inputArray[i]);
       }
   }
  return outputArray;
  }
}


function filterSize(inputArray,size) {
  let outputArray = [];
  if (size == "all") {
    return inputArray;
  } else {
   for (let i = 0; i < inputArray.length; i++) {
     if (inputArray[i].size == size) {
       outputArray.push(inputArray[i]);
       }
   }
  return outputArray;
  }
}

function filterColor(inputArray,color) {
  let outputArray = [];
  if (color == "all") {
    return inputArray;
  } else {
   for (let i = 0; i < inputArray.length; i++) {
     if (inputArray[i].color == color) {
       outputArray.push(inputArray[i]);
       }
   }
  return outputArray;
  }
}


function filterFirstLast(inputArray, firstCheapOrExpensive) {
  let outputArray = [];
  switch (firstCheapOrExpensive) {
    case "withoutFilter":
      return inputArray;
    break;
    case "firstCheap":
      outputArray = inputArray.sort(function compare(a,b) {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      // a должно быть равным b
      return 0;
    });
    return outputArray;
  break;
  case "firstExpensive":
    outputArray = inputArray.sort(function compare(a,b) {
        if (a.price > b.price) {
          return -1;
        }
        if (a.price < b.price) {
          return 1;
        }
        // a должно быть равным b
        return 0;
      });
    return outputArray;
  break;
  case "firstUnPopular":
    outputArray = inputArray.sort(function compare(a,b) {
        if (a.rating < b.rating) {
          return -1;
        }
        if (a.rating > b.rating) {
          return 1;
        }
        // a должно быть равным b
        return 0;
      });
    return outputArray;
  break;
  case "firstPopular":
    outputArray = inputArray.sort(function compare(a,b) {
        if (a.rating > b.rating) {
          return -1;
        }
        if (a.rating < b.rating) {
          return 1;
        }
        // a должно быть равным b
        return 0;
      });
    return outputArray;
  break;
  }


}
