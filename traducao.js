document.getElementById("PT").onclick = function () {
    document.getElementById("EN").style.fontWeight = "300";
    document.getElementById("PT").style.fontWeight = "bold";
    document.getElementsByClassName("NavBarListItem")[0].innerHTML = "Noticias";
    document.getElementsByClassName("NavBarListItem")[1].innerHTML = "Programa";
    document.getElementsByClassName("NavBarListItem")[2].innerHTML = "Quem Somos";
    document.getElementById("closeVideoBtnText").innerHTML = "Fechar";
    document.getElementById("openVideoBtnText").innerHTML = "Abrir Video";
    document.getElementById("mainPhotoSrc").src = "Imagens/MainPhoto.svg";
    document.getElementById("separadorNoticiasSrc").src="/Imagens/SeparadorNoticias.svg";
}


document.getElementById("EN").onclick = function () {
    document.getElementById("PT").style.fontWeight = "300";
    document.getElementById("EN").style.fontWeight = "bold";
    document.getElementsByClassName("NavBarListItem")[0].innerHTML = "News";
    document.getElementsByClassName("NavBarListItem")[1].innerHTML = "Program";
    document.getElementsByClassName("NavBarListItem")[2].innerHTML = "About us";
    document.getElementById("closeVideoBtnText").innerHTML = "Close";
    document.getElementById("openVideoBtnText").innerHTML = "Open Video";
    document.getElementById("mainPhotoSrc").src = "Imagens/MainPhoto_EN.svg";
    document.getElementById("separadorNoticiasSrc").src="/Imagens/SeparadorNoticias_EN.svg";
}