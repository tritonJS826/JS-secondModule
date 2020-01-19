import {action, actionFunc,actKeys} from './action.js';
import {navigation, navigationFunc,navKeys} from './navigation.js';





export function rebootListeners() {
  //после того как все отрисовали снимем все листенеры
  for (let key of navKeys) {
    key.removeEventListener("click", actionFunc);
  }
  for (let key of actKeys) {
    key.removeEventListener("click", navigationFunc);
  }
  //и развесим заново
  action();
  navigation();
  console.log('rebootListeners complete');

}
