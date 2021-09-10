const goleadores = [];
const minutos = [];

let entradaGol = prompt('Quien hizo el gol?');
let entradaMin;
if(entradaGol != '') {entradaMin = prompt('En que minuto?')}

while (entradaGol != ''){
    goleadores.push(entradaGol);
    minutos.push(entradaMin);
    entradaGol = prompt('Quien hizo el gol?');
    if(entradaGol == '') break;
    entradaMin = prompt('En que minuto?')
}

let golesDetalles = `${goleadores.length} ${goleadores.length > 1 ? 'GOLES' : 'GOL'}\n`;

for(let i = 0; i < goleadores.length; i++){
    golesDetalles += `min. ${minutos[i]}: ${goleadores[i]}\n`
}

console.log(golesDetalles);