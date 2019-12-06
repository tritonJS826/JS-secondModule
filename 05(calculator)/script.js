// let - var
// const - constant



/* if(true){
    var a = 'Hello World!';
}

console.log(a); */




//Scope

// console.log(b);

// var b = 15;

//Hoisting


// Array and Object (const)



// Spread

// const arr1 = [1, 2, 4, 6];
// const arr2 = [24, 1, 42, 72];

// const arr12 = Array.prototype.push.apply(arr1, arr2);

// console.log([...arr1, ...arr2]);

/** */

// const obj1 = {
//     n1: 'Hello',
//     n2: 'World'
// };

// const obj2 = {
//     n1: 'By'
// }

// var obj12 = Object.assign(obj1, obj2);

// let objEs6 = {
//     ...obj1,
//     ...obj2
// }

// console.log(obj12);
// console.log(objEs6)

/** */

// const arrNext = [4, 12, 2];

// function sum(a,b,c){
//     return (a+b)/c;
// }

//  console.log(sum(arrNext[0], arrNext[1], arrNext[2]));
//  console.log(sum.apply(null, arrNext));
//  console.log(sum(...arrNext));



 //REST

//  function output(val1, val2, ...REST){
//     console.log(val1, val2,  REST);
//  }

//  output(15, 12, 12, 1, -1, 2.5, 24, 'sdfsfd');


 const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
  grad: 'grad', //rad mean radians
  history: {
    visible:false,
    hist: ['TRITON','MADE BY:']
  }
};

//All Operators
 const allCalculation = {
  '+': (firstOperand, secondOperand) => Math.round(firstOperand*1000000000000000 + secondOperand*1000000000000000)/1000000000000000,

  '-': (firstOperand, secondOperand) => Math.round(firstOperand*1000000000000000 - secondOperand*1000000000000000)/1000000000000000,

  '=': (firstOperand, secondOperand) => secondOperand,

  '*': (firstOperand, secondOperand) =>  Math.round(firstOperand * secondOperand*10000000000000)/10000000000000,

  '/': (firstOperand, secondOperand) => Math.round(firstOperand*1000000000000000 / secondOperand)/1000000000000000,

  '^': (firstOperand, secondOperand) => firstOperand ** secondOperand,

  '%': (firstOperand, secondOperand) => firstOperand % secondOperand,

  'sin': firstOperand => {if (calculator.grad == 'rad') {
        return Math.sin(firstOperand);
      } else {
        return Math.sin(firstOperand*0.0174533);
      }},

  'cos': firstOperand => {if (calculator.grad == 'rad') {
        return Math.cos(firstOperand);
      } else {
        return Math.cos(firstOperand*0.0174533);
      }},

  'tg': firstOperand => {if (calculator.grad == 'rad') {
        return Math.tan(firstOperand);
      } else {
        return Math.tan(firstOperand*0.0174533);
      }},

  'ctg': firstOperand => {if (calculator.grad == 'rad') {
        return Math.tan(firstOperand)**(-1);
      } else {
        return Math.tan(firstOperand*0.0174533)**(-1);
      }},

  'n!': function factorial(firstOperand) {
    return (firstOperand != 1) ? firstOperand*factorial(firstOperand-1): 1;
  },

  'open/close history':(firstOperand) =>  {
    if (calculator.history.visible == false) {
      document.querySelector('.divHistory').style.display = 'flex';
      calculator.history.visible = true;
    } else {
      document.querySelector('.divHistory').style.display = 'none';
      calculator.history.visible = false;
    }
    return calculator.displayValue;
  }, //при нажатии изменяется только видимость блока истории
};

function checkRadio() {
    var radio=document.getElementsByName('grad&rad');
    for (var i=0;i<radio.length; i++) {
        if (radio[i].checked) {
            return(radio[i].value);
        }
    }
}

function inputOperand(ourOperand) {
  const {
      displayValue,
      firstOperand,
      waitingForSecondOperand
  } = calculator;


  if (waitingForSecondOperand === true) {
      calculator.displayValue = ourOperand;
      calculator.waitingForSecondOperand = false;
  } else {
      calculator.displayValue = displayValue === '0' ? ourOperand : displayValue + ourOperand;
  }

  console.log(calculator);
}



function handleOperator(nextOperator) {
  const {
      firstOperand,
      displayValue,
      operator
  } = calculator
  const inputValue = parseFloat(displayValue);


  if (operator && calculator.waitingForSecondOperand) {
      calculator.operator = nextOperator;
      console.log(calculator);
      return;
  }

  if (firstOperand == null) {
      calculator.firstOperand = inputValue;

  } else if (operator) {


      const currentValue = firstOperand || 0;
      const result = allCalculation[operator](currentValue, inputValue);
      //ВЫВОДИМ ИСТОРИЮ
      calculator.history.hist[calculator.history.hist.length]="operation"+(calculator.history.hist.length-1)+' : '+currentValue +calculator.operator+  inputValue +"=" +result;
      document.querySelector('.divHistory').innerHTML =calculator.history.hist[calculator.history.hist.length-1]+'<br>'+ calculator.history.hist[calculator.history.hist.length-2]+'<br>' + calculator.history.hist[calculator.history.hist.length-3];

      calculator.displayValue = String(result);
      calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}

function updateDisplay() {
  const display = document.querySelector('.calc_all');
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calc_keys');
keys.addEventListener('click', (event) => {
  const {
      target
  } = event;
  if (!target.matches('button')) {
      return;
  }

  if (target.classList.contains('trig')) {
    calculator.firstOperand= calculator.displayValue;
    calculator.waitingForSecondOperand= false;
    if (checkRadio() == 'grad') {
      calculator.grad ='grad';
    } else {
      calculator.grad = 'rad';
    }

    calculator.operator=target.value;
  }
  if (target.classList.contains('clear')) {
    calculator.firstOperand= null;
    calculator.waitingForSecondOperand= false;
    calculator.displayValue = '0'
    updateDisplay();
    alert('clear');
    return;
  }

  if (target.classList.contains('operator')) {
      handleOperator(target.value);
      updateDisplay();
      return;
  }
  inputOperand(target.value);
  updateDisplay();
});
