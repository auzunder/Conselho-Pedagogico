// ABRIR E FECHAR VIDEO - ABRIR E FECHAR VIDEO - ABRIR E FECHAR VIDEO - ABRIR E FECHAR VIDEO

//Abrir video e esconder imagem de grupo
document.getElementById("openVideoBtn").onclick = function(){
    document.getElementById("imgcontainer").style.display = "none";
    document.getElementById("openVideoBtn").style.display = "none";
    document.getElementById("closeVideoBtn").style.display = "flex";
    document.getElementById("videoplay").style.display = "flex";
};

//Pausar e esconder video e abrir imagem de grupo
document.getElementById("closeVideoBtn").onclick = function(){
    var videos = document.querySelectorAll('iframe, video');
    Array.prototype.forEach.call(videos, function (video) {
        if (video.tagName.toLowerCase() === 'video') {
            video.pause();
        } else {
            var src = video.src;
            video.src = src;
        }
    });
    document.getElementById("videoplay").style.display = "none";
    document.getElementById("closeVideoBtn").style.display = "none";
    document.getElementById("openVideoBtn").style.display = "flex";
    document.getElementById("imgcontainer").style.display = "flex";
};



// ABRIR E FECHAR NOTICIAS - ABRIR E FECHAR NOTICIAS - ABRIR E FECHAR NOTICIAS - ABRIR E FECHAR NOTICIAS - ABRIR E FECHAR NOTICIAS - ABRIR E FECHAR NOTICIAS
var htmlWidth = document.getElementById("htmlPage").clientWidth;
var aspectRatio = 2000/5500
var openNews = false
var opennedNews
var id_open
var id_close

//Identificar noticia e abrir
function openNoticia(noticia){
    openNews = true;
    opennedNews = noticia
    if (noticia == 0){
        id_open = "noticia1"
        id_close = "closeNewsContainer1"
    }
    else if (noticia == 1){
        id_open = "noticia2"
        id_close = "closeNewsContainer2"
    }
    else if (noticia == 2){
        id_open = "noticia3"
        id_close = "closeNewsContainer3"
    }
    else if (noticia == 3){
        id_open = "noticia4"
        id_close = "closeNewsContainer4"
    }
    document.getElementsByClassName("newsImage")[noticia].style.minHeight = (aspectRatio*htmlWidth)+"px"
    document.getElementsByClassName("newsImage")[noticia].style.height = (aspectRatio*htmlWidth)+"px"
    document.getElementById(id_close).style.top = (aspectRatio*htmlWidth)+"px"
    document.getElementById(id_open).style.display = "flex";
    document.getElementById("htmlPage").style.overflowY = "hidden";
};

//Fechar noticia identificada
function closeNews(noticia) {
    openNews = false;
    if (noticia == 0){
        id_open = "noticia1"
    }
    else if (noticia == 1){
        id_open = "noticia2"
    }
    else if (noticia == 2){
        id_open = "noticia3"
    }
    else if (noticia == 3){
        id_open = "noticia4"
    }
    document.getElementById(id_open).style.display = "none";
    document.getElementById("htmlPage").style.overflowY = "scroll";
}

//Abrir primeira noticia
document.getElementById("primeiraNoticia").onclick = function (){
    openNoticia(0)
};
//Fechar Primeira noticia
document.getElementById("closeFirstNews").onclick = function (){
    closeNews(0)
};

//Abrir Segunda noticia
document.getElementById("segundaNoticia").onclick = function(){
    openNoticia(1)
};
//Fechar Segunda noticia
document.getElementById("closeSecondNews").onclick = function(){
    closeNews(1)
};

//Abrir Terceira noticia
document.getElementById("terceiraNoticia").onclick = function(){
    openNoticia(2)
};
//Fechar Terceira noticia
document.getElementById("closeThirdNews").onclick = function(){
    closeNews(2)
};

//Abrir Quarta noticia
document.getElementById("quartaNoticia").onclick = function(){
    openNoticia(3)
};
//Fechar Quarta noticia
document.getElementById("closeFourthNews").onclick = function(){
    closeNews(3)
};



