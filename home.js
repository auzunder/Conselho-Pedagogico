

var btn_01 = document.getElementById("medidaMateriais");
var btn_02 = document.getElementById("medidaESEC");
var btn_03 = document.getElementById("medidaCaloiros");
var btn_04 = document.getElementById("medidaMateriais");
var btn_05 = document.getElementById("medidaMateriais");
var btn_06 = document.getElementById("medidaMateriais");
var btn_07 = document.getElementById("medidaMateriais");
var btn_08 = document.getElementById("medidaMateriais");
var span = document.getElementsByClassName("close")[0];

btn_01.onclick = function(){
    modal = document.getElementById("materiaisPopUp");
    modal.style.display = "flex";
}
btn_02.onclick = function(){
    modal = document.getElementById("ESECPopUp");
    modal.style.display = "flex";
}
btn_03.onclick = function(){
    modal = document.getElementById("CaloirosPopUp");
    modal.style.display = "flex";
}
btn_04.onclick = function(){
    modal = document.getElementById("materiaisPopUp");
    modal.style.display = "flex";
}
btn_05.onclick = function(){
    modal = document.getElementById("materiaisPopUp");
    modal.style.display = "flex";
}
btn_06.onclick = function(){
    modal = document.getElementById("materiaisPopUp");
    modal.style.display = "flex";
}
btn_07.onclick = function(){
    modal = document.getElementById("materiaisPopUp");
    modal.style.display = "flex";
}
btn_08.onclick = function(){
    modal = document.getElementById("materiaisPopUp");
    modal.style.display = "flex";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}