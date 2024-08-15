function verMas () {
    var tema = prompt('¿Te gustaría saber más?: 1) Horarios de salida - 2) Duracion de la actividad (Colocar solo el número 1 o 2 )')

    var contHora = document.getElementById('hora') 
    var contDuracion = document.getElementById('duracion')


    if ( tema == 1) {
        contHora.style.display= 'inline'
        contDuracion.style.display = 'none'
        
    }

    if ( tema == 2) {
        contHora.style.display= 'none'
        contDuracion.style.display = 'inline'
        
    }
}



function masInfo(){
    var titulo3 = document.createElement('p')
    var contp = document.createTextNode('Horarios: de 8am a 13pm. Incluye transporte y guía bilingüe. No incluye entrada a la reserva. Recomendamos que lleven ropa cómoda.')
    titulo3.appendChild (contp)
    document.getElementById('masInfo').appendChild(titulo3)
}




function detalles () {
    var tema2 = prompt('¿Te gustaria ver más informacion del Spa?: 1) Horarios, recomendaciones y + - 2) Todo lo que ofrece (Colocar solo el número 1 o 2 )')

    var contHorarios = document.getElementById('Horarios') 
    var contSpa = document.getElementById('Spa')

    if ( tema2 == 1) {
        contHorarios.style.display= 'inline'
        contSpa.style.display = 'none'
    }

    if ( tema2 == 2) {
        contHorarios.style.display= 'none'
        contSpa.style.display = 'inline'
    }
}