// ABRIR E FECHAR POPUP MEDIDAS - ABRIR E FECHAR POPUP MEDIDAS 
var btn_01 = document.getElementById("medidaMateriais");
var btn_02 = document.getElementById("medidaESEC");
var btn_03 = document.getElementById("medidaCaloiros");
var btn_04 = document.getElementById("medidaCursos");
var btn_05 = document.getElementById("medidaCartao");
var btn_06 = document.getElementById("medidaHor??rios");
var btn_07 = document.getElementById("medidaNovoPolo");
var btn_08 = document.getElementById("medidaErasmus");

//Abrir pop-ip medida materiais
btn_01.onclick = function(){
    modal = document.getElementById("materiaisPopUp");
    document.getElementById("close_1").onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}

//Abrir pop-ip medida ESEC
btn_02.onclick = function(){
    modal = document.getElementById("ESECPopUp");
    document.getElementById("close_2").onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}

//Abrir pop-ip medida Caloiros
btn_03.onclick = function(){
    modal = document.getElementById("CaloirosPopUp");
    document.getElementById("close_3").onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}

//Abrir pop-ip medida Cursos
btn_04.onclick = function(){
    modal = document.getElementById("cursosPopUp");
    document.getElementById("close_4").onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}

//Abrir pop-ip medida Cart??o Multibanco
btn_05.onclick = function(){
    modal = document.getElementById("cartaoPopUp");
    document.getElementById("close_5").onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}

//Abrir pop-ip medida Hor??rios
btn_06.onclick = function(){
    modal = document.getElementById("hor??riosPopUp");
    document.getElementById("close_6").onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}

//Abrir pop-ip medida Novo Polo
btn_07.onclick = function(){
    modal = document.getElementById("NovoPoloPopUp");
    document.getElementById("close_7").onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}

//Abrir pop-ip medida Erasmus
btn_08.onclick = function(){
    modal = document.getElementById("ErasmusPopUp");
    document.getElementById("close_8").onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "flex";
}

//Fechar pop-up ao clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



//  CORRE????O DE MEDIDAS, SEPARADORES E HIPERLINKS - CORRE????O DE MEDIDAS SEPARADORES E HIPERLINKS - CORRE????O DE MEDIDAS SEPARADORES E HIPERLINKS
function corre????o_separadores(){
    if (document.getElementById("noticiasMarker").clientWidth < 1400){
        document.getElementById("noticiasMarker").style.removeProperty("top")
        document.getElementById("noticiasMarker").style.removeProperty("relative")
        document.getElementById("noticiasMarker").style.height = (3840 / (document.getElementById("noticiasMarker").clientWidth/2)) + "px";
        document.getElementById("programaMarker").style.removeProperty("top")
        document.getElementById("programaMarker").style.removeProperty("relative")
        document.getElementById("programaMarker").style.height = (3840 / (document.getElementById("programaMarker").clientWidth/2)) + "px";
        document.getElementById("quemSomosMarker").style.removeProperty("top")
        document.getElementById("quemSomosMarker").style.removeProperty("relative")
        document.getElementById("quemSomosMarker").style.height = (3840 / (document.getElementById("quemSomosMarker").clientWidth/2)) + "px";
    }
    else{
        document.getElementById("noticiasMarker").style.top = 5 + "px";
        document.getElementById("noticiasMarker").style.position = "relative";
        document.getElementById("noticiasMarker").style.height = "1px";
        document.getElementById("programaMarker").style.top = 7 + "px";
        document.getElementById("programaMarker").style.position = "relative";
        document.getElementById("programaMarker").style.height = "1px";
        document.getElementById("quemSomosMarker").style.top = 7 + "px";
        document.getElementById("quemSomosMarker").style.position = "relative";
        document.getElementById("quemSomosMarker").style.height = "1px";
    };

    var intFrameHeight = self.innerHeight;
    var intFrameWidth = self.innerWidth;
    var ratio = intFrameWidth / intFrameHeight
    if (ratio < 1.55) {
        document.getElementById("closeVideoBtn").style.display = "none";
    }
    else if (ratio >= 1.55) {
        document.getElementById("closeVideoBtn").style.display = "flex";
    };

    htmlWidth = document.getElementById("htmlPage").clientWidth;
    if (openNews == true){
        if (opennedNews == 0){
            id_close = "closeNewsContainer1"
        }
        else if (opennedNews == 1){
            id_close = "closeNewsContainer2"
        }
        else if (opennedNews == 2){
            id_close = "closeNewsContainer3"
        }
        else if (opennedNews == 3){
            id_close = "closeNewsContainer4"
        }
        document.getElementsByClassName("newsImage")[opennedNews].style.minHeight = (aspectRatio*htmlWidth)+"px"
        document.getElementsByClassName("newsImage")[opennedNews].style.height = (aspectRatio*htmlWidth)+"px";
        document.getElementById(id_close).style.top = (aspectRatio*htmlWidth)+"px"
    };
}
window.onload = corre????o_separadores;
window.addEventListener("resize", corre????o_separadores);



