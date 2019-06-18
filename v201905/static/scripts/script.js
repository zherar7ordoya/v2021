/*----------------------------------------*\
  Desarrollado con ♡ por © Gerardo Tordoya
\*----------------------------------------*/


function tabular(evento, identificador)
{
    let x, contenido, pestaña;
    contenido = document.getElementsByClassName("contenido");

    for (x = 0; x < contenido.length; x++)
    {
        contenido[x].style.display = "none";
    }

    pestaña = document.getElementsByClassName("pestaña");

    for (x = 0; x < pestaña.length; x++)
    {
        pestaña[x].className = pestaña[x].className.replace(" active", "");
    }

    document.getElementById(identificador).style.display = "block";
    evento.currentTarget.className += " active";

    document.getElementById("welcome-section").style.display = "none";
}