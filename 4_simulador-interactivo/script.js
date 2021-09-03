const calcularGastos = function (){
    let gastosFinal = '';
    let gastosTotal = 0;
    let gastoNombre;

    while(gastoNombre != ''){
        gastoNombre = prompt('Ingrese la categoria del GASTO');
        if(gastoNombre == '') break;
        let gastoValor = parseInt(prompt('Ingrese el VALOR del GASTO "' + gastoNombre +'"'));
        gastosFinal += '- '+ gastoNombre + ': ' + gastoValor + '\n';
        gastosTotal += gastoValor;
    }
    return 'GASTOS MENSUALES: \n' + gastosFinal + '\nTOTAL: ' + gastosTotal;
}

console.log(calcularGastos());