// ABRIR E FECHAR POP-UPS DE PERFIL DE ELEMENTO - ABRIR E FECHAR POP-UPS DE PERFIL DE ELEMENTO - ABRIR E FECHAR POP-UPS DE PERFIL DE ELEMENTO - ABRIR E FECHAR POP-UPS DE PERFIL DE ELEMENTO

//Perfil Ana Ferreira
document.getElementById("AnaFerreira").onclick = function(){
    modal = document.getElementById("AnaFerreiraProfile");
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("AnaFerreiraCardContent").style.display = "none";
        }
    }
    modal.style.display = "flex";
    document.getElementById("AnaFerreiraCardContent").style.display = "flex";
}

//Perfil Anna Paun?? Serra
document.getElementById("AnnaPaun??Serra").onclick = function(){
    modal = document.getElementById("AnnaPaun??SerraProfile");
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("AnnaPaun??SerraCardContent").style.display = "none";
        }
    }
    modal.style.display = "flex";
    document.getElementById("AnnaPaun??SerraCardContent").style.display = "flex";
}

//Perfil David Dias
document.getElementById("DavidDias").onclick = function(){
    modal = document.getElementById("DavidDiasProfile");
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("DavidDiasCardContent").style.display = "none";
        }
    }
    modal.style.display = "flex";
    document.getElementById("DavidDiasCardContent").style.display = "flex";
}

//Perfil David Tom??
document.getElementById("DavidTom??").onclick = function(){
    modal = document.getElementById("DavidTom??Profile");
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("DavidTom??CardContent").style.display = "none";
        }
    }
    modal.style.display = "flex";
    document.getElementById("DavidTom??CardContent").style.display = "flex";
}

//Perfil Dominyka Ivanovskyt??
document.getElementById("DominykaIvanovskyt??").onclick = function(){
    modal = document.getElementById("DominykaIvanovskyt??Profile");
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("DominykaIvanovskyt??CardContent").style.display = "none";
        }
    }
    modal.style.display = "flex";
    document.getElementById("DominykaIvanovskyt??CardContent").style.display = "flex";
}

//Perfil Edgar Tavares
document.getElementById("EdgarTavares").onclick = function(){
    modal = document.getElementById("EdgarTavaresProfile");
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("EdgarTavaresCardContent").style.display = "none";
        }
    }
    modal.style.display = "flex";
    document.getElementById("EdgarTavaresCardContent").style.display = "flex";
}

//Perfil Jonathan Ara??jo
document.getElementById("JonathanAra??jo").onclick = function(){
    modal = document.getElementById("JonathanAra??joProfile");
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("JonathanAra??joCardContent").style.display = "none";
        }
    }
    modal.style.display = "flex";
    document.getElementById("JonathanAra??joCardContent").style.display = "flex";
}