// ABRIR E FECHAR VIDEO - ABRIR E FECHAR VIDEO - ABRIR E FECHAR VIDEO - ABRIR E FECHAR VIDEO
document.getElementById("openVideoBtn").onclick = function(){
    document.getElementById("imgcontainer").style.display = "none";
    document.getElementById("openVideoBtn").style.display = "none";
    document.getElementById("closeVideoBtn").style.display = "flex";
    document.getElementById("videoplay").style.display = "flex";
};

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




// ABRIR E FECHAR POPUP MEDIDAS - ABRIR E FECHAR POPUP MEDIDAS 
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


//  CORREÇÃO DE MEDIDAS, SEPARADORES E HIPERLINKS - CORREÇÃO DE MEDIDAS SEPARADORES E HIPERLINKS - CORREÇÃO DE MEDIDAS SEPARADORES E HIPERLINKS
function correção_separadores(){
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
        document.getElementsByClassName("newsImage")[opennedNews].style.minHeight = (aspectRatio*htmlWidth)+"px"
        document.getElementsByClassName("newsImage")[opennedNews].style.height = (aspectRatio*htmlWidth)+"px";
        document.getElementById("closeNewsContainer").style.top = (aspectRatio*htmlWidth)+"px"
        console.log("opennedNews: " + opennedNews + "\n(aspectRatio*htmlWidth)+'px'" +(aspectRatio*htmlWidth)+"px")
    };
}

var htmlWidth = document.getElementById("htmlPage").clientWidth;
var aspectRatio = 2000/5500
var openNews = false
var opennedNews
var id_open
var id_close

function openNoticia(noticia){
    openNews = true; 
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
   



window.onload = correção_separadores;
window.addEventListener("resize", correção_separadores);



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

document.getElementById("AnnaPaunéSerra").onclick = function(){
    modal = document.getElementById("AnnaPaunéSerraProfile");
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("AnnaPaunéSerraCardContent").style.display = "none";
        }
    }
    modal.style.display = "flex";
    document.getElementById("AnnaPaunéSerraCardContent").style.display = "flex";
}

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

document.getElementById("DavidTomé").onclick = function(){
    modal = document.getElementById("DavidToméProfile");
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("DavidToméCardContent").style.display = "none";
        }
    }
    modal.style.display = "flex";
    document.getElementById("DavidToméCardContent").style.display = "flex";
}

document.getElementById("DominykaIvanovskytė").onclick = function(){
    modal = document.getElementById("DominykaIvanovskytėProfile");
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("DominykaIvanovskytėCardContent").style.display = "none";
        }
    }
    modal.style.display = "flex";
    document.getElementById("DominykaIvanovskytėCardContent").style.display = "flex";
}

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


document.getElementById("JonathanAraújo").onclick = function(){
    modal = document.getElementById("JonathanAraújoProfile");
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("JonathanAraújoCardContent").style.display = "none";
        }
    }
    modal.style.display = "flex";
    document.getElementById("JonathanAraújoCardContent").style.display = "flex";
}

    