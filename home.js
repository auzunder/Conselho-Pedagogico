

var btn_01 = document.getElementById("medidaMateriais");
var btn_02 = document.getElementById("medidaESEC");
var btn_03 = document.getElementById("medidaCaloiros");
var btn_04 = document.getElementById("medidaCursos");
var btn_05 = document.getElementById("medidaCartao");
var btn_06 = document.getElementById("medidaHorários");
var btn_07 = document.getElementById("medidaNovoPolo");
var btn_08 = document.getElementById("medidaErasmus");


btn_01.onclick = function(){
    modal = document.getElementById("materiaisPopUp");
    document.getElementById("close_1").onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}
btn_02.onclick = function(){
    modal = document.getElementById("ESECPopUp");
    document.getElementById("close_2").onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}
btn_03.onclick = function(){
    modal = document.getElementById("CaloirosPopUp");
    document.getElementById("close_3").onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}
btn_04.onclick = function(){
    modal = document.getElementById("cursosPopUp");
    document.getElementById("close_4").onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}
btn_05.onclick = function(){
    modal = document.getElementById("cartaoPopUp");
    document.getElementById("close_5").onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}
btn_06.onclick = function(){
    modal = document.getElementById("horáriosPopUp");
    document.getElementById("close_6").onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}
btn_07.onclick = function(){
    modal = document.getElementById("NovoPoloPopUp");
    document.getElementById("close_7").onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}
btn_08.onclick = function(){
    modal = document.getElementById("ErasmusPopUp");
    document.getElementById("close_8").onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}