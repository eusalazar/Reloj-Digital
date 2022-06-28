const $tiempo = document.querySelector('.tiempo'),
$fecha = document.querySelector('.fecha');

function relojDigital(){
    let fecha = new Date(),
    dia = fecha.getDate(),
    mes = fecha.getMonth() + 1,
    anio = fecha.getFullYear(),
    diaSemana = fecha.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2)

    let timeString = fecha.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

    let semana = ['DOM','LUN','MAR','MIER','JUE','VIER','SAB'];
    let verSemana = (semana[diaSemana]);
    $fecha.innerHTML = `${anio}-${mes}-${dia} ${verSemana}`
}
setInterval(() => {
    relojDigital()
}, 1000);