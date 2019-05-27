
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


function tabular(evento, identificador) 
{
    let x, contenido, enlace;
    contenido = document.getElementsByClassName("contenido");

    for (x = 0; x < contenido.length; x++) 
    {
        contenido[x].style.display = "none";
    }

    enlace = document.getElementsByClassName("enlace");

    for (x = 0; x < enlace.length; x++) 
    {
        enlace[x].className = enlace[x].className.replace(" active", "");
    }

    document.getElementById(identificador).style.display = "block";
    evento.currentTarget.className += " active";
}