

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
    }
    var intFrameHeight = self.innerHeight;
    var intFrameWidth = self.innerWidth;
    var ratio = intFrameWidth / intFrameHeight
    console.log(ratio)
    if (ratio < 1.55) {
        document.getElementById("closeVideoBtn").style.display = "none";
    }
    else if (ratio >= 1.55) {
        document.getElementById("closeVideoBtn").style.display = "flex";
    }
}



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

    