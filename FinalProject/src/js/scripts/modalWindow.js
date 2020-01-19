export function modalWindow() {
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementById("close");

// Открываем модальное окно
btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById('pages').style.display="none";
  document.getElementById('sidebar').style.display="none";
  document.getElementById('footer').style.display ="none";
}

// закрываем при нажати  на крестик
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById('pages').style.display="flex";
  document.getElementById('sidebar').style.display="flex";
  document.getElementById('footer').style.display ="flex";
}

// закрываем при нажатии на область НЕ-окна
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById('pages').style.display="flex";
    document.getElementById('sidebar').style.display="flex";
    document.getElementById('footer').style.display ="flex";
  }
}

document.getElementById('chatSendMessage').addEventListener("click", () => {
  document.getElementById('chatHistory').innerHTML += `<br>${document.getElementById('messageText').value}`;
  document.getElementById('messageText').innerHTML = '' ;
})

}
