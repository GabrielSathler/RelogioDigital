const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const body = document.getElementsByTagName('body')[0];

function changeBackgroundColor(hr) {
    if (hr >= 6 && hr < 12) {
        body.classList.add('body-manha');
        body.classList.remove('body-tarde');
        body.classList.remove('body-noite');
    }

    else if (hr >= 12 && hr < 18) {
        body.classList.remove('body-manha');
        body.classList.add('body-tarde');
        body.classList.remove('body-noite');
    }

    else {
        body.classList.remove('body-manha');
        body.classList.remove('body-tarde');
        body.classList.add('body-noite');
    }
}

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

    changeBackgroundColor(hr);

}, 1000);
