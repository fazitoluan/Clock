const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(sec<2){
        textSec.textContent = 'Segundo';
    }
    else{
        textSec.textContent = 'Segundos';
    }

    if(min<2){
        textMin.textContent = 'Minuto';
    }
    else{
        textMin.textContent = 'Minutos';
    }

    if(hora<2){
        textHr.textContent = 'Hora';
    }
    else{
        textHr.textContent = 'Horas';
    }

    if(hora < 10){
        hora = '0' + hora;
    }

    if(min < 10){
        min = '0' + min;
    }

    if(sec < 10){
        sec = '0' + sec;
    }

    horas.textContent = hora;
    minutos.textContent = min;
    segundos.textContent = sec;
})
