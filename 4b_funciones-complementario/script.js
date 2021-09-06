const ingresarCosto = () => {
    const costo = prompt('Ingrese el costo del producto');
    calcularIVA(costo);
}

const calcularIVA = (costo) => {
    const costoFinal = costo * 1.21;
    mostrarCostoFinal(costoFinal);
}

const mostrarCostoFinal = (costoFinal) => {
    alert('El costo final (IVA incluido) es: ' + costoFinal);
}

ingresarCosto();