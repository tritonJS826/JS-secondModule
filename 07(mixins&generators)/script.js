"use strict";

// 2.Разработайте произвольный генератор ()
// 3.Разработайте 2 произвольные функции с использованием итератора
// 4.Реализуйте сложное наследование посредством классов, расширенное mix-in 	-ами
// 5.Продемонстрируйте приведение актуальной даты к другой культуре 		посредством локализаци   и


//1.Делаем генератор ()
function* counter(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
//ну заюзаем его маленько

let count = counter(3,5);
for(let value of count) {
  console.log(value+" это работает генератор");
}
alert('генератор сработал (перебрали все yield)');

// 2.Разработаем 2 произвольные функции с использованием итератора
//Прямо от любимого Ильи Кантора
//Объект содержит только два свойства, но перебирается "умным способом"
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};


function iterateObjectRange() {
  for (let num of range) {
    alert(num+" работает итератор 1"); // 1, затем 2, 3, 4, 5
  }
}

function iterateObjectRangeFromEnd() {
  for (let num of range) {
    alert("Вай-вай "+num+" это уже работает итератор 2"); // 1, затем 2, 3, 4, 5
  }
}

iterateObjectRange();
iterateObjectRangeFromEnd();
console.log('перебираемый объект один -range, но функции две)');


// 3.Реализуйте сложное наследование посредством классов, расширенное mix-in-ами


class BaseClass {
  constructor (who = "human", name = "Ivan"){
    this.who = who;
    this.name = name;

  }
}

let Mixin1 = BaseClass => class extends BaseClass {
  WhatIsYourName(){
    console.log('My name is '+ this.name);
  }
};

let Mixin2 = BaseClass => class extends BaseClass {
  WhatIsYourWork(){
    console.log('My work is a' + this.work);
  }
}

class ProtoClass extends Mixin1(Mixin2(BaseClass)) {
  constructor (who, name, work) {
    super(who,name);
    this.work = work;
  }
}

//или так добавить примесь можно, но не принято)
//Object.assign(ProtoClass.prototype, Mixin);



const work = "JS-programmer";
let victor = new ProtoClass('human','Victor',work);

console.log('выведем этот объектик с наследованиями и миксинами');
console.log(victor);
//для примера используем скопированный из примеси метод
victor.WhatIsYourName();
victor.WhatIsYourWork();


// 4.Продемонстрируйте приведение актуальной даты к другой культуре посредством локализаци
//создадим новый объект Date


const date = new Date;

console.log(date);

// Форматирование ниже предполагает, что местный часовой пояс равен
// America/Los_Angeles для локали США

// В америкаском английском используется порядок месяц-день-год
console.log(date.toLocaleDateString('en-US')+'американский английский');
// → "12/19/2012"

// В британском английском используется порядок день-месяц-год
console.log(date.toLocaleDateString('en-GB')+"британский английский");
// → "20/12/2012"

// В корейском используется порядок год-месяц-день
console.log(date.toLocaleDateString('ko-KR')+"корейский");
// → "2012. 12. 20."

// В большинстве арабоговорящих стран используют настоящие арабские цифры
console.log(date.toLocaleDateString('ar-EG') +"арабские страны ");
// → "٢٠‏/١٢‏/٢٠١٢"

// В Японии приложения могут захотеть использовать японский календарь,
// в котором 2012 год являеся 24-м годом эры Хейсей
console.log(date.toLocaleDateString('ja-JP-u-ca-japanes')+" japan");
// → "24/12/20"

// Если запрашиваемый язык может не поддерживаться, например
// балийский, откатываемся на запасной язык, в данном случае индонезийский
console.log(date.toLocaleDateString() + "стандартный");
// → "20/12/2012"

// в миллисекундах
console.log(+date+"ms");
