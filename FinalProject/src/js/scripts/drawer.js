//переписывает по html в блок whereId c применением css
//по сути рисует сайт по блокам

export function drawer (html,css ,whereId){
    let style = document.getElementById(`${whereId}Style`);
    style.innerHTML = css;

    let block = document.getElementById(whereId);
    block.innerHTML=html;



    //document.head.appendChild(style);


    console.log('drowerComplete '+ whereId);
  }
