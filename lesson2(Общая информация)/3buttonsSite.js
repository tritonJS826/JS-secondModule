let butChangeStyle = document.getElementById('butChangeStyle');
let butToOtherPage = document.getElementById('butToOtherPage');
let butDelAll = document.getElementById('butDelAll');

butChangeStyle.addEventListener("click", changeStyle);
butToOtherPage.addEventListener("click",goToOtherPage);
butDelAll.addEventListener("click", delAll);

function changeStyle(){
  document.body.style.backgroundImage = "url('forest.jpg')";
  butChangeStyle.style.background = "black";
  butChangeStyle.style.padding = "20px 20px";
  butChangeStyle.style.color= "white"
  butToOtherPage.style.background = "black";
  butToOtherPage.style.padding = "20px 20px";
  butToOtherPage.style.color= "white"
  butDelAll.style.background ="black";
  butDelAll.style.padding = "20px 20px";
  butDelAll.style.color= "white";
}

function goToOtherPage(){
  window.location.href = "3buttonSite2.html";
}

function delAll(){
  document.body.innerHTML = "";
  document.body.innerHTML += "<div><h1>Header</h1></div>";
  document.body.innerHTML += "<div><div>Data</div><div>Info</div></div>";

}
